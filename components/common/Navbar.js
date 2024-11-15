import React from "react";
import { Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { PX } from "@/styles/constants";
import { useRouter } from "next/router";
// import { MobileNavbar } from "./MobileNavbar";

export const NAV_DATA = [
  {
    name: "計劃簡介",
    url: "/",
  },
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

export const Navbar = () => {
  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bg="white"
      px={PX}
      py="10px"
      mx="auto"
    >
      <ChakraLink as={Link} href="/">
        <Image w="200px" src="/img/LOGO.png" alt="logo" />
      </ChakraLink>
      <Flex
        alignItems="center"
        color="white"
        fontSize={["14px", "16px", "18px", "20px"]}
        gap={["5px", "10px", "15px"]}
        display={["none", null, "flex"]}
      >
        {NAV_DATA.map((data, index) => (
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
            {data.name}
          </ChakraLink>
        ))}
      </Flex>
      {/* <MobileNavbar /> */}
    </Flex>
  );
};
