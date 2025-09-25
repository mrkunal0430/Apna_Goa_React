// src/components/PropertyCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PropertyCard = ({ image, title, description, link }) => {
    const [open, setOpen] = useState(false); // for mobile toggle

    return (
        <div
            className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            onClick={() => setOpen(!open)} // tap to open on mobile

        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Panel */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: open ? 0 : "100%" }} // mobile tap
                whileHover={{ y: 0 }} // desktop hover
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-6 flex flex-col gap-4"
            >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm md:text-base">{description}</p>
                <Link
                    to={link}
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition font-medium"
                >
                    Explore
                </Link>
            </motion.div>
        </div>
    );
};

export default PropertyCard;


