// SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md"; // optional

import 'swiper/css';
import 'swiper/css/pagination';

const SwiperSlider = ({
    slidesData = [],
    type = 'image', // image, review, content, services, explore/popularDestination
    slideHeight = 'h-64',
    showPagination = true,
}) => {

    // Function to get icon dynamically based on JSON string
    const getIconComponent = (iconName) => {
        if (!iconName) return null;

        if (iconName.startsWith("Fi")) return FiIcons[iconName] || null;
        if (iconName.startsWith("Fa")) return FaIcons[iconName] || null;
        if (iconName.startsWith("Md")) return MdIcons[iconName] || null;

        return null;
    };

    return (

        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={showPagination ? { clickable: true } : false}
            loop={slidesData.length > 4} // ✅ Auto-disable loop if not enough slides
            grabCursor={true}
            className="w-full !pb-16"
            breakpoints={{
                320: { slidesPerView: Math.min(1, slidesData.length), spaceBetween: 20 },
                768: { slidesPerView: Math.min(2, slidesData.length), spaceBetween: 30 },
                1024: { slidesPerView: Math.min(3, slidesData.length), spaceBetween: 40 },
                1280: { slidesPerView: Math.min(4, slidesData.length), spaceBetween: 40 },
            }}
        >


            {slidesData.map((slide, index) => {
                const IconComponent = getIconComponent(slide.icon);

                return (
                    <SwiperSlide key={index}>
                        {type === 'image' && (
                            <img
                                src={slide.image}
                                alt={`Slide ${index}`}
                                className={`w-full object-cover rounded-lg ${slideHeight}`}
                            />
                        )}

                        {type === 'review' && (
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto text-center">
                                <img
                                    src={slide.image}
                                    alt="user"
                                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                                />
                                <p className="text-gray-600 italic">"{slide.review}"</p>
                                <h4 className="mt-4 font-semibold text-lg">{slide.name}</h4>
                            </div>
                        )}

                        {type === 'content' && (
                            <div className="relative w-full rounded-lg overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`w-full object-cover ${slideHeight}`}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
                                    <h3 className="text-xl font-bold">{slide.title}</h3>
                                    <p className="text-sm mt-2">{slide.desc}</p>
                                </div>
                            </div>
                        )}

                        {type === 'services' && (
                            <div className="relative max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative">
                                    <img className="w-full h-56 object-cover" src={slide.images} alt={slide.image} />
                                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                        {IconComponent && <IconComponent className="text-orange-500 text-xl" />}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{slide.title}</h2>
                                    <p className="text-gray-600 mb-4">{slide.description}</p>
                                    <a
                                        href="#"
                                        className="inline-block px-5 py-2 text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
                                    >
                                        Explore
                                    </a>
                                </div>
                            </div>
                        )}

                        {type === 'explore' && (
                            <div className="max-w-md  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="relative">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                        <a
                                            href={slide.map}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-100"
                                        >
                                            View on Map
                                        </a>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{slide.title}</h2>
                                    <p className="text-gray-600 mb-4">{slide.description}</p>

                                    {/* Info Icons */}
                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-red-500" />
                                            <span>{slide.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-blue-500" />
                                            <span>{slide.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaRupeeSign className="text-green-500" />
                                            <span>{slide.price}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Button */}
                                <div className="px-5 pb-5">
                                    <a
                                        href={slide.map}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gradient-to-r from-teal-500 to-green-400 text-white py-2 rounded-xl font-semibold hover:from-teal-600 hover:to-green-500 transition duration-300"
                                    >
                                        📍 Get Directions
                                    </a>
                                </div>
                            </div>


                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider;
