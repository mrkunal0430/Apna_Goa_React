// src/components/TestimonialCard.jsx
import React, { useEffect } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import reviews from '../Data/Reviews.json';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialCard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="px-4 py-10 bg-gradient-to-br from-pink-200 via-yellow-100 to-white border-none">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },    // small screens
                    768: { slidesPerView: 2, spaceBetween: 30 },    // medium screens
                    1024: { slidesPerView: 3, spaceBetween: 40 },   // large screens (laptops)
                    1280: { slidesPerView: 4, spaceBetween: 40 },   // extra-large (desktops)
                }}
                className="w-full !pb-16"
            >

                {/* <div className="absolute top-0 left-0 h-70 w-56 bg-gradient-to-r from-white via-white/90 to-transparent blur-lg z-20 pointer-events-none" /> */}

                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative max-w-md mx-auto p-6 md:p-8 bg-gradient-to-tr from-pink-100 via-blue-100 to-purple-100 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-amber-800 transition duration-300 overflow-hidden border border-purple-200"
                            data-aos="zoom-in"
                        >
                            {/* left blurry fog */}
                            {/* <div className="absolute top-0 left-0 h-full w-70 bg-gradient-to-r from-white via-white/90 to-transparent blur-sm z-20 pointer-events-none" /> */}
                            {/* Glow Background */}
                            <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                            {/* Quote */}
                            <div className="relative z-10 text-gray-700 font-medium text-lg italic mb-6">
                                <FaQuoteRight className="text-pink-400 text-4xl float-right mb-2" />
                                <p>{review.text}</p>
                            </div>

                            {/* Star Rating */}
                            <div className="relative z-10 flex items-center mb-4 text-yellow-400">
                                {[...Array(review.stars || 5)].map((_, i) => (
                                    <FaStar key={i} className="text-xl drop-shadow-sm" />
                                ))}
                            </div>

                            {/* User Info */}
                            <div className="relative z-10 flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="text-gray-800 font-extrabold text-md md:text-lg">{review.name}</h4>
                                    <p className="text-sm text-gray-600 font-semibold">{review.position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCard;
