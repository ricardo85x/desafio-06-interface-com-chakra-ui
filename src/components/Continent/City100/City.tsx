import { Flex, Box, Text, Image, Tooltip } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ImageProps } from "../../../contexts/ContinentContext"
import { RankProps } from "../../../pages/continent/[id]"
import { api } from "../../../services/api"


interface CityProps {
    city: RankProps
}

export function City({ city } : CityProps) {


    const [cityUrl, setCityUrl] = 
        useState(`https://via.placeholder.com/256/173/68D391/000000/?text=${city.city}`)

    useEffect(() => {

        const loadCity = async () => {
            const image = await api.get<ImageProps>("/unsplash", { 
                params: { 
                    queryText: `${city.country} ${city.city}`,
                    name: city.city,
                    folder: "public/static/images/city" 
                } 
            })
                        
            const image_url = image.data.url === "" ? cityUrl : image.data.url

            setCityUrl(image_url)
                        
        }
        loadCity()

    },[])
    

    return (
        <Box
            w="256px"
            h="279px"
            backgroundColor="gray.200"
            borderColor="gray.900"
            borderWidth="1px"
            my="3.5"

            mr="7"
        >
            <Image w="100%" h="173px" src={cityUrl} />

            <Flex
                justify="space-between"
                align="center"                
                mx="6"
                h="106px"
            >

                <Box textAlign="left" justify="center">
                    <Text>{city.city}</Text>
                    <Tooltip label={`Posição #${city.rank} no rank`} ><Text>{city.country}</Text></Tooltip>
                </Box>

                <Image w={30} src={`/static/images/country/flag/${city.country}.png`}/>

            </Flex>

        </Box>
    )
}