import { Text, Box } from '@chakra-ui/react'
import { ContinentProps } from "../../../pages/continent/[id]";
interface BioProps {
    continent: ContinentProps
}

export function Bio({continent}: BioProps) {
    return (
        <Box width="100%" maxWidth={600}> 
            <Text fontSize={["14","24","24"]} textAlign="justify" >{continent.bio}</Text>
        </Box>
    )
}
