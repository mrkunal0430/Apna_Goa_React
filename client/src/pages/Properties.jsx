// src/pages/Property.jsx
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Complimentary from '../Data/Service/Complimentary.json';
import Premium from '../Data/Service/Premium.json';
import SwiperSlider from '../components/explore/SwiperSlider';

const Property = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
        AOS.refresh();
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#739EC9]">
            <Helmet>
                <title>Our Properties | ApnaGoa Homestays</title>
                <meta
                    name="description"
                    content="Explore premium Villas and Apartments in South Goa by ApnaGoa Homestays. Perfect for luxury getaways, family vacations, or romantic escapes."
                />
            </Helmet>

            {/* Hero */}
            <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-[#739EC9]">
                <img src="/ApnaGoa_Beach.webp" alt="ApnaGoa Homestays" className="w-full h-84 object-cover" />
                <div className="absolute max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold mb-6">Our Properties</h1>
                    <p className="text-lg opacity-90">
                        Discover the charm of South Goa with our handpicked collection of
                        Apartments and Villas. Comfort, luxury, and breathtaking
                        surroundings await you.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#739EC9]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Why Stay With Us?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our properties are designed to match every traveler’s needs —
                        whether it’s a quiet family retreat, a romantic getaway, or a fun
                        trip with friends. Expect modern interiors, private spaces, and
                        access to South Goa’s most serene beaches.
                    </p>
                </motion.div>
            </section>

            {/* Property Cards */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#739EC9]">
                <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Apartments */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                        data-aos="fade-up"
                    >
                        <div className="relative">
                            <img
                                src="/images/apartment.jpg"
                                alt="Apartments in Goa"
                                className="w-full h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                                Stylish Apartments
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Modern and fully furnished, our apartments are perfect for small
                                groups or families. With private kitchens, cozy living rooms,
                                and balconies overlooking South Goa’s landscapes, they bring
                                comfort and convenience together.
                            </p>
                            <Link
                                to="/properties/apartment"
                                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition font-medium"
                            >
                                Explore Apartments
                            </Link>
                        </div>
                    </motion.div>

                    {/* Villas */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="relative">
                            <img
                                src="/images/villa.jpg"
                                alt="Villas in Goa"
                                className="w-full h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                                Luxury Villas
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Perfect for larger groups, our villas offer private pools, lush
                                gardens, and luxurious interiors. Whether it’s a family reunion
                                or a special celebration, our villas create memories that last a
                                lifetime.
                            </p>
                            <Link
                                to="/properties/villa"
                                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition font-medium"
                            >
                                Explore Villas
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="min-h-screen px-6 py-12 bg-[#739EC9]">
                <h1 className="text-4xl font-bold text-center mb-12">What we have to offer</h1>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Complimentary Amenities</h4>
                    <div className='mt-5 relative'> <SwiperSlider slidesData={Complimentary} type='services' ></SwiperSlider></div>
                </div>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Premium Services</h4>
                    <div className='mt-5 relative'> <SwiperSlider slidesData={Premium} type='services' ></SwiperSlider></div>
                </div>
            </div>

            {/* CTA */}
            <section className="bg-[#739EC9] text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Stay</h2>
                    <p className="mb-6 opacity-90">
                        Choose from our collection of apartments and villas to make your
                        Goa vacation unforgettable. Comfort, style, and great locations
                        await you.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Property;
