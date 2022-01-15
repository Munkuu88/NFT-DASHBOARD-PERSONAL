import { Divider, Flex, HStack, Text, VStack, Wrap, } from "@chakra-ui/react"
import { Card } from "../../components/Card"

export function Owners({ datas }: any) {
  return <Flex flexDirection={'column'}>
    {datas.map((owner: any, ind: number) => {
      return <VStack mb={'6'} key={owner.id + ind}>
        <HStack justifyContent="space-between">
          <Text fontWeight='bold'>Хэрэглэгчийн нэр:</Text>
          <Text>{owner.userName}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontWeight='bold'>Нийт авсан NFT:</Text>
          <Text>{owner.totalContent}</Text>
        </HStack>
        <Wrap justifyContent="space-between" >
          {owner.contents.map((content: any, ind: number) => {
            return <Card image={content.poster || content.mediaLink}>{content.title}</Card>
          })}
        </Wrap>
        <Divider />
      </VStack>
    })}
  </Flex>
}