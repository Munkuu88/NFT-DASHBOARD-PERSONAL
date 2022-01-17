import {
  Box,
  Grid,
  GridItem,
  Flex,
  Input,
  HStack,
  Text,
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
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  let timeout: any = null

  useEffect(() => {
    if (timeout) clearTimeout(timeout)
    setLoader(true);
    setUsers([])
    timeout = setTimeout(() => {
      axios.post("/users", {
        page: page-1,
        limit: 50,
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
    }, 3000)

  }, [name,page])

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
            {(loader) ? "Уншиж " : Detail.map((el, ind) => {
              return <DetailName detail={el} key={ind} />;
            })}
          </Grid>
          <Flex justifyContent="space-between">
            <HStack>
              <Text fontWeight="bold">Нийт хэрэлэгч:</Text>
              <Text color="green">{count}</Text>
            </HStack>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              pageRangeDisplayed={5}
              onPageChange={(e:any) => {
                console.log(e)
                setPage(e.selected)
              }}
              pageCount={5}
              previousLabel="< previous"
            />
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
        </Flex>
      </Box>
    </Flex>
  );
}
