import { Box, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const Pagination = ({ length, page, setPage }: any) => {
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