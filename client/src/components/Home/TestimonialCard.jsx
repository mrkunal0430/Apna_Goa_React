import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import reviews from "../../Data/Reviews.json";

// Testimonial Card
function TestimonialCard({ review, isActive }) {
    return (
        <div
            className={`bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30 transition-transform duration-500 ease-in-out flex flex-col items-center text-center ${isActive ? "scale-110 shadow-3xl ring-4 ring-cyan-200/50" : "scale-95 opacity-70"
                }`}
            style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(15px)",
            }}
        >
            <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
            />
            <p className="text-gray-800 italic mb-4">“{review.text}”</p>
            <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
            <span className="text-sm text-cyan-700 font-medium">{review.position}</span>
        </div>
    );
}

// Main Swiper Component
export default function CylindricalTestimonialSwiper() {
    const swiperRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-10 relative overflow-hidden bg-gradient-to-b from-cyan-100 via-blue-50 to-yellow-50">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-full rounded-3xl bg-gradient-to-b from-cyan-200/20 via-blue-200/10 to-yellow-100/20 filter blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    What Our Guests Say
                </h2>
                <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
                    Real experiences from travelers who stayed at{" "}
                    <span className="font-semibold text-cyan-600">ApnaGoa</span> and loved every moment.
                </p>

                <div className="relative">
                    {/* Left Button */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-md hover:bg-cyan-600 hover:text-white transition"
                        onClick={() => swiperInstance?.slidePrev()}
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Right Button */}
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-md hover:bg-cyan-600 hover:text-white transition"
                        onClick={() => swiperInstance?.slideNext()}
                    >
                        <FaChevronRight />
                    </button>

                    <Swiper
                        ref={swiperRef}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        modules={[Autoplay, EffectCoverflow, Navigation]}
                        effect="coverflow"
                        coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 1.3, slideShadows: false }}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}
                        loopedSlides={reviews.length}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={idx} className="flex justify-center">
                                <TestimonialCard review={review} isActive={activeIndex === idx} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
