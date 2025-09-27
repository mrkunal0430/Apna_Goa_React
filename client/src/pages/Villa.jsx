import React, { useState, useEffect } from "react";
import { Helmet } from '@vuer-ai/react-helmet-async';
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "../components/Properties_Cards/VideoCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
    Wifi,
    Wind,
    Car,
    Utensils,
    Coffee,
    Bed,
    Tv,
    MapPin,
    CheckCircle,
    ChevronDown,
} from "lucide-react";
import VillaImages from "../Data/Home/villa_Apartment.json";


const videoCards = [
    {
        title: "Luxury Villas",
        desc: "Private villas with pools & modern amenities.",
        video: "/Properties/Villa/1.mp4",
        thumbnail: "/Properties/Villa/1.webp",
    },
    {
        title: "Cozy Villas",
        desc: "Perfect for couples & small families in South Goa.",
        video: "/Properties/Villa/2.mp4",
        thumbnail: "/Properties/Villa/11.webp",
    },

    {
        title: "Goa Experiences",
        desc: "Beaches, nightlife & authentic Goan culture.",
        video: "/Properties/Villa/3.mp4",
        thumbnail: "/Properties/Villa/17.webp",
    },
];

const Villa = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <div className="bg-[#cdcfe0] text-gray-800 overflow-x-hidden">
            {/* ✅ SEO */}
            <Helmet>
                <title>Holiday Apartment in South Goa | ApnaGoa</title>
                <meta
                    name="description"
                    content="Stay at our modern holiday apartment in Palolem, South Goa — perfect for couples & families with Wi-Fi, AC, balcony views, kitchenette, and easy access to beaches."
                />
            </Helmet>

            {/* ✅ Hero */}
            <section
                className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/Properties/Villa/14.webp')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Modern Holiday Villa
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Your perfect getaway in Palolem, South Goa. Fully furnished with
                        comfort, style, and convenience.
                    </p>
                </div>
            </section>

            {/* ✅ Quick Highlights */}
            <section className="pb-10 pt-20 px-6 md:px-16 bg-[#cdcfe0]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Bed size={28} />, text: "1 Spacious Bedroom" },
                        { icon: <Tv size={28} />, text: "Smart TV + Netflix" },
                        { icon: <Wifi size={28} />, text: "High-Speed Wi-Fi" },
                        { icon: <MapPin size={28} />, text: "5 min to Palolem Beach" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-3 bg-white p-8 rounded-2xl shadow-md hover:shadow-blue-800 transition transform "
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <span className="text-green-600">{item.icon}</span>
                            <p className="font-medium text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-6 md:mx-20 bg-[#032446] w-auto h-0.5"></div>
            {/* ✅ About */}
            <div className="my-10 flex flex-col md:flex-row gap-10 bg-[#cdcfe0] px-6 md:px-0">
                {/* ✅ Gallery */}
                <div className="md:px-16 max-w-4xl mx-auto md:mb-0 w-full md:w-1/2">
                    <Swiper
                        navigation
                        modules={[Navigation]}
                        className="h-[500px] md:h-[650px] rounded-3xl shadow-lg bg-[#032446]"
                    >
                        {VillaImages.find((property) => property.id === 1).images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt="Apartment view"
                                    className="w-full h-full object-cover rounded-3xl text-white"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ✅ Text */}
                <div className="flex flex-col justify-center pt-6 md:pt-20  px-6 md:px-16 max-w-6xl mx-auto text-center md:text-left md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Your Private Goan Retreat
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0 text-base md:text-lg mb-6">
                        Discover your personal oasis in South Goa. Our apartment is more than just a place to stay—it's a thoughtfully designed experience blending modern amenities with the tranquil charm of Palolem. The space is flooded with natural light, offering a warm and inviting atmosphere from the moment you arrive.
                    </p>
                    <div className="space-y-4 text-left max-w-md mx-auto md:mx-0">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-700"><strong>Work & Stay:</strong> High-speed Wi-Fi and a comfortable workspace perfect for digital nomads.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-700"><strong>Relax & Unwind:</strong> A serene private balcony overlooking lush greenery—your perfect coffee spot.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                            <p className="text-gray-700"><strong>Home Comforts:</strong> A well-equipped kitchenette to prepare your favorite meals.</p>
                        </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0 text-base md:text-lg mt-6">
                        Ideal for a romantic couple's retreat, a comfortable base for small families, or an inspiring creative sanctuary.
                    </p>
                </div>
            </div>

            <div className="mx-6 md:mx-20 bg-[#032446] w-auto h-0.5"></div>
            {/* ✅ Room Breakdown */}
            <div className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-6">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Explore <span className="text-emerald-600">ApnaGoa</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our villas, apartments, and experiences through short video highlights.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl mx-auto">
                    {videoCards.map((card, index) => (
                        <VideoCard key={index} {...card} />
                    ))}
                </div>
            </div>
            <div className="mx-6 md:mx-20 bg-[#032446] w-auto h-0.5"></div>
            {/* ✅ Amenities */}
            <section className="pt-20 pb-10 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        { icon: <Wind size={24} />, label: "Air Conditioning" },
                        { icon: <Wifi size={24} />, label: "High-Speed Wi-Fi" },
                        { icon: <Utensils size={24} />, label: "Kitchenette" },
                        { icon: <Car size={24} />, label: "Free Parking" },
                        { icon: <Coffee size={24} />, label: "Balcony with View" },
                        { icon: <Tv size={24} />, label: "Smart TV with Netflix" },
                    ].map((a, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <span className="text-green-600">{a.icon}</span>
                            <span className="text-gray-800 font-medium">{a.label}</span>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-6 md:mx-20 bg-blue-500 w-auto h-0.5"></div>
            {/* ✅ Nearby Attractions */}
            <section className="pt-20 pb-10 px-6 md:px-16 bg-[#cdcfe0]">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Nearby Attractions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Palolem Beach",
                            desc: "Golden sands and calm waters just 5 mins away.",
                            img: "/Properties/Famous_Places/Palolem.webp",
                        },
                        {
                            title: "Agonda Beach",
                            desc: "A quieter, scenic beach 20 mins drive.",
                            img: "/Properties/Famous_Places/AgondaBeach.webp",
                        },
                        {
                            title: "Local Market",
                            desc: "Shops, cafes, and vibrant nightlife nearby.",
                            img: "/Properties/Famous_Places/LocalMarket.webp",
                        },
                    ].map((place, i) => (
                        <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg bg-white"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <img
                                src={place.img}
                                alt={place.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
                                <p className="text-gray-600">{place.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-6 md:mx-20 bg-blue-700 w-auto h-0.5"></div>
            {/* ✅ Policies */}
            <section className="pt-20 pb-10 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Stay Policies
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        { q: "Check-in", a: "2:00 PM onwards" },
                        { q: "Check-out", a: "11:00 AM" },
                        { q: "Pets", a: "Not allowed" },
                        { q: "Smoking", a: "Not allowed inside the apartment" },
                        { q: "Cancellation", a: "Free cancellation up to 7 days before stay" },
                    ].map((policy, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl shadow-md"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <CheckCircle className="text-green-600" />
                            <div>
                                <h4 className="font-semibold text-lg">{policy.q}</h4>
                                <p className="text-gray-600">{policy.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-6 md:mx-20 bg-[#032446] w-auto h-0.5"></div>
            {/* Faq section */}
            <section className="pt-20 pb-10 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        {
                            question: "What is the check-in and check-out time?",
                            answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM.",
                        },
                        {
                            question: "Is breakfast included?",
                            answer: "Yes, breakfast is included in your stay.",
                        },
                        {
                            question: "Are pets allowed?",
                            answer: "No, pets are not allowed in the apartment.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden"
                        >
                            {/* Question */}
                            <button
                                className="w-full flex justify-between items-center p-6 text-left font-medium text-lg text-gray-800 hover:bg-gray-100 transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                                <ChevronDown
                                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer (Slide Down) */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-gray-600 leading-relaxed"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mx-6 md:mx-20 bg-[#032446] w-auto h-0.5"></div>
            {/* ✅ Final CTA */}
            <section className="bg-[#cdcfe0] border-4 rounded-2xl border-sky-800 pt-20 pb-24 text-center text-gray-800 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Book Your Apartment Stay in South Goa
                </h2>
                <p className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    A cozy, modern holiday apartment just minutes from Palolem Beach.
                    Secure your stay today for an unforgettable Goan experience.
                </p>
                <a
                    href="https://wa.me/919999999999?text=I%20want%20to%20book%20the%20Apartment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
                >
                    Book on WhatsApp
                </a>
            </section>
        </div>
    );
};

export default Villa;