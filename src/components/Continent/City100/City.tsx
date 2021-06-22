import { Flex, Box, Text, Image, Tooltip } from "@chakra-ui/react"
import { RankProps } from "../../../pages/continent/[id]"


interface CityProps {
    city: RankProps
}

export function City({ city } : CityProps) {

    return (
        <Box
            w="256px"
            h="279px"
            backgroundColor="gray.200"
            borderColor="gray.900"
            borderWidth="1px"
            my="5"
        >
            <Box w="100%" backgroundColor="green.300" h="173px"></Box>

            <Flex
                justify="space-between"
                align="center"                
                mx="6"
                h="106px"
            >

                <Box textAlign="left" justify="center">
                    <Text>{city.city}</Text>
                    <Tooltip label={`#${city.rank}`} ><Text>{city.country}</Text></Tooltip>
                </Box>

                <Box>Ico</Box>

            </Flex>



        </Box>
    )
}