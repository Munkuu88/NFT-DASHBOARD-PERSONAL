import type { NextPage } from "next";
import { Home } from "../domain/home";
import { useAxios } from "../axios";

const HomePage: NextPage = () => {
  const datas = useAxios("https://api.nft.mn/nft1003/analytic");
  const totalPrice = useAxios(
    "https://api.nft.mn/nft1003/analytic/total-saled-tokens"
  );
  return <Home datas={datas} totalPrice={totalPrice} />;
};

export default HomePage;
