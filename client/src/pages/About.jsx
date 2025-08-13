import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div >

            <div className="h-[calc(100vh-64px)]">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                    alt="Beach view"
                    loading='lazy'
                />
            </div>


            <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 text-gray-800 px-6 py-12" >
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
                            src="/Pics/bg.jpg"
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

            <div className="travel-map p-6">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
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
            </div>
        </div>
    );
};

export default About;
