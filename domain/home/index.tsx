import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Detail = ["UserName", "Phone", "title", "price", "createdAt", "ID"];

const DetailName = ({ detail }: { detail: string }) => {
  return (
    <GridItem fontSize="xl" fontWeight="semibold">
      {detail}
    </GridItem>
  );
};

export function Home({ datas, totalPrice }: { datas: any; totalPrice: any }) {
  if (!datas) return null;
  console.log("pp", datas);
  const [name, setName] = useState("");

  return (
    <Flex w="100%" maxW="2000px" justifyContent="center">
      <Box w="70%">
        <Flex flexDir="column">
          <Grid
            gap={4}
            templateColumns="repeat(6, 1fr)"
            py="20px"
            borderBottom="1px solid black"
          >
            {Detail.map((el, ind) => {
              return <DetailName detail={el} key={ind} />;
            })}
          </Grid>
          <Flex justifyContent="space-between">
            <HStack>
              <Text fontWeight="bold">Нийт зарагдсан барааны үнэ:</Text>
              <Text color="green">
                {Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "MNT",
                }).format(totalPrice.totalPrice)}
              </Text>
            </HStack>
            <Input
              type="number"
              placeholder="Search"
              my="20px"
              w="20%"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Flex>
          {datas
            .filter((val: any) => {
              if (name == "") {
                return val;
              } else {
                if (
                  val.phoneNumber &&
                  val.phoneNumber.toLowerCase().includes(name.toLowerCase())
                ) {
                  return val;
                }
              }
            })
            .map((el: any, ind: number) => {
              return (
                <Grid key={ind} gap={4} templateColumns="repeat(6, 1fr)">
                  <GridItem>{el.userName}</GridItem>
                  <GridItem>{el.phoneNumber}</GridItem>
                  <GridItem>{el.title}</GridItem>
                  <GridItem>{el.price}</GridItem>
                  <GridItem>{el.createdAt}</GridItem>
                  <GridItem>{el.id}</GridItem>
                </Grid>
              );
            })}
        </Flex>
      </Box>
    </Flex>
  );
}
