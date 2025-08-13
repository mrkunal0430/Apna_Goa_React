// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-rose-200 via-orange-100 to-yellow-300 text-gray-800 pt-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
                {/* About */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">ApnaGoa Homestays</h2>
                    <p className="text-sm leading-relaxed">
                        Discover serene beachfront villas and cozy apartments near South Goa's most beautiful beaches — Varca, Colva, and Benaulim.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="/"
                                className="text-gray-700 hover:text-green-600 hover:underline underline-offset-4 font-medium transition-all duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/villas"
                                className="text-gray-700 hover:text-pink-600 hover:underline underline-offset-4 font-medium transition-all duration-300"
                            >
                                Villas
                            </a>
                        </li>
                        <li>
                            <a
                                href="/apartments"
                                className="text-gray-700 hover:text-orange-500 hover:underline underline-offset-4 font-medium transition-all duration-300"
                            >
                                Apartments
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-gray-700 hover:text-yellow-600 hover:underline underline-offset-4 font-medium transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>

                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <p className="text-sm mb-2">📍 South Goa, India</p>
                    <p className="text-sm mb-2">📞 +91 98765 43210</p>
                    <p className="text-sm">✉️ hello@apnagao.com</p>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        {/* Facebook */}
                        <a
                            href="#"
                            className="p-2 rounded-full bg-blue-600 text-white text-xl hover:scale-110 transition-transform duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-xl hover:scale-110 transition-transform duration-300"
                        >
                            <FaInstagram />
                        </a>

                        {/* Twitter */}
                        <a
                            href="#"
                            className="p-2 rounded-full bg-sky-400 text-white text-xl hover:scale-110 transition-transform duration-300"
                        >
                            <FaTwitter />
                        </a>

                        {/* YouTube */}
                        <a
                            href="#"
                            className="p-2 rounded-full bg-red-500 text-white text-xl hover:scale-110 transition-transform duration-300"
                        >
                            <FaYoutube />
                        </a>
                    </div>


                </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 text-center text-sm text-gray-500 pb-6">
                &copy; {new Date().getFullYear()} ApnaGoa Homestays. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
