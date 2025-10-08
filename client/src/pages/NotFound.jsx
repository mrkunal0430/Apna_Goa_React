import { Link, useNavigate } from "react-router-dom";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/70 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 p-8 max-w-2xl mx-auto">
                <FaUmbrellaBeach className="text-7xl text-teal-600 mx-auto animate-bounce mb-4" />

                <h1 className="text-8xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                    Lost in Paradise? 🌴
                </h2>

                <p className="text-gray-600 mt-3 leading-relaxed">
                    Looks like you’ve wandered off the beach! The page you’re looking for
                    might have been moved, renamed, or is taking a sunset break in Goa.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold shadow-sm hover:bg-gray-100 transition duration-300"
                    >
                        ← Go Back
                    </button>

                    <Link
                        to="/"
                        className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-700 transition duration-300"
                    >
                        🏡 Back to Home
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-5 text-gray-500 text-sm">
                © {new Date().getFullYear()} ApnaGoa Homestays | Crafted with ❤️ in Goa
            </div>
        </div>
    );
}
