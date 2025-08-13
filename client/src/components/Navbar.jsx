import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        <header className="bg-gradient-to-r from-orange-400 to-pink-300 shadow-md sticky top-0 z-50">

            {/* Another Colour Combination for navbar ->  bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-200 */}

            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                    ApnaGoa<span className="text-gray-800">Stays</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.path} className="relative">
                            <Link
                                to={link.path}
                                className={`text-lg font-medium ${location.pathname === link.path
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

                <button  ></button>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-2 text-lg font-medium ${location.pathname === link.path
                                ? "text-indigo-600"
                                : "text-gray-700 hover:text-indigo-500"
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
