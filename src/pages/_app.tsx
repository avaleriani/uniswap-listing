import type { AppProps } from "next/app";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pool Listing</title>
        <meta name="description" content="Uniswap pool listing/watchlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
