import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner"
import { TravelTypes } from "../components/Home/TravelTypes";
import React, { useEffect } from "react";
import { Flex, Divider, Text, VStack } from "@chakra-ui/react";
import { SliderContainer } from "../components/Home/SlideContainer";

import { useContinent } from "../contexts/ContinentContext";

interface ImageProps {
  url: string;
  description: string;
}

export default function Home() {

  const {continents, loading, updateContext } = useContinent()

  useEffect(() => {
    const readContinent = async () => {
      if (continents.length == 0 && loading == false){
        await updateContext()
      }
    }
    readContinent()
  })
  
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />

      <VStack color="#47585B" spacing={["7","20"]} mt={["0","20"]} align="center" justify="center">
          <Divider opacity="1" w="90px" borderColor="#47585B" borderWidth={1}   />
          <Flex direction="column" fontSize={["20","36"]} fontWeight="500" align="center" textAlign="center" fontFamily="Poppins" justify="center"> 
            <Text lineHeight="1">Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Flex>
      </VStack>

      <SliderContainer continents={continents} />

    </>
  )
}
