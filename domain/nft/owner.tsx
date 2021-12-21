import { Divider, Flex, HStack, Text, VStack, } from "@chakra-ui/react"

export function Owners({ datas }: any) {
  return <Flex justifyContent='center' className="owners">
    <Flex flexDirection={'column'}>
      {datas.map((owner: any, ind: number) => {
        return <VStack mb={'3'} key={owner.id + ind}>
          <HStack justifyContent="space-between">
            <Text fontWeight='bold'>Хэрэглэгчийн нэр:</Text>
            <Text>{owner.userName}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight='bold'>Утас:</Text>
            <Text>{owner.phoneNumber}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight='bold'>Нийт авсан үсэг:</Text>
            <Text>{owner.totalContent}</Text>
          </HStack>
          <HStack justifyContent="space-between" >
          <Text fontWeight='bold'>Үсэг:</Text>
              {owner.contents.map((content: any, ind: number) => {
              return <Text key={ind}>{content.title}
              </Text>
            })}
          </HStack>
          <Divider />
        </VStack>
      })}
    </Flex>
  </Flex>

}