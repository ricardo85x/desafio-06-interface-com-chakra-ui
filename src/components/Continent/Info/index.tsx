import { HStack, Flex, Text, Image } from '@chakra-ui/react'

import infoIco from "./info.svg";

interface infoProps {
    value: number;
    text: string;
    icon?: string;
}

export function Info() {

    const data : infoProps[] = [
        { value: 50, text: "países" },
        { value: 60, text: "línguas" },
        { value: 27, text: "cidades + 100", icon: infoIco },
    ]

    return (
        <HStack spacing="10">

            { data.map( (d, index) => (
                <Flex direction="column" align="center" key={ index } fontWeight="600" >
                    <Text  fontSize="48" color="#FFBA08">{d.value}</Text>
                    <Text fontSize="24" >{d.text} {!!d.icon && (<Image display="inline" src={d.icon} />) } </Text>
                </Flex>
            ))}

        </HStack>
    )
}