import React, { useState } from "react";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const properties = [
    {
        title: "Our Villa",
        images: [
            { src: "https://your-villa-image1.jpg" },
            { src: "https://your-villa-image2.jpg" },
        ],
        description: "A peaceful luxury villa surrounded by nature."
    },
    {
        title: "Our Apartment",
        images: [
            { src: "https://your-apartment-image1.jpg" },
            { src: "https://your-apartment-image2.jpg" },
        ],
        description: "A modern apartment with elegant interiors."
    }
];

const PropertyShowcase = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);

    const openLightbox = (images) => {
        setLightboxSlides(images);
        setLightboxOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2">
            {properties.map((property, idx) => (
                <motion.div
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openLightbox(property.images)}
                >
                    <div className="relative group">
                        <img
                            src={property.images[0].src}
                            alt={property.title}
                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">View Gallery</span>
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-2xl font-bold text-gray-800">{property.title}</h3>
                        <p className="mt-2 text-gray-600">{property.description}</p>
                    </div>
                </motion.div>
            ))}

            {/* Lightbox Component */}
            {lightboxOpen && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={lightboxSlides}
                />
            )}
        </div>
    );
};

export default PropertyShowcase;
