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

      <VStack spacing="20" mt="20" align="center" justify="center">
          <Divider opacity="1" w="300px" borderColor="black" borderWidth={1}   />
          <Flex direction="column" fontSize="36" fontWeight="500" align="center" justify="center"> 
            <Text lineHeight="1">Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Flex>
      </VStack>

    </>
  )
}
