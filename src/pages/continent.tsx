import { Header } from "../components/Header";
import React from "react";
import { Flex, Divider, Text, HStack } from "@chakra-ui/react";
import { Banner } from "../components/Continent/Banner";
import { Info } from "../components/Continent/Info";
import { Bio } from "../components/Continent/Bio"
export default function Continent() {
  return (
    <>
      <Header hasBackButton />

      <Banner />

      <HStack 
        spacing="70px"
        width="100%"
        maxWidth={1160} 
        mx="auto"
        py="20"
        px="3"
      >
        <Bio />
        <Info />
      </HStack>
    

    



    </>
  )
}
