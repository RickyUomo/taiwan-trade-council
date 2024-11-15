import React from "react";
import { Flex, Image, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import { PX } from "@/styles/constants";

const SECTION1 = [
  {
    name: "數位貿易線上診斷",
    url: "/digital-trade-diagnosis",
  },
  {
    name: "數位科技顧問諮詢",
    url: "/digital-tech-consulting",
  },
  {
    name: "數位行銷輔導方案",
    url: " /digital-marketing-program",
  },
  {
    name: "數位貿易培訓課程",
    url: "/",
  },
];

export const Footer = () => {
  return (
    <Box position="fixed" bottom={0} zIndex={10} w="100%">
      <Flex
        flexDir={["column", null, "row"]}
        gap={["10px", null, "20px"]}
        color="white"
        bg="#2c4ba2"
        px={PX}
        py="10px"
        mx="auto"
      >
        <Box>
          <Text fontSize="26px" fontWeight={700} color="white">
            台灣經貿網
          </Text>
          <Box display={["none", null, "static"]}>
            <Flex gap={1}>
              <Text>主辦單位</Text>
              <Text>|</Text>
              <Image src="/img/footer-logo.jpg" alt="logo" />
              <Text>經濟部國際貿易署</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box bg="white" px={PX} py="10px" mx="auto">
        <Text color="black" fontSize="12px" textAlign="center">
          ©2024 Taiwantrade 台灣經貿網 All Rights Reserved |
          全球買主與台灣製造商、供應商、進出口商接軌之B2B網站
        </Text>
      </Box>
    </Box>
  );
};

const SOCIAL = [
  {
    img: "/img/Global.png",
    href: "",
    alt: "Global icon",
  },
  {
    img: "/img/Facebook.png",
    href: "",
    alt: "FB icon",
  },
  {
    img: "/img/Line.png",
    href: "",
    alt: "line icon",
  },
];

const SocialMedias = () => {
  return (
    <Flex gap="10px" alignItems="center">
      {SOCIAL.map((social, index) => (
        <ChakraLink
          as={Link}
          _hover={{
            textDecor: "none",
          }}
          color={router.asPath === data.url ? "#4e80e0" : "black"}
          fontSize={["14px", null, null, "16px"]}
          href={data.url}
          key={index}
        >
          <Image src={social.href} alt={social.alt} />
        </ChakraLink>
      ))}
    </Flex>
  );
};
