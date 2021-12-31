import {
  ApolloCache,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import merge from 'deepmerge';
import isDeepEqual from 'fast-deep-equal/react';
import { useEffect, useState } from 'react';
import { useEffectOnce, usePrevious } from 'react-use';

import { isServer } from '../../common/utils/isServer';
import { typePolicies } from './typePolicies';

import type { NormalizedCacheObject } from '@apollo/client';
import type { GetServerSidePropsResult, GetStaticPropsResult } from 'next';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const SERVER_URL = 'http://localhost:1337/graphql';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createCache() {
  return new InMemoryCache({ typePolicies });
}

function createApolloClient(cache?: ApolloCache<NormalizedCacheObject>) {
  return new ApolloClient({
    ssrMode: isServer(),
    link: new HttpLink({
      uri: SERVER_URL,
      credentials: 'same-origin',
    }),
    cache: cache || createCache(),
  });
}

function mergeCache(
  cache1: NormalizedCacheObject,
  cache2: NormalizedCacheObject
) {
  return merge(cache1, cache2, {
    // combine arrays using object equality (like in sets)
    arrayMerge: (destinationArray, sourceArray) => [
      ...sourceArray,
      ...destinationArray.filter((d) =>
        sourceArray.every((s) => !isDeepEqual(d, s))
      ),
    ],
  });
}

export function initializeApollo(
  cache?: ApolloCache<NormalizedCacheObject>
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(cache);

  // For SSG and SSR always create a new Apollo Client
  if (isServer()) return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export async function addApolloState<
  P extends Record<string, unknown> | undefined
>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: GetServerSidePropsResult<P> | GetStaticPropsResult<P>,
  existingCache?: NormalizedCacheObject
): Promise<GetServerSidePropsResult<P> | GetStaticPropsResult<P>> {
  if (!('props' in pageProps)) return pageProps;

  const props = await Promise.resolve(pageProps.props);

  if (!props) return pageProps;

  if (existingCache) {
    props[APOLLO_STATE_PROP_NAME] = mergeCache(
      client.cache.extract(),
      existingCache
    );
  } else {
    props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

function mergeAndRestoreCache(
  client: ApolloClient<NormalizedCacheObject>,
  state: NormalizedCacheObject | undefined
) {
  if (!state) return;

  // Get existing cache, loaded during client side data fetching
  const existingCache = client.extract();
  // Merge the existing cache into data passed from getStaticProps/getServerSideProps
  const data = mergeCache(state, existingCache);
  // Restore the cache with the merged data
  client.cache.restore(data);
}

export function useApollo(pageProps: Record<string, unknown>): {
  client: ApolloClient<NormalizedCacheObject> | undefined;
} {
  const state = pageProps[APOLLO_STATE_PROP_NAME] as
    | NormalizedCacheObject
    | undefined;
  const previousState = usePrevious(state);

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffectOnce(() => {
    async function init() {
      const cache = createCache();

      const client = initializeApollo(cache);

      mergeAndRestoreCache(client, state);

      setClient(client);
    }

    init();
  });

  useEffect(() => {
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here during page transitions
    if (
      client &&
      state &&
      previousState &&
      !isDeepEqual(state, previousState)
    ) {
      mergeAndRestoreCache(client, state);
    }
  }, [state, previousState, client]);

  return { client };
}
