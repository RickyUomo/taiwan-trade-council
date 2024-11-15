import React from "react";
import { Flex, Image, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import { PX } from "@/styles/constants";
import Link from "next/link";
import { useRouter } from "next/router";

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
        bg="#2c4ba2"
        px={PX}
        py="10px"
        color="white"
        mx="auto"
      >
        <Box>
          <Text
            fontSize="26px"
            fontWeight={700}
            mb="20px"
            textAlign={["center", null, "start"]}
          >
            台灣經貿網
          </Text>
          <Flex flexDir="column" display={["none", null, "flex"]} gap={1}>
            <Flex gap={2} alignItems="center">
              <Text>主辦單位</Text>
              <Text>|</Text>
              <Image
                objectFit="contain"
                w="30px"
                src="/img/footer-logo.png"
                alt="logo"
              />
              <Text>經濟部國際貿易署</Text>
            </Flex>
            <Flex gap={2} alignItems="center">
              <Text>執行單位</Text>
              <Text>|</Text>
              <Image
                objectFit="contain"
                w="20px"
                src="/img/TAITRA_LOGO.png"
                alt="logo"
              />
              <Text>中華民國對外貿易發展協會</Text>
            </Flex>
            <SocialMedias mt="20px" />
          </Flex>
        </Box>
        <Box>{/* 關於計劃 */}</Box>
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

const SocialMedias = ({ ...styles }) => {
  const router = useRouter();

  return (
    <Flex gap="10px" alignItems="center" {...styles}>
      {SOCIAL.map((social, index) => (
        <ChakraLink
          as={Link}
          _hover={{
            textDecor: "none",
          }}
          color={router.asPath === social.href ? "#4e80e0" : "black"}
          fontSize={["14px", null, null, "16px"]}
          href={social.href}
          key={index}
        >
          <Image w="24px" src={social.img} alt={social.alt} />
        </ChakraLink>
      ))}
    </Flex>
  );
};
