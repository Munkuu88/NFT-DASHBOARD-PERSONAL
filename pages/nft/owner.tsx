import type { NextPage } from "next";
import { Home } from "../../domain/home";
import { useAxios } from "../../axios";
import { Owners } from "../../domain/nft/owner";

const HomePage: NextPage = () => {
  let datas = []
  datas = useAxios("http://localhost:5000/nft1003/analytic/info/nft/owner");

  console.log(datas);
  return <Owners datas={datas}  />;
};

export default HomePage;
