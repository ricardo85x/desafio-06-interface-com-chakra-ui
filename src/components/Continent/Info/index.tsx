import { HStack, Flex, Text, Image, Tooltip, useBreakpointValue } from '@chakra-ui/react'

import infoIco from "./info.svg";

import { ContinentProps } from "../../../pages/continent/[id]";

interface InfoProps {
    continent: ContinentProps
}

interface infoHelperProps {
    value: string;
    text: string;
    icon?: {
        image: string;
        label: string;
    }
}

export function Info({ continent }: InfoProps) {


    const isSmallScreen = useBreakpointValue({
        sm: true,
        base: false,
    })

    const data: infoHelperProps[] = [
        { value: continent.info.countries, text: "países" },
        { value: continent.info.languages, text: "línguas" },
        { 
            value: continent.info.city100.length.toString(), 
            text: "cidades + 100", 
            icon: {
                image: infoIco,
                label: "Quantidade de cidades no top 100 das mais visitadas do mundo."
        } },
    ]

    return (
        <HStack spacing={["5","10"]}>

            {data.map((d, index) => (
                <Flex  direction="column" align={isSmallScreen ? "center" : "left"} key={index}  >
                    <Text fontWeight={["semibold","bold"]} fontSize={["24","48","48"]} color="#FFBA08">{d.value}</Text>
                    <Flex align="center" justify="center">
                        <Text fontSize={["18","24"]} pr="2px" >{d.text} {!!d.icon && (
                            <Tooltip label={d.icon!.label} fontSize="md">
                                <Image  ml="2px" display="inline" src={d.icon.image} height={[ "10px","20px"]} />
                            </Tooltip>
                        )} 
                        </Text>
                        
                
                    </Flex>
                    
                </Flex>
            ))}

        </HStack>
    )
}