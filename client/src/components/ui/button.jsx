// src/components/ui/Button.jsx
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
    return (
        <button
            {...props}
            className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition rounded-lg group ${className}`}
        >
            {/* Background animation */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 border-2 border-green-500 rounded-lg"></span>

            {/* Button Text */}
            <span className="relative z-10">{children}</span>
        </button>
    );
};
