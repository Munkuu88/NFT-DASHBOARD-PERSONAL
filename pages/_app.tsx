import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../layout/index";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "https://nft-analytic-system.herokuapp.com";
  // axios.defaults.baseURL = "http://localhost:7006";
  return <Layout Component={Component} pageProps={pageProps} />;
}

export default MyApp;
