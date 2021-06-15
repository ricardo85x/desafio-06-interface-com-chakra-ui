import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import { HStack } from "@chakra-ui/react";
import { Banner } from "../../components/Continent/Banner"
import { Info } from "../../components/Continent/Info";
import { Bio } from "../../components/Continent/Bio"
import { useContinent } from "../../contexts/ContinentContext";
import { useRouter } from 'next/router'


export interface ContinentsProps {
  continents: ContinentProps[]
}
export interface ContinentProps {
  id: number;
  name: string; 
  description: string;
  image: string
}


export default function Continent() {


  const {continents, loading, updateContext } = useContinent()

  const [continent, setContinent] = useState<ContinentProps>()

  const router = useRouter()
  const { id } = router.query

  
  useEffect(() => {

    setContinent(continents.find(c => c.id === Number(id)))

    const readContinent = async () => {
      if (continents.length == 0 && loading == false){

        
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

     { continent && <Banner continent={continent} /> } 

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
