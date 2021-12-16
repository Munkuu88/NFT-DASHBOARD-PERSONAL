import { Box, Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./header";
export function Layout({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
