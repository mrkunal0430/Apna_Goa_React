// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from '../components/Home/TestimonialCard';
import PropertyShowcase from '../components/Home/Gallery/PropertyShowcase'
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
    { src: '/Villa/bg.jpg', alt: 'Luxury Villa near Varca Beach' },
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
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Testimonial Section */}
            <div className="py-12 px-4 bg-gradient-to-br from-pink-200 via-yellow-100 to-white">
                <h2
                    className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
                    data-aos="fade-up"
                >
                    Listen to what our guests have to say
                </h2>
                <TestimonialCard />
            </div>

            <div className="py-10 px-4 sm:px-6 lg:px-6 flex flex-col gap-10 lg:gap-16 lg:flex-row items-center lg:items-start max-w-7xl mx-auto">
                {/* Rating Card */}
                <div className="w-full h-full sm:w-2/3 md:w-1/2 lg:w-1/4 border rounded-3xl bg-gradient-to-br from-amber-200 via-blue-200 to-cyan-200 flex flex-col justify-center items-center text-center p-6 space-y-4 shadow-lg">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 text-green-500">
                        <FaStar className="text-xl sm:text-2xl mt-4" />
                        <FaStar className="text-2xl sm:text-3xl mt-2" />
                        <FaStar className="text-3xl sm:text-4xl" />
                        <FaStar className="text-2xl sm:text-3xl mt-2" />
                        <FaStar className="text-xl sm:text-2xl mt-4" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">4.5</h2>
                    <a href="#" className="text-green-600 font-semibold hover:underline text-base sm:text-lg">
                        13,7 Reviews
                    </a>
                    <p className="text-gray-600 text-sm sm:text-base">
                        by customers from <span className="font-bold">13+ states & Countries</span>
                    </p>
                </div>

                {/* Property Showcase */}
                <div className="w-full lg:flex-1 p-4">
                    <PropertyShowcase />
                </div>
            </div>



        </div>
    );
};

export default Home;
