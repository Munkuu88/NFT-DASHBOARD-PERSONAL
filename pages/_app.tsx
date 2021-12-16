import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../layout/index";

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout Component={Component} pageProps={pageProps} />;
}

export default MyApp;
