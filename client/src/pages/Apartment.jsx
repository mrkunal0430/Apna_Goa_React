// src/pages/Apartment.jsx
import { useState, useEffect, React } from "react";
import { Helmet } from '@vuer-ai/react-helmet-async';
import { motion, AnimatePresence } from "framer-motion";

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



const Apartment = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <div className="bg-[#6ea7e0] text-gray-800">
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
                className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/properties/apartment1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Modern Holiday Apartment
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Your perfect getaway in Palolem, South Goa. Fully furnished with
                        comfort, style, and convenience.
                    </p>
                </div>
            </section>

            {/* ✅ Quick Highlights */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Bed size={28} />, text: "1 Spacious Bedroom" },
                        { icon: <Tv size={28} />, text: "Smart TV + Netflix" },
                        { icon: <Wifi size={28} />, text: "High-Speed Wi-Fi" },
                        { icon: <MapPin size={28} />, text: "5 min to Palolem Beach" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-3 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <span className="text-green-600">{item.icon}</span>
                            <p className="font-medium text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ About */}
            <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About the Apartment
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                    Our apartment blends comfort and modern living. With a cozy bedroom,
                    stylish living room, balcony views, and a kitchenette — it’s ideal for
                    couples, small families, and digital nomads. The interiors are
                    designed to make you feel at home while enjoying South Goa’s charm.
                </p>
            </section>

            {/* ✅ Gallery */}
            <section className="px-6 md:px-16 max-w-6xl mx-auto mb-24">
                <Swiper
                    navigation
                    modules={[Navigation]}
                    className="h-[450px] rounded-3xl shadow-lg"
                >
                    {[
                        "/properties/apartment1.jpg",
                        "/properties/apartment2.jpg",
                        "/properties/apartment3.jpg",
                    ].map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt="Apartment view"
                                className="w-full h-[450px] object-cover rounded-3xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* ✅ Room Breakdown */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Inside the Apartment
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Bedroom",
                            desc: "A cozy queen-size bed, fresh linens, wardrobe, and balcony access.",
                            img: "/properties/bedroom.jpg",
                        },
                        {
                            title: "Living Room",
                            desc: "Bright space with a sofa, smart TV, and modern decor.",
                            img: "/properties/livingroom.jpg",
                        },
                        {
                            title: "Kitchenette",
                            desc: "Equipped with stove, fridge, microwave, and dining essentials.",
                            img: "/properties/kitchen.jpg",
                        },
                        {
                            title: "Balcony",
                            desc: "Relax with coffee and enjoy stunning greenery views.",
                            img: "/properties/balcony.jpg",
                        },
                    ].map((room, i) => (
                        <div
                            key={i}
                            className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <img
                                src={room.img}
                                alt={room.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-3">{room.title}</h3>
                                <p className="text-gray-600">{room.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Amenities */}
            <section className="py-20 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Amenities
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

            {/* ✅ Nearby Attractions */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Nearby Attractions
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Palolem Beach",
                            desc: "Golden sands and calm waters just 5 mins away.",
                            img: "/attractions/palolem.jpg",
                        },
                        {
                            title: "Agonda Beach",
                            desc: "A quieter, scenic beach 20 mins drive.",
                            img: "/attractions/agonda.jpg",
                        },
                        {
                            title: "Local Market",
                            desc: "Shops, cafes, and vibrant nightlife nearby.",
                            img: "/attractions/market.jpg",
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

            {/* ✅ Policies */}
            <section className="py-20 px-6 md:px-16">
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

            {/* Faq section */}
            <section className="py-20 px-6 md:px-16">
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

            {/* ✅ Final CTA */}
            <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-24 text-center text-white">
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

export default Apartment;
