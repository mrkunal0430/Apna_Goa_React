// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from '../components/Home/TestimonialCard';
import PropertyShowcase from '../components/Home/PropertyShowcase'
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
    { src: '/Pics/bg.jpg', alt: 'Luxury Villa near Varca Beach' },
    { src: '/Home-Swap-images/2.jpg', alt: 'Cozy Apartment near Colva' },
    { src: '/Home-Swap-images/3.jpg', alt: 'Peaceful Evening in South Goa' },
    { src: '/Home-Swap-images/4.jpg', alt: 'Palm Tree View in South Goa' },
    { src: '/Home-Swap-images/5.jpg', alt: 'Sunset View near the Beach' },
];

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="w-full">
            {/* Hero Slider Section */}
            <div className="h-[calc(100vh-64px)]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="w-full h-full relative">
                            <img
                                src={img.src || '/fallback.jpg'}
                                alt={img.alt || 'ApnaGoa Stay'}
                                className="w-full h-full object-cover"
                                loading='lazy'
                            />

                            {/* Optional Overlay Title */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
                                <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                                    Welcome to ApnaGoa Homestays
                                </h1>
                            </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Testimonial Section */}
            <div className=" py-12 px-4 bg-gradient-to-br from-pink-200 via-yellow-100 to-white" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Listen to what our guests have to say
                </h2>
                <TestimonialCard />
            </div>

            <div>
                <PropertyShowcase></PropertyShowcase>
            </div>
        </div>
    );
};

export default Home;
