import { VStack, Flex, Text } from "@chakra-ui/react"
import { ContinentProps } from "../../../pages/continent/[id]"
import { City } from "./City"

interface City100Props {
    continent: ContinentProps
}

export function City100( { continent }: City100Props) {

    return (

        <VStack
            width="100%"
            maxWidth={1160}
            spacing={["5", "10"]}
            align="left"
          
        >
            <Text fontWeight="medium" fontSize={["24","48"]}>Cidades +100</Text>

            <Flex
                direction="row"
                width="100%"
                flexWrap="wrap"
                align={["center","start"]}
                justify={["center","start"]}
            >
                { continent.info.city100.map(city => <City city={city} key={city.rank} />)}
            </Flex>

        </VStack>
    )
}
