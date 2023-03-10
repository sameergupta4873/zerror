import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const SwiperS = () => {
    return (
        <div className='px-5 pb-28'>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide className=''>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Watermelon-Tomato-Jaljira-Juice-min-1920x1280-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Watermelon Tomato Jaljira Juice</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Grapes-Jaljira-Juice-min-1920x1367-1.jpg"  />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Grapes Jaljira Juice</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Pineapple-Jaljira-Drink-min-1920x2400-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Pineapple Jaljira Drink</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Rajma-Masala-min-1920x1281-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Rajma Masala</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Shahi-Paneer-Masala-1920x1280-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Shahi Paneer Masala</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/Sambhar-min-1920x1282-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Sambhar</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class="h-[404px] w-[404px] rounded-[7px]"
                        src="https://www.everestfoods.com/wp-content/uploads/2021/11/shutterstock_1789219364-min-1920x1281-1.jpg" />
                    <div class="slider-heading-2">
                        <p class="text-[2rem] mt-[1rem] ml-[0.5rem] w-[22rem] p-[0.25rem]">Aloo Gobhi Sabzi</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperS