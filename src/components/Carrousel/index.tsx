import { Box, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export function Carrousel(){
    const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
})

    function handleClick(){
        console.log("click");
    }

    return(
        <Box as="div" w="100%" maxWidth={"800px"} h={{base: '130px', md:'300px', lg: '300px'}} zIndex={1} >
            <Swiper style={{width: '100%', height: '100%'}}
                tag="section" wrapperTag="ul"
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: '.swiper-button-prev'
                }}
                pagination={{clickable: true}}
                autoplay
                parallax={true}
            >
                <div className="swiper-button-next" style={{marginRight: '30px', color: '#ffba08'}}></div>
                <div className="swiper-button-prev" style={{marginLeft: '30px', color: '#ffba08'}}></div>

                <SwiperSlide key={1} style={{position: 'relative', textAlign: 'center'}}>
                    <Link href="/countries/europa">
                        <Image h="100%" w="100%"  src="./images/europaCarrousel.svg" style={{marginLeft: 'auto', marginRight: 'auto', listStyle: 'none', zIndex: 2}}/>
                            <Box 
                                style={{
                                    position: 'absolute', 
                                    zIndex: 3, 
                                    top: '50%', 
                                    left: '50%', 
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                <Text color="white" fontWeight="700" fontSize={{base: '24px', md:'36px', lg: '48px'}}>Europa</Text>
                                <Text color="white" fontWeight="700" fontSize={{base: '12px', md:'18px', lg: '24px'}}>O continente mais antigo</Text>
                            </Box>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={2} style={{position: 'relative', textAlign: 'center', height:'100%', width:'100%'}}>
                    <Link href="/countries/brasil">
                    
                        <Image h="100%" w="100%"

                            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                            style={{marginLeft: 'auto', marginRight: 'auto', listStyle: 'none', zIndex: 2}}
                        />
                            <Box 
                                style={{
                                    position: 'absolute', 
                                    zIndex: 3, 
                                    top: '50%', 
                                    left: '50%', 
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                <Text color="white" fontWeight="700" fontSize={{base: '24px', md:'36px', lg: '48px'}}>Brasil</Text>
                                <Text color="white" fontWeight="700" fontSize={{base: '12px', md:'18px', lg: '24px'}}>O País do carnaval!</Text>
                            </Box>
                    
                    </Link>
                </SwiperSlide>            

            </Swiper>
        </Box>
    );
}