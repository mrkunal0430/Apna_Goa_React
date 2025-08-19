import React from "react";
import PropertyCard from "./PropertyCard";
import properties from "../../../Data/Home/villa_Apartment.json";

export default function PropertyShowcase() {
    return (
        <div className="p-4 md:p-6 grid gap-18 sm:grid-cols-1 lg:grid-cols-2">
            {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
            ))}
        </div>
    );
}





// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs, Pagination, Keyboard } from "swiper/modules";
// import { XMarkIcon } from "@heroicons/react/24/solid";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/pagination";

// const images = [
//     "/Pics/1.jpg",
//     "/Pics/2.jpg",
//     "/Pics/3.jpg",
//     "/Pics/4.jpg",
//     "/Pics/5.jpg",
//     "/Pics/6.jpg",
//     "/Pics/7.jpg",
//     "/Pics/8.jpg",
// ];

// export default function PropertyShowcase() {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [startIndex, setStartIndex] = useState(0);

//     const openGallery = (index) => {
//         setStartIndex(index);
//         setIsOpen(true);
//     };

//     return (
//         <div className="max-w-5xl mx-auto">
//             {/* Main Showcase */}
//             <Swiper
//                 style={{ "--swiper-navigation-color": "#fff" }}
//                 spaceBetween={10}
//                 navigation
//                 pagination={{ clickable: true }}
//                 keyboard={{ enabled: true }}
//                 thumbs={{ swiper: thumbsSwiper }}
//                 modules={[FreeMode, Navigation, Thumbs, Pagination, Keyboard]}
//                 className="rounded-xl overflow-hidden"
//             >
//                 {images.map((src, i) => (
//                     <SwiperSlide key={i} onClick={() => openGallery(i)}>
//                         <img
//                             src={src}
//                             alt={`Property ${i + 1}`}
//                             className="w-full h-[500px] object-cover cursor-pointer"
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Thumbnail Slider */}
//             <Swiper
//                 onSwiper={setThumbsSwiper}
//                 spaceBetween={10}
//                 slidesPerView={5}
//                 freeMode
//                 watchSlidesProgress
//                 modules={[FreeMode, Navigation, Thumbs]}
//                 className="mt-3"
//             >
//                 {images.map((src, i) => (
//                     <SwiperSlide key={i}>
//                         <img
//                             src={src}
//                             alt={`Thumb ${i + 1}`}
//                             className="w-full h-24 object-cover rounded-md cursor-pointer"
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Fullscreen Lightbox */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//                     <button
//                         className="absolute top-5 right-5 bg-black bg-opacity-60 p-2 rounded-full text-white hover:bg-opacity-80 transition"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         <XMarkIcon className="w-7 h-7" />
//                     </button>

//                     <Swiper
//                         initialSlide={startIndex}
//                         loop
//                         navigation
//                         pagination={{ clickable: true }}
//                         keyboard={{ enabled: true }}
//                         modules={[Navigation, Pagination, Keyboard]}
//                         className="w-[90%] h-[80%]"
//                     >
//                         {images.map((src, i) => (
//                             <SwiperSlide key={i}>
//                                 <img
//                                     src={src}
//                                     alt={`Fullscreen ${i + 1}`}
//                                     className="w-full h-full object-contain"
//                                 />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             )}
//         </div>
//     );
// }


