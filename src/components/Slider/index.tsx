"use client"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const kaynarcaImages: string[] = [
    "/kaynarca/1.jpg",
    "/kaynarca/2.jpg",
    "/kaynarca/3.jpg",
    "/kaynarca/4.jpg",
    "/kaynarca/5.jpg",
];

const maltepeImages: string[] = [
    "/maltepe/1.jpg",
    "/maltepe/2.jpg",
];

const getRandomImages = (array: string[], count: number): string[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export default function Slider() {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    useEffect(() => {
        const selected: string[] = [
            ...getRandomImages(kaynarcaImages, 2),
            ...getRandomImages(maltepeImages, 2),
        ];
        setSelectedImages(selected);
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="w-full h-80"
        >
            <SwiperSlide >
                <img src="/images/banner.jpg" alt="Slide" className="w-full h-full object-cover" />
            </SwiperSlide>
            {selectedImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={`/images${src}`} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
