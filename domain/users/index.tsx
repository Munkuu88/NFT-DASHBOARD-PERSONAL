import {
  Box,
  Grid,
  GridItem,
  Flex,
  Input,
  HStack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Detail = ["UserName", "Phone", "ID"];

const DetailName = ({ detail }: { detail: string }) => {
  return (
    <GridItem fontSize="xl" fontWeight="semibold">
      {detail}
    </GridItem>
  );
};

export function AllUsers() {
  const limit = 150
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  let timeout: any = null

  useEffect(() => {
    setLoader(true);
    setUsers([])

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      axios.post("/users", {
        page: page,
        limit,
        s: name,
        sort: "DESC",
        sortBy: "createdAt"
      })
        .then(({ data }) => {
          console.log(data)
          setCount(data.count);
          setUsers(data.result);
        })
        .catch((err) => {
          console.log(err)
        }
        ).finally(() => setLoader(false));
    }, 2000)
  }, [name, page])

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
              <Text color="green">{count}</Text>
            </HStack>
            <Input
              type="text"
              placeholder="Search"
              my="20px"
              w="20%"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Flex>
          {users.map((el: any, ind: number) => {
            return (
              <Grid key={ind} gap={4} templateColumns="repeat(3, 1fr)">
                <GridItem>{el.userName}</GridItem>
                <GridItem>{el.phoneNumber}</GridItem>
                <GridItem>{el.id}</GridItem>
              </Grid>
            );
          })}

          <Box w="100%" textAlign={"center"}>
            {loader && "Уншиж байна..."}
            <Divider />
            <Pagination {...{ page, setPage, length: Math.floor(count/limit) }} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}


const Pagination = ({ length, page, setPage }: any) => {
  const [pages, setPages] = useState(Array(length).fill(0))

  const changePage = (e:any) => {
    console.log(e.target.value)
    setPage(Number(e.target.value))
  }
  useEffect(() => {
    setPages(Array(length).fill(0))
  }, [page,length])

  return (
    <Box my="6">
      {pages.map((el: any, ind: number) => <Button mx="2" value={ind} onClick={changePage} key={ind+el} colorScheme={(page === ind) ? "orange" : "blue" }>{ind+1}</Button>)}
    </Box>
  )


}