import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import { Flex, HStack, Text, Spinner } from "@chakra-ui/react";
import { Banner } from "../../components/Continent/Banner"
import { Info } from "../../components/Continent/Info";
import { Bio } from "../../components/Continent/Bio"
import { useContinent } from "../../contexts/ContinentContext";
import { useRouter } from 'next/router'
import { City100 } from "../../components/Continent/City100";


export interface ContinentsProps {
  continents: ContinentProps[]
}

export interface RankProps {
  rank: string;
  city: string;
  country: string;
  continent: string
}
export interface RankDataProps {
  rank: { rank: RankProps[] }
}

export interface ContinentProps {
  id: number;
  name: string;
  description: string;
  image: string;
  info: {
    countries: string;
    languages: string;
    city100: RankProps[]
  }
  bio: string;
  
}

export default function Continent() {

  const { continents, loading, updateContext } = useContinent()

  const [continent, setContinent] = useState<ContinentProps>()

  const router = useRouter()
  const { id } = router.query


  useEffect(() => {

    setContinent(continents.find(c => c.id === Number(id)))

    const readContinent = async () => {
      if (continents.length == 0 && loading == false) {


        const response = await updateContext()
        console.log("continents", continents)
        console.log("loading", loading)
        console.log("continents", response)
        setContinent(response.find(c => c.id === Number(id)))
      }
    }
    readContinent()





  })

  return (
    <>
      <Header hasBackButton />

      {continent ? (

        <>
          <Banner continent={continent} />

          <HStack
            spacing="70px"
            width="100%"
            maxWidth={1160}
            mx="auto"
            py="20"
            px="3"
          >
            <Bio continent={continent} />
            <Info continent={continent} />
          </HStack>

          <City100 continent={continent} />

        </>
      ) : (
        <HStack spacing="2"
         align="center"
         justify="center"
        >

          <Text fontSize="48">Carregando...</Text>
          <Spinner 
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="lg"
          />

        </HStack>
      )

      }


    </>
  )
}
