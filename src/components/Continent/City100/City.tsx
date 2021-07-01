import { Flex, Box, Text, Image, Tooltip } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ImageProps } from "../../../contexts/ContinentContext"
import { RankProps } from "../../../pages/continent/[id]"
import { api } from "../../../services/api"

interface CityProps {
    city: RankProps
}

export function City({ city }: CityProps) {

    const [cityUrl, setCityUrl] =
        useState(city.city_banner !== "" ? city.city_banner : `https://via.placeholder.com/256/173/81E6D9/000000/?text=${city.city}`)

    useEffect(() => {

        const loadCity = async () => {

            const image = await api.get<ImageProps>("/unsplash", {
                params: {
                    name: city.city,
                    queryText: `${city.country} ${city.city}`,
                    type: "city",
                    country: city.country,
                    continent: city.continent
                }
            })

            const image_url = image.data.url === "" ? cityUrl : image.data.url

            setCityUrl(image_url)

        }

        try {
            if (city.city_banner === "") {
                loadCity()
            }

        } catch (e) { }

    }, [])

    return (
        <Box
            w="256px"
            h="279px"
            my="3.5"
            mr="7"
        >
            <Tooltip hasArrow placement="auto" label={`Foto de ${city.city_banner_owner} @unsplash`} >
                <Box as="span">
                    <Image w="100%" h="173px" src={cityUrl} />
                </Box>
            </Tooltip>

            <Flex

                w="100%"
                h="106px"
                borderColor="rgba(255, 186, 8,0.5)"
                borderWidth="1px"
                borderTop="none"
                justify="center"
                align="center"
            >

                <Flex
                    justify="space-between"
                    align="center"
                    mx="6"
                    h="100%"
                    w="100%"
                >

                    <Box textAlign="left" justify="center">
                        <Text>{city.city}</Text>
                        <Tooltip label={`Posição #${city.rank} no rank`} ><Text>{city.country}</Text></Tooltip>
                    </Box>

                    <Tooltip label={city.country} >
                        <Box as="span">
                            <Image w={30} src={`/static/images/country/flag/${city.country}.png`} />
                        </Box>
                    </Tooltip>


                </Flex>

            </Flex>


        </Box>
    )
}
