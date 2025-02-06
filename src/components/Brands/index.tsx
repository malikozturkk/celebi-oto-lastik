"use client"
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';

const brands = ["petlas", "bridgestone", "varta", "continental", "goodyear", "hankook", "laufenn", "michelin", "milestone", "pirelli"]

const Brands = () => {
    return (
        <div className="w-full h-40 flex bg-white rounded-lg max-h-28 shadow-lg">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                loop
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
            >
                {brands.map((brand) => (
                    <SwiperSlide key={brand} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={`/images/brands/${brand}.png`} className="w-28 max-h-24" alt={brand} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Brands