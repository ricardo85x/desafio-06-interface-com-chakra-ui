import { Header } from "../components/Header";
import { Banner } from "../components/Banner"
import { TravelTypes } from "../components/TravelTypes";
import React from "react";
import { Flex, Divider, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header hasBackButton />
      <Banner />
      <TravelTypes />

      <VStack spacing={["7","20"]} mt={["0","20"]} align="center" justify="center">
          <Divider opacity="1" w="90px" borderColor="black" borderWidth={1}   />
          <Flex direction="column" fontSize={["20","36"]} fontWeight="500" align="center" textAlign="center" fontFamily="Poppins" justify="center"> 
            <Text lineHeight="1">Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Flex>
      </VStack>



    </>
  )
}
