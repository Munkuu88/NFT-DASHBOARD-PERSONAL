import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { LayoutProps } from "../interface/react.default"


export interface CardProps extends LayoutProps {
  image?: string
}
export function Card({ children, image }: CardProps) {
  return (
    <Flex maxW="100px" h="auto" flexDirection={'column'}>
      <Box
        overflow={'hidden'}
        color={"white"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        position={"relative"}>
        <Image w="100%" src={image || "https://picsum.photos/id/237/200/300"} />
        <Box w="100%" minH={"30px"} bg="rgba(0,0,0,0.5)">
          <Text textAlign={"center"}>
            {children}
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}