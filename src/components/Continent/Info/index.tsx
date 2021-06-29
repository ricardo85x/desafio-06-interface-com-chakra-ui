import { HStack, Flex, Text, Image, Tooltip } from '@chakra-ui/react'

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
        <HStack spacing="10">

            {data.map((d, index) => (
                <Flex direction="column" align="center" key={index} fontWeight="600" >
                    <Text fontSize="48" color="#FFBA08">{d.value}</Text>
                    <Flex align="center" justify="center">
                        <Text fontSize="24" pr="2px" >{d.text} </Text>
                        {!!d.icon && (
                            <Tooltip label={d.icon!.label} fontSize="md">
                                <Image  display="inline" src={d.icon.image} />
                            </Tooltip>
                        )} 
                
                    </Flex>
                    
                </Flex>
            ))}

        </HStack>
    )
}