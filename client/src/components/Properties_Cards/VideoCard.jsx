import React, { useState, useRef } from "react";
import { motion } from "framer-motion";


function VideoCard({ title, desc, video, thumbnail }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                if (playing) {
                    videoRef.current.pause();
                    setPlaying(false);
                } else {
                    videoRef.current.play();
                    setPlaying(true);
                }
            }}
        >
            {/* Thumbnail fallback */}
            <img
                src={thumbnail}
                alt={title}
                className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"
                    }`}
                loading="lazy"
            />

            {/* Video */}
            <video
                ref={videoRef}
                src={video}
                muted
                playsInline
                loop
                preload="none"
                className="w-full h-64 object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold drop-shadow">{title}</h2>
                <p className="text-sm text-gray-200 mt-1">{desc}</p>
            </div>

            {/* Play/Pause Indicator */}
            <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2 text-white text-xs">
                {playing ? "⏸ Pause" : "▶ Play"}
            </div>
        </motion.div>
    );
}
export default VideoCard;