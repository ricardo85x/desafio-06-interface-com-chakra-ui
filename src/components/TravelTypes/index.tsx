import { Flex, VStack, Image, Text } from '@chakra-ui/react'

import cocktailImg from "./cocktail.svg"
import buildingImg from "./building.svg"
import earthImg from "./earth.svg"
import museumImg from "./museum.svg"
import surfImg from "./surf.svg"

export function TravelTypes() {
    return (
        <Flex
            width="100%"
            maxWidth={1160}
            mt={["10", "10", "20"]}
            mx="auto"
            align="center"
            justify="space-between"

        >
            <VStack spacing="4">
                <Image src={cocktailImg} />
                <Text>vida noturna</Text>
            </VStack>

            <VStack spacing="4">
                <Image src={surfImg} />
                <Text>praia</Text>
            </VStack>

            <VStack spacing="4">
                <Image src={buildingImg} />
                <Text>moderno</Text>
            </VStack>

            <VStack spacing="4">
                <Image src={museumImg} />
                <Text>clássico</Text>
            </VStack>

            <VStack spacing="4">
                <Image src={earthImg} />
                <Text>e mais...</Text>
            </VStack>
        </Flex>
    )
}