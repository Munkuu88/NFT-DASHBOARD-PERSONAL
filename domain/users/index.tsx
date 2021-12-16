import {
  Box,
  Grid,
  GridItem,
  Flex,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Detail = ["UserName", "Phone", "ID"];

const DetailName = ({ detail }: { detail: string }) => {
  return (
    <GridItem fontSize="xl" fontWeight="semibold">
      {detail}
    </GridItem>
  );
};

export function AllUsers({ users }: any) {
  if (!users) return null;
  const [name, setName] = useState("");

  return (
    <Flex w="100%" maxW="2000px" justifyContent="center">
      <Box w="70%">
        <Flex flexDir="column">
          <Grid
            gap={4}
            templateColumns="repeat(3, 1fr)"
            py="20px"
            borderBottom="1px solid black"
          >
            {Detail.map((el, ind) => {
              return <DetailName detail={el} key={ind} />;
            })}
          </Grid>
          <Flex justifyContent="space-between">
            <HStack>
              <Text fontWeight="bold">Нийт хэрэлэгч:</Text>
              <Text color="green">{users.length}</Text>
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
          {users
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
                <Grid key={ind} gap={4} templateColumns="repeat(3, 1fr)">
                  <GridItem>{el.userName}</GridItem>
                  <GridItem>{el.phoneNumber}</GridItem>
                  <GridItem>{el.id}</GridItem>
                </Grid>
              );
            })}
        </Flex>
      </Box>
    </Flex>
  );
}
