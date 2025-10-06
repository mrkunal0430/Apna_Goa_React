import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaHome, FaSmile, FaWhatsapp, FaMapMarkedAlt, FaUserFriends, FaCrown } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from '@vuer-ai/react-helmet-async';


const features = [
    {
        icon: <FaMapMarkedAlt className="text-4xl text-emerald-500" />,
        title: "Local Knowledge",
        desc: "Born and raised in Goa, we’ll guide you to hidden beaches, secret restaurants, and experiences no tourist map shows.",
        color: "from-emerald-100 to-emerald-50",
    },
    {
        icon: <FaUserFriends className="text-4xl text-pink-500" />,
        title: "Personalized Attention",
        desc: "Every guest is unique. We customize your stay — adventure, relaxation, food, or culture — just how you love it.",
        color: "from-pink-100 to-pink-50",
    },
    {
        icon: <FaCrown className="text-4xl text-yellow-500" />,
        title: "Luxury Amenities",
        desc: "From private pools to premium bedding, our stays are designed for comfort, elegance, and unforgettable moments.",
        color: "from-yellow-100 to-yellow-50",
    },
];


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div >
            <Helmet>
                <title>About ApnaGoa - Trusted Homestays in Goa</title>
                <meta name="description" content="Learn about ApnaGoa and our mission to provide the best homestay experience in Goa." />
                <meta property="og:title" content="About ApnaGoa - Trusted Homestays in Goa" />
                <meta property="og:description" content="Learn about ApnaGoa and our mission to provide the best homestay experience in Goa." />
                <meta property="og:image" content="https://apnagoa.com/Logo/og-image.jpg" />
                <link rel="canonical" href="https://apnagoa.com/about" />
            </Helmet>

            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-64px)]">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                    alt="Beach view"
                    loading='lazy'
                />
            </div>

            <section className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-16 px-6 lg:px-20 overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Welcome to <span className="text-yellow-300">ApnaGoa Homestays</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                            Discover the charm of South Goa with our handpicked
                            <span className="font-semibold text-yellow-200"> villas and apartments</span>.
                            Owned and hosted by locals, we ensure every guest feels at home while
                            experiencing Goa’s beaches, culture, and tranquility.
                        </p>

                        {/* Features */}
                        <div className="flex gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <FaHome className="text-yellow-300 text-2xl" />
                                <span className="font-medium">Premium Properties</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSmile className="text-yellow-300 text-2xl" />
                                <span className="font-medium">Owner as Host</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex gap-4">
                            <a
                                href="#properties"
                                className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-yellow-300 transition"
                            >
                                Explore Properties
                            </a>
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border-2 border-yellow-400 px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
                            >
                                <FaWhatsapp className="text-xl" /> Chat with Owner
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Image + Host Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                            alt="Luxury Villa Goa"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                        />

                        {/* Floating Host Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-2xl shadow-lg w-64 flex items-center gap-4">
                            <div className='absolute top-10 -right-40   transform -translate-x-1/2'>
                                <img
                                    src="poonam.jpg"
                                    alt="Owner Host"
                                    className="w-30 h-30 rounded-full object-cover border-2 border-yellow-400"
                                />
                            </div>

                            <div className=''>
                                <h3 className="font-bold text-lg">Meet Poonam</h3>
                                <p className="text-sm text-gray-600">
                                    Owner & Host of ApnaGoa Homestays. Passionate about hospitality
                                    and making your stay truly memorable.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative py-16 px-6 lg:px-20  bg-white">

                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
                        What Makes Us <span className="text-emerald-500">Different</span>
                    </h2>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className={`p-8 rounded-2xl shadow-xl bg-gradient-to-br ${f.color} relative`}
                            >
                                {/* Floating Circular Icon */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-5">
                                    {f.icon}
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
                                    <p className="text-gray-600 mt-3 leading-relaxed">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-tr from-orange-50 via-rose-50 to-yellow-50 text-gray-800 px-6 py-12" >
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <h1
                        className="text-4xl md:text-5xl font-bold text-center mb-10"
                        data-aos="zoom-out"
                    >
                        About ApnaGoa Homestays
                    </h1>

                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-14" data-aos="fade-up">
                        <img
                            src="/Properties/Villa/13.webp"
                            alt="ApnaGoa Property"
                            className="w-full md:w-1/2 rounded-xl shadow-xl object-cover"
                            loading='lazy'
                        />
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-2xl font-semibold text-pink-600">Your Home Away From Home</h2>
                            <p className="text-lg leading-relaxed">
                                At <strong>ApnaGoa Homestays</strong>, we offer a curated selection of villas and apartments
                                nestled in the heart of South Goa. Located close to stunning beaches like Varca,
                                Fatrade, and Colva, our properties are designed to make your stay unforgettable.
                            </p>
                            <p className="text-md text-gray-700">
                                Whether you're here for a romantic getaway, family vacation, or solo retreat — we
                                ensure warmth, comfort, and a truly Goan experience.
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
                        {[
                            {
                                title: "🏖️ Prime Locations",
                                desc: "Stay minutes away from serene South Goa beaches and top attractions."
                            },
                            {
                                title: "🏡 Fully Equipped Villas",
                                desc: "Spacious, modern, and comfortable accommodations with all amenities."
                            },
                            {
                                title: "🤝 Personalized Service",
                                desc: "We’re locals who care — ensuring your stay is stress-free and memorable."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:bg-pink-50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mission Section */}
                    <div className="mt-16 text-center max-w-3xl mx-auto" data-aos="zoom-in">
                        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To provide a home-like experience to travelers while showcasing the beauty and
                            serenity of South Goa. With top-notch amenities and heartfelt hospitality, ApnaGoa
                            Homestays redefines vacation living.
                        </p>
                    </div>
                </div>
            </div>

            <div className="travel-map py-6 px-12 bg-white">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    South Goa at a Glance
                </h3>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200  m-10">
                    <iframe
                        title="South Goa Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122895.85640111915!2d74.03861326953124!3d15.208129500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8337f679a7d%3A0x863e2fe3fc3bf21a!2sSouth%20Goa%2C%20Goa!5e0!3m2!1sen!2sin!4v1657376548211!5m2!1sen!2sin"
                        className="w-full h-[450px]"
                        style={{ border: "none" }}
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;
