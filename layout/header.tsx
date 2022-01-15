import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <HStack spacing={"10px"} p="10px">
      <Link href="/">
        <Text border="1px solid black" p="10px" cursor="pointer">
          Зарагдсан
        </Text>
      </Link>
      <Link href="/users">
        <Text border="1px solid black" p="10px" cursor="pointer">
          Хэрэлэгчид
        </Text>
      </Link>
      <Link href="/nft/owner">
        <Text border="1px solid black" p="10px" cursor="pointer">
          NFT борлуулалт
        </Text>
      </Link>
    </HStack>
  );
}
