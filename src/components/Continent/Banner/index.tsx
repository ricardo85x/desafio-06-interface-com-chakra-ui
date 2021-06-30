import { Box, Flex, Text, useBreakpointValue, Tooltip } from "@chakra-ui/react"
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
            // justify="flex-end"
            justify="center"
            align="center"
            mx="0"
            direction="column"

        >
            <Flex
                p={5} 
                align="center" 
                justify="center" 
                // backgroundColor="rgb(90,90,90,0.4)" 
                width="100%"

                textShadow="1px 1px 1px #000000"
                color="gray.100" 
                backgroundColor="rgb(20,20,20,0.4)"
                boxShadow="md" 
                
                >
                <Box p="3" maxWidth={1160} width="100%" align="center">
                    <Tooltip hasArrow placement="auto" label={`Foto de ${continent.banner_owner} @unsplash`} >
                        <Text

                            color="gray.100"
                            fontSize="48"
                            fontWeight="600"
                        >{continent.name}</Text>
                    </Tooltip>




                </Box>
            </Flex>


        </Flex>
    )
}
