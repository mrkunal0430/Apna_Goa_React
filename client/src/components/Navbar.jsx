import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Explore", path: "/explore" },
    { name: "Services", path: "/services" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-gradient-to-r from-pink-300 via-rose-200 to-orange-200 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/Logo/logo_apnagoa1.jpg"
                        alt="ApnaGoa Stays Logo"
                        className="h-10 w-auto rounded-md"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative">
                            <Link
                                to={link.path}
                                className={`text-lg font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? "text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-500"
                                    }`}
                            >
                                {link.name}
                            </Link>
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-indigo-600 rounded"
                                />
                            )}
                        </div>
                    ))}
                </nav>

                {/* WhatsApp Contact Button (desktop only) */}
                <div className="hidden md:block">
                    <a
                        href="https://wa.me/919876543210" // <- replace with your number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md rounded-b-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-2 text-lg font-medium transition-colors duration-300 ${location.pathname === link.path
                                ? "text-indigo-600"
                                : "text-gray-700 hover:text-indigo-500"
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* WhatsApp Button (mobile) */}
                    <a
                        href="https://wa.me/919876543210" // <- replace with your number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
