import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import ForecastCard from './ForecastCard';

const API_URL =
    'https://api.weatherapi.com/v1/forecast.json?key=bab5a6ca4b82401ebc060500251909&q=Goa&days=7&aqi=no&alerts=no';

const Footer = () => {
    const [weather, setWeather] = useState(null);
    const [goaTime, setGoaTime] = useState('');

    // Fetch weather
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setWeather(data))
            .catch((err) => console.error('API fetch failed', err));
    }, []);

    // Goa live time
    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
            const timeString = new Intl.DateTimeFormat('en-IN', options).format(new Date());
            setGoaTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const current = weather?.current;
    const forecast = weather?.forecast?.forecastday?.slice(0, 5) || [];

    return (
        <footer className="bg-[#032446] text-white text-sm px-4 py-6">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

                {/* Column 1: About + Social */}
                <div className="flex-1 min-w-[200px]">
                    <h2 className="text-lg font-semibold mb-2">ApnaGoa Homestays</h2>
                    <p className="mb-4 text-sm leading-relaxed">
                        Discover serene beachfront villas and cozy apartments near South Goa's most beautiful beaches — Varca,
                        Colva, and Benaulim.
                    </p>
                    <h1 className='text-2xl font-bold'>Follow Us</h1>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="p-2 rounded-full bg-blue-600 hover:scale-110 transition"><FaFacebookF /></a>
                        <a href="#" className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition"><FaInstagram /></a>
                        <a href="#" className="p-2 rounded-full bg-sky-400 hover:scale-110 transition"><FaTwitter /></a>
                        <a href="#" className="p-2 rounded-full bg-red-500 hover:scale-110 transition"><FaYoutube /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex-1 min-w-[110px]">
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
                        <li><a href="/villas" className="hover:text-pink-400 transition">Villas</a></li>
                        <li><a href="/apartments" className="hover:text-orange-400 transition">Apartments</a></li>
                        <li><a href="/contact" className="hover:text-yellow-400 transition">Contact Us</a></li>
                    </ul>
                </div>


                {/* Column 3: Contact */}
                <div className="flex-1 min-w-[110px]">
                    <h2 className="text-lg font-semibold mb-2">Contact</h2>
                    <p className="mb-1">📍 South Goa, India</p>
                    <p className="mb-1">📞 +91 98765 43210</p>
                    <p>✉️ hello@apnagao.com</p>
                </div>

                {/* Column 4: Weather */}
                <div className="w-full md:flex-[1.5]">
                    <h2 className="text-lg font-semibold mb-3 text-center">GOA WEATHER</h2>

                    {weather ? (
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">

                            {/* Current Weather */}
                            <div className="flex flex-col justify-center items-center sm:items-start sm:w-1/3">
                                <img
                                    src={`https:${current.condition.icon}`}
                                    alt="weather"
                                    className="w-20 mb-1"
                                />
                                <p className="text-2xl font-bold">{current.temp_c}°C</p>
                                <p className="text-xs text-gray-300">{current.condition.text}</p>
                                <p className="text-md text-gray-400 mt-1">🕒 {goaTime}</p>
                            </div>

                            {/* Forecast List */}
                            <div className="w-full sm:w-2/3 space-y-2">
                                {forecast.map((day) => (
                                    <ForecastCard key={day.date} day={day} compact />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-400">Loading weather...</p>
                    )}
                </div>



            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-6 pt-4 border-t border-gray-600 text-xs">
                &copy; {new Date().getFullYear()} ApnaGoa Homestays. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
