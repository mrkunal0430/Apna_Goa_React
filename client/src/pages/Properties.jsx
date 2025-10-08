// src/pages/Property.jsx
import { useEffect } from "react";
import { Helmet } from '@vuer-ai/react-helmet-async';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PropertyCard from "../components/Properties_Cards/PropertyCard";



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


            <div className="relative h-[70vh] md:h-screen flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/Property_Hero.webp"
                        alt="ApnaGoa Properties"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Discover Your Perfect Stay in South Goa
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        Choose from our handpicked <span className="font-semibold">Villas</span> or
                        <span className="font-semibold"> Apartments</span> for a memorable holiday.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link
                            to="/properties/villa"
                            className="bg-white/90 hover:bg-white text-black font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all"
                        >
                            Explore Villas
                        </Link>
                        <Link
                            to="/properties/apartment"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all"
                        >
                            Explore Apartments
                        </Link>
                    </div>
                </div>
            </div>


            <section className=" overflow-hidden bg-[#739EC9] relative" data-aos="fade-up">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto mt-10 text-center">
                    <h1 className="text-5xl font-extrabold mb-6 text-black">Our Properties</h1>
                    <p className="text-lg opacity-90 text-white">
                        Discover the charm of South Goa with our handpicked collection of
                        Apartments and Villas. Comfort, luxury, and breathtaking
                        surroundings await you.
                    </p>
                </motion.div>
            </section>

            {/* ------------------ Why Choose Us ------------------ */}
            <section className="py-6 px-6 md:px-16 lg:px-24 bg-[#739EC9]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Why Stay With Us?</h2>
                    <p className="text-white leading-relaxed">
                        Our properties are designed to match every traveler’s needs — whether it’s a quiet family retreat, a romantic getaway, or a fun trip with friends. Expect modern interiors, private spaces, and access to South Goa’s most serene beaches.
                    </p>
                </motion.div>
            </section>

            <div className="relative w-full h-30  md:h-96 overflow-hidden  shadow-lg group">
                {/* Background Image */}
                <img
                    src="/ApnaGoa_Beach.webp"
                    alt="Scenic view of South Goa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* ------------------ Property Cards ------------------ */}


            <section className="py-12 px-6 md:px-16 lg:px-24 bg-[#739EC9]">
                <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    <PropertyCard
                        image="/Properties/Apartment/11.webp"
                        title="Stylish Apartments"
                        description="Modern and fully furnished, our apartments are perfect for small groups or families. With private kitchens, cozy living rooms, and balconies overlooking South Goa’s landscapes, they bring comfort and convenience together."
                        link="/properties/apartment"
                    />

                    <PropertyCard
                        image="/Home/Villa.webp"
                        title="Luxury Villas"
                        description="Perfect for larger groups, our villas offer private pools, lush gardens, and luxurious interiors. Whether it’s a family reunion or a special celebration, our villas create memories that last a lifetime."
                        link="/properties/villa"
                    />
                </div>
            </section>

            {/* ------------------ CTA ------------------ */}
            <section className="bg-[#739EC9] text-white pb-10 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Plan Your Perfect Stay</h2>
                    <p className="mb-6 opacity-90">
                        Choose from our collection of apartments and villas to make your Goa vacation unforgettable. Comfort, style, and great locations await you.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div >
    );
};

export default Property;
