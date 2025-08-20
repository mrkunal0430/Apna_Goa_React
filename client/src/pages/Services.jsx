import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaUmbrellaBeach, FaShuttleVan, FaWifi, FaUtensils, FaRegSnowflake, FaSpa, FaConciergeBell } from 'react-icons/fa';
import SwiperSlider from '../components/explore/SwiperSlider';
import Complimentary from '../Data/Service/Complimentary.json';
import Premium from '../Data/Service/Premium.json';

const images = [
    "Home-Swap-images/1.jpg",
    "Home-Swap-images/1.jpg",
    "Home-Swap-images/1.jpg",
    "Home-Swap-images/1.jpg",
];


const services = [
    {
        title: "Beachside Villas",
        desc: "Stay in premium villas right next to Goa’s serene beaches, blending comfort with breathtaking views.",
        icon: <FaUmbrellaBeach className="text-3xl text-emerald-600" />,
    },
    {
        title: "24/7 Concierge",
        desc: "From restaurant bookings to local tips, our concierge ensures your trip is hassle-free.",
        icon: <FaConciergeBell className="text-3xl text-pink-500" />,
    },
    {
        title: "Airport Transfers",
        desc: "Enjoy stress-free arrivals with our reliable and comfortable airport pickup & drop services.",
        icon: <FaShuttleVan className="text-3xl text-yellow-500" />,
    },
    {
        title: "Luxury Spa",
        desc: "Indulge in rejuvenating spa treatments right at your homestay for complete relaxation.",
        icon: <FaSpa className="text-3xl text-purple-500" />,
    },
];

const Service = () => {
    const containerRef = useRef(null);

    // Track scroll progress of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"], // animate between start & end
    });

    const [index, setIndex] = useState(0);

    // handle scroll
    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            // scroll down → next image
            setIndex((prev) => (prev + 1) % images.length);
        } else {
            // scroll up → previous image
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Transform progress to height
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row w-full min-h-screen">
                <section className="w-1/2">

                </section>
                <section className="w-1/2 py-3 px-1 lg:px-5 bg-gray-50">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                        Our <span className="text-emerald-500">Services</span>
                    </h2>

                    <div ref={containerRef} className="relative max-w-5xl mx-auto">
                        {/* Background Line */}
                        <div className="absolute left-1/9 top-0 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

                        {/* Animated Progress Line */}
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute left-1/9 top-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 transform -translate-x-1/2 origin-top"
                        ></motion.div>

                        <div className="space-y-16">
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    // initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    // transition={{ duration: 0.8, delay: i * 0.2 }}
                                    className={`relative flex items-center pl-20`}
                                    data-aos="fade-up"
                                >


                                    {/* Content Box */}
                                    <div
                                        data-aos="fade-up"
                                        className={` w-[80vh] p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition `}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            {s.icon}
                                            <h3 className="text-xl font-bold text-gray-800">{s.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{s.desc}</p>
                                    </div>

                                    {/* Middle Icon Bubble */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1, rotateX: 45, rotateY: 25 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="absolute left-1/9 transform -translate-x-1/2  shadow-md w-14 h-14 rounded-full flex items-center justify-center"

                                    >
                                        <div data-aos="fade-up" className="w-14 h-14 border-8 border-emerald-400 rounded-full shadow-lg"></div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-yellow-700 via-white to-rose-900 text-gray-800">
                <h1 className="text-4xl font-bold text-center mb-12">What we have to offer</h1>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Complimentary Amenities</h4>
                    <div className='mt-5'> <SwiperSlider slidesData={Complimentary} type='services' ></SwiperSlider></div>
                </div>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Premium Services</h4>
                    <div className='mt-5'> <SwiperSlider slidesData={Premium} type='services' ></SwiperSlider></div>
                </div>
            </div>
        </div>
    );
};

export default Service;
















