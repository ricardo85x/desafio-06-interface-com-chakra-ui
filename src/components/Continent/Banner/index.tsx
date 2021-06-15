import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { ContinentProps } from "../../../pages/continent/[id]";

interface BannerProps {
    continent: ContinentProps
}

export function Banner({ continent }: BannerProps) {


    const isWideVersion = useBreakpointValue({
        sm: false,
        md: true
    });



    return (
        <Flex
            w="100%"
            maxWidth={1440}
            h={500}
            backgroundImage={continent.image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify="flex-end"
            align="center"
            mx="auto"
            direction="column"
            
        >
            <Flex 
                p={5} align="center" justify="center" backgroundColor="rgb(50,50,50,0.4)" width="100%">
                <Box p="3" maxWidth={1160} width="100%">

                    <Text
                       
                        color="gray.100"
                        fontSize="48"
                        fontWeight="600"
                    >{continent.name}</Text>


                </Box>
            </Flex>


        </Flex>
    )
}
