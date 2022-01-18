import {
  Box,
  Grid,
  GridItem,
  Flex,
  Input,
  Divider,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { SearchIcon } from "@chakra-ui/icons";

export function AllUsers() {
  const limit = 150
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setLoader(true);
    setUsers([])

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

  }, [refresh, page])

  const inputChange = (e: any) => {
    setPage(0);
    setName(e.target.value)
  }
  const submitChange = (e: any) => {
    e.preventDefault();
    setPage(0);
    setRefresh(!refresh)
  }

  return (
    <>
      <Box as={'form'} onSubmit={submitChange} mx="auto" my="6" w="50%">
        <InputGroup>
          <Input placeholder="Утас, нэр, нэвтрэх нэрээр нь хайж олоорой." onChange={inputChange} />
          <InputRightAddon p="0" children={<Button w="100%" type="submit">Хайх</Button>} />
        </InputGroup>
      </Box>
      <Flex w="100%" maxW="2000px" justifyContent="center">
        <Flex width={"80%"} flexDir="column">
          <Grid bg="rgba(0,0,0,0.5)" color="white" gap={4} templateColumns="repeat(6, 1fr)">
            <GridItem textAlign={"center"}>Нэвтрэх нэр</GridItem>
            <GridItem>Нэр</GridItem>
            <GridItem>Овог</GridItem>
            <GridItem>Утасны дугаар</GridItem>
            <GridItem>Статус</GridItem>
            <GridItem>Бүртгүүлсэн огноо</GridItem>
          </Grid>
          {users.map((el: any, ind: number) => {
            return (
              <Grid borderBottom={"1px solid black"} key={ind} gap={4} templateColumns="repeat(6, 1fr)">
                <GridItem textAlign={"center"}>{el.userName}</GridItem>
                <GridItem>{el.firstName}</GridItem>
                <GridItem>{el.lastName}</GridItem>
                <GridItem>{el.phoneNumber}</GridItem>
                <GridItem>{(el.user_status) ? "Идэвхитэй" : "Идэвхигүй"}</GridItem>
                <GridItem>{moment(el.createdAt).format("YYYY-MM-DD HH:mm")}</GridItem>
              </Grid>
            );
          })}
          <Box w="100%" textAlign={"center"}>
            {loader && "Уншиж байна..."}
            <Divider />
            <Pagination {...{ page, setPage, length: Math.floor(count / limit) }} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}