import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 text-gray-800 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h1
                    className="text-4xl md:text-5xl font-bold text-center mb-10"
                    data-aos="fade-down"
                >
                    About ApnaGoa Homestays
                </h1>

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-14" data-aos="fade-up">
                    <img
                        src="/Pics/bg.jpg"
                        alt="ApnaGoa Property"
                        className="w-full md:w-1/2 rounded-xl shadow-xl object-cover"
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
    );
};

export default About;
