import { Flex, Text, VStack, Link, textDecoration } from '@chakra-ui/react'
import { default as NextLink}  from 'next/link'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContinentProps } from "../../../pages/continent/[id]"

SwiperCore.use([Navigation, Pagination]);

interface SliderContainerProps {
    continents: ContinentProps[]
}

export function SliderContainer( { continents } : SliderContainerProps ) {

    return (
        <Flex
            width="100%"
            maxWidth={1240}
            align="center"
            justify="center"
            mx="auto"
            mt="10"
            mb="10"

        >


            <Swiper navigation pagination loop className="mySwiper">
                {continents.map(continent => (
                    <SwiperSlide key={`slide-${continent.id}`}>
                        <Flex

                            w="100%"
                            maxWidth={1240}
                            h={[250, 350, 450]}
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            justify="center"
                            align="center"
                            backgroundImage={continent.image}
                        >

                            <VStack textShadow="1px 1px 1px #000000" color="gray.100" spacing={["3", "4"]} fontWeight="700" >
                                <NextLink href={`/continent/${continent.id}`}>
                                    <Link 
                                        borderRadius={10} 
                                        p={5}  
                                        backgroundColor="rgb(50,50,50,0.4)"  
                                        _hover={{
                                            textDecoration: "none",
                                            backgroundColor: "rgb(50,50,50,0.6)"
                                        }}
                                    >
                                        <Text fontSize={["24", "48"]}>{continent.name}</Text>
                                        <Text fontSize={["14", "24"]}>{continent.description}</Text>
                                    </Link>
                                    </NextLink>
                                
                            </VStack>

                        </Flex>
                    </SwiperSlide>

                ))}

            </Swiper>
        </Flex>
    )
}