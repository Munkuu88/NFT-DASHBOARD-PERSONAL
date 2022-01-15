import type { NextPage } from "next";
import { Home } from "../../domain/home";
import { useAxios } from "../../axios";
import { Owners } from "../../domain/nft/owner";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage: NextPage = () => {
  let [datas, setData] = useState([])
  let [loader, setLoader] = useState(false)
  let collections = []
  let [id, setId] = useState('61d4f030df4a9394c8aa237c')

  const clickHanle = (e: any) => {
    setId(e.target.value)
  }

  useEffect(() => {
    setLoader(true)
    setData([])
    axios.get("https://nft-analytic-system.herokuapp.com/nft/owners/" + id)
      .then(res => {
        setData(res.data)
      })
      .finally(() => setLoader(false))
  }, [id])

  collections = useAxios("https://api.nft.mn/nft1003/v1/nft/collection");

  return (
    <>
      <Box>
        <CollectionButtons collections={collections} clickHanle={clickHanle} />
      </Box>
      <Flex justifyContent='center' className="owners">
        {loader ? "Уншиж байна..." : ""}
        <Owners datas={datas} />
      </Flex>
    </>
  )
};

const CollectionButtons = ({collections, clickHanle}:any) => {
  console.log(collections)
  return <>
    {
      collections.map((collection: any) => {
        return (
          <Button value={collection._id} onClick={clickHanle} margin={3}>
            {collection.name}
          </Button>
        )
      })
    }
  </>
}

export default HomePage;
