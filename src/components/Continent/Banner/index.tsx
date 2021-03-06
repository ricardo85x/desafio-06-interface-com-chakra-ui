import { Box, Flex, Text, useBreakpointValue, Tooltip } from "@chakra-ui/react"
import { ContinentProps } from "../../../pages/continent/[id]";

interface BannerProps {
    continent: ContinentProps
}

export function Banner({ continent }: BannerProps) {

    return (
        <Flex
            w="100%"
            maxWidth={1440}
            h={[150,350,500]}
            backgroundImage={continent.image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify="center"
            align="center"
            mx="0"
            direction="column"

        >
            <Flex
                p={[0,5]} 
                align="center" 
                justify="center" 
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
                            fontSize={["28","36","48"]}
                            fontWeight="600"
                        >{continent.name}</Text>
                    </Tooltip>
                </Box>
            </Flex>
        </Flex>
    )
}
