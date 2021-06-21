import { Flex, Box, Text, Image } from "@chakra-ui/react"

export function City() {

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
                    <Text>Cidade</Text>
                    <Text>País</Text>
                </Box>

                <Box>Ico</Box>

            </Flex>



        </Box>
    )
}