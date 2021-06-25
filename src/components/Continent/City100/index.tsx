import { Box, Flex, Stack, Heading } from "@chakra-ui/react"
import { ContinentProps } from "../../../pages/continent/[id]"
import { City } from "./City"

interface City100Props {
    continent: ContinentProps
}

export function City100({ continent }: City100Props) {

    
    return (

        <Box
            width="100%"
            maxWidth={1160}
            mx="auto"
            py="20"
            p="2"
        >
            <Heading>Cidades +100</Heading>

            <Flex
                direction="row"
                width="100%"
                flexWrap="wrap"
                align="center"
                // justify="space-between"
            >

                {continent.info.city100.map(city => <City city={city} key={city.rank} />)}

            </Flex>



        </Box>
    )
}