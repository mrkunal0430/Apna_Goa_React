import React, { useState } from "react";
import { Helmet } from '@vuer-ai/react-helmet-async';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
    };

    return (
        <div>
            {/* SEO */}
            <Helmet>
                <title>Contact Us | ApnaGoa Homestays</title>
                <meta
                    name="description"
                    content="Get in touch with ApnaGoa Homestays in South Goa. Contact us for villa bookings, holiday apartments, and personalized stay experiences."
                />
                <link rel="canonical" href="https://apnagoa.com/contact" />
                {/* Open Graph */}
                <meta property="og:title" content="Contact ApnaGoa Homestays" />
                <meta
                    property="og:description"
                    content="Plan your stay in South Goa. Reach out to ApnaGoa for bookings and inquiries."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://apnagoa.com/contact" />
            </Helmet>
            <div className="flex flex-col items-center justify-center text-center space-y-6 py-4 px-6 bg-[#739EC9] text-white">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                    Contact Us
                </h1>
                <p className="max-w-5xl text-lg leading-relaxed">
                    We’d love to hear from you! At <span className="font-semibold">ApnaGoa Homestays</span>, your comfort is our priority.
                    Whether you’re planning a vacation, need help with bookings, or have questions about our villas and apartments
                    in South Goa, we’re just a message away. Reach out via phone, WhatsApp, or email, and we’ll be happy to assist you.
                </p>
            </div>

            {/* Contact Section */}
            <div className="min-h-screen bg-[#739EC9] text-white flex items-center justify-center px-6 py-12">

                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <div className=" relative">
                        <div className="">
                            <img
                                src="/india-map.webp"
                                alt="Map"
                                className=" "
                            />
                            <div className="  absolute 
                                bottom-[15%] left-[19%] sm:bottom-[18%] sm:left-[22%] 
                                md:bottom-[34%] md:left-[19%] 
                                lg:bottom-[20%] lg:left-[19%] 
                                -translate-x-1/2 -translate-y-1/2
                            ">
                                <div className="bg-gray-900 text-xs px-2 py-1 rounded shadow-md">
                                    We are here
                                </div>
                                <div className="w-3 h-3 rounded-full bg-red-500 mx-auto"></div>
                                <div className="h-16 w-0.5 bg-red-500 mx-auto"></div>

                            </div>
                        </div>
                        <div className="absolute top-0 right-1 sm:right-1 md:right-5">
                            <div className="space-y-2 text-black">
                                <p>📩 apnagoa@gmail.com</p>
                                <p>📞 +91 12345 67890</p>
                                <p>🛠 support@apnagoa.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block mb-1 text-gray-400">Full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Sher Singh"
                                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block mb-1 text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="apnagoa@gmail.com"
                                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Mobile No */}
                            <div>
                                <label className="block mb-1 text-gray-400">Mobile No</label>
                                <input
                                    type="number"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    placeholder="1234567890"
                                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <label className="block mb-1 text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message here"
                                    rows="4"
                                    className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Google Maps */}
            <div className="travel-map p-6 bg-[#739EC9]">
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

                <div className="mt-6 text-gray-700 max-w-4xl mx-auto text-justify border-2 rounded-4xl border-amber-500 p-6" >
                    <h2 className="text-xl font-bold mb-2">Varca, South Goa, India</h2>
                    <p className="">The property is well developed, gated community, with 24/7 security personnels deployed and we expect guest to follow a good civic behaviour with neighbours and must try to respect each other's privacy and not play loud music post 11 pm midnight and avoid nuisance.

                        Our place is well connected via all modes including taxis and public transport, Fatrade Four Point , Near St. RoqueChapel on Ramada Caravella road is the landmark to reach our place

                        Our place is well connected via all modes including taxis and public transport, Fatrade Four Point , Near St. RoqueChapel on Ramada Caravella road is the landmark to reach our place</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
