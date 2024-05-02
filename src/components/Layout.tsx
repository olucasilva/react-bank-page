import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children: Element }: any | undefined) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      direction="column"
      alignItems="center"
      backgroundColor="#1a1a40"
      color="#ffffff"
    >
      <Header />
      {Element}
    </Flex>
  );
};
