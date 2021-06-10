import { Flex, Text, VStack, Link } from '@chakra-ui/react'
import { default as NextLink}  from 'next/link'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export function SliderContainer() {

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


            <Swiper navigation pagination className="mySwiper">
                {Array.from({ length: 5 }).map((_, i) => (
                    <SwiperSlide key={`slide-${i}`}>
                        <Flex

                            w="100%"
                            maxWidth={1240}
                            h={[250, 350, 450]}
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            justify="center"
                            align="center"
                            backgroundImage={`https://picsum.photos/id/${i + 1}/1240/450`}
                        >

                            <VStack textShadow="1px 1px 1px #000000" color="gray.100" spacing={["3", "4"]} fontWeight="700" fontFamily="Poppins">
                                <NextLink href="/continent">
                                    <Link>
                                        <Text fontSize={["24", "48"]}>Europa</Text>
                                        <Text fontSize={["14", "24"]}>O continente mais antigo</Text>
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