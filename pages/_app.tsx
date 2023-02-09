import "bootstrap-icons/font/bootstrap-icons.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Fragment, ReactElement, ReactNode } from "react";
import "swiper/css";
import "../styles/globals.css";
import "../styles/styles.scss";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Fragment>
      <Head>
        <title>Dao entertainment</title>
        <meta name="description" content="Make you better" />
        <meta name="revisit-after" content="1 days" />
        <meta
          name="keywords"
          content="dao music,music platforms, daoentertainment, dao, dao-entertainment"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all,index,follow" />
        <meta name="google" content="dao entertainment" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Fragment>
  );
}

export default MyApp;
