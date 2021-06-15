import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import background from "./background.png"
import airplane from "./airplane.svg"
import { ContinentProps } from "../../../pages/continent/[id]"


export function Banner() {

    const isWideVersion = useBreakpointValue({
        sm: false,
        md: true
    });

    return (
        <Flex
            w="100%"
            maxWidth={1440}
            h={335}
            backgroundImage={background}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify="center"
            align="center"
            mx="auto"
            p="6"

        >
            <Flex maxWidth={1160} width="100%" align="center" justify="space-between">
                <Box mt="6" >
                    <Text color="gray.100" fontSize="36" fontWeight="medium" >5 Continentes,</Text>
                    <Text color="gray.100" fontSize="36" fontWeight="medium" >infinitas possibilidades.</Text>
                    <Text mt="5" color="gray.300">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Box>
               { isWideVersion && <Image marginBottom="-120" maxWidth={417.15} src={airplane} /> } 

            </Flex>

        </Flex>
    )
}
