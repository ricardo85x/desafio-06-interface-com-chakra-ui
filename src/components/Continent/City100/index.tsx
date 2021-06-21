import { Box, Flex, Stack, Heading } from "@chakra-ui/react"
import { City } from "./City"
export function City100() {


    const cities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
                justify="space-between"
            >

                {cities.map(city => <City key={city} />)}

            </Flex>



        </Box>
    )
}