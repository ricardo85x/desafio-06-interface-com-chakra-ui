import { Flex, Image } from '@chakra-ui/react'
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
            mt="13"

        >
            <Swiper navigation pagination className="mySwiper">
                {Array.from({ length: 5 }).map((_, i) => (
                    <SwiperSlide key={`slide-${i}`}>
                        <Image src={`https://picsum.photos/id/${i + 1}/1240/450`} alt={`Slide ${i}`} />
                    </SwiperSlide>

                ))}

            </Swiper>
        </Flex>
    )
}