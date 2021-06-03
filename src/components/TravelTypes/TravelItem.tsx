import { VStack, Image, Text, useBreakpointValue, HStack } from '@chakra-ui/react'

interface TravelItemProps {
    text: string;
    image: string;
}

export function TravelItem({ text, image }: TravelItemProps) {

    const isWideVersion = useBreakpointValue({
        sm: false,
        md: true
    });

    return (
        <VStack minWidth={[0, 0, 150]} align="center" justify="center" spacing="4" >
            
            {isWideVersion && <Image src={image} />}

            <HStack align="center" justify="center" spacing="2">
                {!isWideVersion && <Text position="relative" top="1" fontSize="36" as="span" color="#FFBA08">•</Text>}
                <Text >{text}</Text>
            </HStack>

        </VStack>
    )
}