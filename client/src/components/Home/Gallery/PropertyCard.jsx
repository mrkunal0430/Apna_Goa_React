// export default function PropertyCard({ property, openGallery }) {
//     return (
//         <div
//             className="frounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
//             onClick={() => openGallery(property.images)}
//         >
//             {/* Image */}
//             <div className="h-90 overflow-hidden">
//                 <img
//                     src={property.coverImage}
//                     alt={property.title}
//                     className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//                     loading="lazy"
//                 />
//             </div>

//             {/* Title */}
//             <div className="p-4 bg-white">
//                 <h2 className="text-xl font-bold">{property.title}</h2>
//             </div>
//         </div>
//     );
// }




import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCards,
    Navigation,
    Pagination,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import { XMarkIcon } from "@heroicons/react/24/solid";


import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function PropertyCard({ property }) {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const openGallery = (index) => {
        setStartIndex(index);
        setIsOpen(true);
    };

    const closeGallery = () => setIsOpen(false);

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Card Effect Swiper */}
            <Swiper
                effect={"cards"}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                className="w-70 max-w-xl sm:max-w-sm h-80 sm:h-96"
            >
                {property.images.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openGallery(i)}
                    >
                        <img
                            src={src}
                            alt={`Villa ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Caption */}
            <button className="px-4 py-2 bg-white shadow rounded-lg text-sm hover:bg-gray-100">
                {property.title}
            </button>

            {/* Fullscreen Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        className="absolute top-5 right-5 bg-black bg-opacity-60 p-2 rounded-full text-white hover:bg-opacity-80 transition"
                        onClick={closeGallery}
                    >
                        <XMarkIcon className="w-7 h-7" />
                    </button>

                    {/* Fullscreen Swiper */}
                    <Swiper
                        initialSlide={startIndex}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        keyboard={{ enabled: true }}
                        modules={[Navigation, Pagination, Keyboard]}
                        className="w-[90%] h-[80%]"
                    >
                        {property.images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={src}
                                    alt={`Villa Slide ${i + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}
