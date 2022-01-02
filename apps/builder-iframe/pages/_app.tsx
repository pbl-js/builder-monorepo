import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BOB } from '@builder-npm';

BOB.init('siema');

const ProductTile = dynamic(
  async () => (await import('../components/productTile')).default
);

console.log(<ProductTile text="elo" price={44} />);
BOB.registerComponent(ProductTile, {
  name: 'DEV-product-tile',
  inputs: [
    { name: 'text', type: 'string', defaultValue: 'text' },
    { name: 'price', type: 'number', defaultValue: 4 },
  ],
});

function CustomApp({ Component, pageProps }: AppProps) {
  // const ComponentTest = BOB._customComponents[0].jsxElement;

  return (
    <>
      <Head>
        <title>!!!IFRAME!!!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to builder-iframe!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
