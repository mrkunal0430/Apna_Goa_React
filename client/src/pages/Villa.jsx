// src/pages/Villa.jsx
import { useState, useEffect, React } from "react";
import { Helmet } from "react-helmet-async";
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
    Users,
    Home,
    Bath,
} from "lucide-react";

const Villa = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <div className="bg-white text-gray-800">
            {/* ✅ SEO */}
            <Helmet>
                <title>Luxury Villa in South Goa | ApnaGoa</title>
                <meta
                    name="description"
                    content="Stay at our private luxury villa in South Goa — perfect for families & groups with a pool, Wi-Fi, AC, kitchen, and proximity to Palolem beach."
                />
            </Helmet>

            {/* ✅ Hero */}
            <section
                className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/properties/villa1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Luxury Villa in South Goa
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A private villa with a pool, garden, and modern comforts — perfect
                        for families, friends, and group getaways.
                    </p>
                </div>
            </section>

            {/* ✅ Quick Highlights */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Bed size={28} />, text: "3 Spacious Bedrooms" },
                        { icon: <Bath size={28} />, text: "Modern Bathrooms" },
                        { icon: <Users size={28} />, text: "Up to 8 Guests" },
                        { icon: <MapPin size={28} />, text: "Near Palolem Beach" },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Villa</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                    Our villa combines luxury with comfort. With 3 bedrooms, a private
                    pool, landscaped garden, and modern interiors, it’s designed for large
                    families or groups who want to experience South Goa in style. The
                    villa offers privacy, space, and a touch of Goan charm.
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
                        "/properties/villa1.jpg",
                        "/properties/villa2.jpg",
                        "/properties/villa3.jpg",
                        "/properties/villa4.jpg",
                    ].map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt="Villa view"
                                className="w-full h-[450px] object-cover rounded-3xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* ✅ Room Breakdown */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Inside the Villa
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Bedrooms",
                            desc: "Spacious rooms with king-size beds, fresh linens, and AC.",
                            img: "/properties/villa-bedroom.jpg",
                        },
                        {
                            title: "Living Room",
                            desc: "Large lounge with comfy sofas, TV, and stylish interiors.",
                            img: "/properties/villa-living.jpg",
                        },
                        {
                            title: "Kitchen",
                            desc: "Fully equipped with modern appliances and dining essentials.",
                            img: "/properties/villa-kitchen.jpg",
                        },
                        {
                            title: "Private Pool & Garden",
                            desc: "Enjoy a dip in your private pool or relax in the lush garden.",
                            img: "/properties/villa-pool.jpg",
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
                        { icon: <Utensils size={24} />, label: "Fully Equipped Kitchen" },
                        { icon: <Car size={24} />, label: "Private Parking" },
                        { icon: <Coffee size={24} />, label: "Balcony & Sit-out" },
                        { icon: <Tv size={24} />, label: "Smart TV with Streaming" },
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

            {/* ✅ Policies */}
            <section className="py-20 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Stay Policies
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        { q: "Check-in", a: "2:00 PM onwards" },
                        { q: "Check-out", a: "11:00 AM" },
                        { q: "Pets", a: "Allowed (on request)" },
                        { q: "Parties", a: "Small gatherings allowed" },
                        {
                            q: "Cancellation",
                            a: "Free cancellation up to 7 days before stay",
                        },
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

            {/* ✅ FAQ Section */}
            <section className="py-20 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        {
                            question: "Does the villa have a private pool?",
                            answer: "Yes, the villa has a private pool exclusively for guests.",
                        },
                        {
                            question: "Is breakfast included?",
                            answer: "Breakfast can be arranged on request.",
                        },
                        {
                            question: "Are pets allowed?",
                            answer: "Yes, pets are allowed with prior approval.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden"
                        >
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
                    Book Your Luxury Villa in South Goa
                </h2>
                <p className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    A spacious, private villa with a pool and modern comforts. Perfect for
                    a luxurious Goan holiday with family and friends.
                </p>
                <a
                    href="https://wa.me/919999999999?text=I%20want%20to%20book%20the%20Villa"
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
