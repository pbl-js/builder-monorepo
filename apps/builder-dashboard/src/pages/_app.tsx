import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppApolloProvider } from '../app/graphql/AppApolloProvider';
import { useApollo } from '../app/graphql/client';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const { client } = useApollo(pageProps);
  return (
    <>
      <Head>
        <title>Builder</title>
      </Head>
      <AppApolloProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </AppApolloProvider>
    </>
  );
}

export default CustomApp;
