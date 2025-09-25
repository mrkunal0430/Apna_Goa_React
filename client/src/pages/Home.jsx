// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import TestimonialCard from '../components/Home/TestimonialCard';
import PropertyShowcase from '../components/Home/Gallery/PropertyShowcase'
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from '@vuer-ai/react-helmet-async';
import CountUp from "react-countup";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Luxury Villas",
        desc: "Spacious private villas with pools & modern amenities.",
        img: "/Villa.webp",
        link: "properties/villa",
    },
    {
        title: "Cozy Apartments",
        desc: "Perfect stays for couples & small families in South Goa.",
        img: "/2BHK_Apartment/14.webp",
        link: "properties/apartment",
    },
    {
        title: "Experiences",
        desc: "Curated Goa experiences: beaches, culture & nightlife.",
        img: "/experience.jpg",
        link: "/experiences",
    },
    {
        title: "Food & Drinks",
        desc: "Enjoy authentic Goan cuisine & beachside cafes.",
        img: "/food.jpg",
        link: "/food",
    },
];

const images = [
    { src: '/Villa/bg.webp', alt: 'Luxury Villa near Varca Beach' },
    { src: '/Villa/15.webp', alt: 'Cozy Apartment near Colva' },
    { src: '/2BHK_Apartment/14.webp', alt: 'Peaceful Evening in South Goa' },
    { src: '/Villa/19.webp', alt: 'Palm Tree View in South Goa' },
    { src: '/Villa/15.webp', alt: 'Sunset View near the Beach' },
];

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const stats = [
        { label: "Working Since", value: 2018 },
        { label: "Guests Served", value: 1200, suffix: "+" },
        { label: "Properties", value: 25, suffix: "+" },
        { label: "5-Star Reviews", value: 300, suffix: "+" },
    ];

    return (
        <div className="w-full ">

            <Helmet>
                <title>ApnaGoa - Best Homestays in Goa</title>
                <meta name="description" content="Book premium homestays in Goa with ApnaGoa. Comfortable stays near beaches and attractions." />
                <meta property="og:title" content="ApnaGoa - Best Homestays in Goa" />
                <meta property="og:description" content="Book premium homestays in Goa with ApnaGoa. Comfortable stays near beaches and attractions." />
                <meta property="og:image" content="https://apnagoa.com/Logo/og-image.jpg" />
                <link rel="canonical" href="https://apnagoa.com/" />
            </Helmet>

            {/* Hero Slider Section */}
            <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
                {/* Background Parallax Image */}
                <div
                    className="absolute inset-0 bg-[url('/Villa.webp')] bg-cover bg-center bg-fixed"
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Discover <span className="text-emerald-400">South Goa</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
                        Handpicked Villas & Apartments for your perfect holiday escape
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow hover:bg-emerald-600 transition">
                            Explore Stays
                        </button>
                        <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-6">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Welcome to <span className="text-emerald-600">ApnaGoa</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose your perfect stay or experience in the heart of South Goa.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {categories.map((cat, index) => (
                        <motion.a
                            key={index}
                            href={cat.link}
                            whileHover={{ scale: 1.05 }}
                            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={cat.img}
                                alt={cat.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                            {/* Text */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h2 className="text-2xl font-bold">{cat.title}</h2>
                                <p className="text-sm text-gray-200 mt-1">{cat.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>


            {/* Testimonial Section */}
            <div className="py-5 bg-[#bbd7f3]">
                <h2
                    className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
                    data-aos="fade-up"
                >
                    Listen to what our guests have to say
                </h2>
                <TestimonialCard />
            </div>

            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-[#bbd7f3] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start max-w-full ">      {/* Rating Card */}
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 border rounded-3xl bg-gradient-to-br from-amber-200 via-blue-200 to-cyan-200 flex flex-col justify-center items-center text-center p-6 sm:p-8 space-y-4 shadow-lg">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 text-green-500">
                        <FaStar className="text-base sm:text-xl md:text-2xl mt-3 sm:mt-4" />
                        <FaStar className="text-lg sm:text-2xl md:text-3xl mt-2" />
                        <FaStar className="text-xl sm:text-3xl md:text-4xl" />
                        <FaStar className="text-lg sm:text-2xl md:text-3xl mt-2" />
                        <FaStar className="text-base sm:text-xl md:text-2xl mt-3 sm:mt-4" />
                    </div>

                    {/* Rating Number */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
                        4.5
                    </h2>

                    {/* Reviews */}
                    <a
                        href="#"
                        className="text-green-600 font-semibold hover:underline text-sm sm:text-base md:text-lg"
                    >
                        137 Reviews
                    </a>

                    {/* Subtext */}
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        by customers from{" "}
                        <span className="font-bold">13+ states & Countries</span>
                    </p>
                </div>


                {/* Property Showcase */}
                <div className="w-full lg:flex-1">
                    <PropertyShowcase />
                </div>
            </div>

            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h2 className="text-4xl font-bold">
                                <CountUp start={0} end={stat.value} duration={10.5} />
                                {stat.suffix && <span>{stat.suffix}</span>}
                            </h2>
                            <p className="text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="travel-map p-6 bg-[#bbd7f3]">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                    South Goa at a Glance
                </h3>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                        title="South Goa Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122895.85640111915!2d74.03861326953124!3d15.208129500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8337f679a7d%3A0x863e2fe3fc3bf21a!2sSouth%20Goa%2C%20Goa!5e0!3m2!1sen!2sin!4v1657376548211!5m2!1sen!2sin"
                        className="w-full h-[450px]"
                        style={{ border: "none" }}
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-6 text-gray-700 max-w-4xl mx-auto text-justify border-2 rounded-4xl border-amber-500 p-6" data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-2">Varca, South Goa, India</h2>
                    <p className="">The property is well developed, gated community, with 24/7 security personnels deployed and we expect guest to follow a good civic behaviour with neighbours and must try to respect each other's privacy and not play loud music post 11 pm midnight and avoid nuisance.

                        Our place is well connected via all modes including taxis and public transport, Fatrade Four Point , Near St. RoqueChapel on Ramada Caravella road is the landmark to reach our place

                        Our place is well connected via all modes including taxis and public transport, Fatrade Four Point , Near St. RoqueChapel on Ramada Caravella road is the landmark to reach our place</p>
                </div>
            </div>
        </div>
    );
};

export default Home;



