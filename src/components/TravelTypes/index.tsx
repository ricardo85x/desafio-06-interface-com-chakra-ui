import { Flex } from '@chakra-ui/react'

import cocktailImg from "./cocktail.svg"
import buildingImg from "./building.svg"
import earthImg from "./earth.svg"
import museumImg from "./museum.svg"
import surfImg from "./surf.svg"

import { TravelItem } from './TravelItem'

export function TravelTypes() {
    
    return (
        <Flex
            width="100%"
            maxWidth={1160}
            mt={["5", "10", "20"]}
            mx="auto"
            align="center"
            justify={["space-evenly","space-between"]}
            fontWeight={600}
            fontSize="24"
            flexWrap="wrap"
            p="6"
            color="#47585B"
        >
         
            <TravelItem text="vida noturna" image={cocktailImg} />
            <TravelItem text="praia" image={surfImg} />
            <TravelItem text="moderno" image={buildingImg} />
            <TravelItem text="clássico" image={museumImg} />
            <TravelItem text="e mais..." image={earthImg} />

        </Flex>
    )
}