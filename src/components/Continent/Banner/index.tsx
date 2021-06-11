import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"

export function Banner() {

    const isWideVersion = useBreakpointValue({
        sm: false,
        md: true
    });

    return (
        <Flex
            w="100%"
            maxWidth={1440}
            h={500}
            backgroundImage={`https://picsum.photos/id/2/1240/450`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify="flex-end"
            align="center"
            mx="auto"
            direction="column"
            p="3"
        >

           <Box  m="3.75rem" maxWidth={1160} width="100%">
                <Text color="gray.100" fontSize="48" fontWeight="600">Europa</Text>
           </Box>

        </Flex>
    )
}
