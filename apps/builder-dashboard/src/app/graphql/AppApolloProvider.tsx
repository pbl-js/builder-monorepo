import { ApolloProvider } from '@apollo/client';

import { useApollo } from './client';

import type { AppProps } from 'next/dist/shared/lib/router/router';
import type { PropsWithChildren } from 'react';

export type AppApolloProviderProps = PropsWithChildren<
  Pick<AppProps, 'pageProps'>
>;

export function AppApolloProvider({
  children,
  pageProps,
}: AppApolloProviderProps): JSX.Element {
  const { client } = useApollo(pageProps);

  if (!client) {
    return <div>Initializing...</div>; // TODO: add some pretty loader
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
