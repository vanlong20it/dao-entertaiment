import "bootstrap-icons/font/bootstrap-icons.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Fragment, ReactElement, ReactNode } from "react";
import "swiper/css";
import "../styles/globals.css";
import "../styles/styles.scss";

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
      {getLayout(<Component {...pageProps} />)}
    </Fragment>
  );
}

export default MyApp;
