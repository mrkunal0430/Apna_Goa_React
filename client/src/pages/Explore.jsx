// src/pages/Explore.jsx
import PopularDestination from "../Data/Explore/PopularDestination.json";
import ThreeDay_iternity from "../Data/Explore/3Day_Iternary.json";
import Adventure_Activity from "../Data/Explore/AdventrueActivity.json";
import Cultural_Experience from "../Data/Explore/CulturalExperience.json";
import Local_Event from "../Data/Explore/LocalEvent_festival.json";
import Travel_tip from "../Data/Explore/Travel_Tips_Recomendation.json";

import React from 'react';
import SwiperSlider from "../components/explore/SwiperSlider";
import TravelTips_Recommendation from "../components/explore/Travel_Tips_Card";
import ThreeDay_Day from "../components/explore/3day_iternary"
import { Helmet } from "react-helmet-async";


const Explore = () => {
    return (
        <div className="w-full min-h-screen ">

            <Helmet>
                <title>Explore Goa with ApnaGoa</title>
                <meta name="description" content="Discover the best attractions, beaches, and experiences in Goa with ApnaGoa." />
                <meta property="og:title" content="Explore Goa with ApnaGoa" />
                <meta property="og:description" content="Discover the best attractions, beaches, and experiences in Goa with ApnaGoa." />
                <meta property="og:image" content="https://apnagoa.com/Logo/og-image.jpg" />
                <link rel="canonical" href="https://apnagoa.com/explore" />
            </Helmet>

            {/* Banner Section */}
            <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="explore_top.jpg"
                    alt="Explore top banner"
                    loading='lazy'
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-sky-400 mb-4">
                        Your Another Home
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-400 to-yellow-400">
                        Welcome to Apna Goa
                    </h2>
                </div>
            </div>

            {/* Explore Grid Section */}
            <div className="px-4 sm:px-8 py-12 bg-gradient-to-tr from-orange-100 via-white-100 to-yellow-100">

                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore South Goa</h2>

                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold" >Popular Destination</h3>
                    <p className="py-4" >Discover the most beautiful and captivating locations that South Goa has to offer, from pristine beaches to historical landmarks.</p>
                    <div className="w-auto h-auto ">
                        <SwiperSlider slidesData={PopularDestination} type="explore" ></SwiperSlider>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold" >Local Events & Festivals</h3>
                    <p className="py-4" >Experience the vibrant culture of Goa through its colorful festivals and
                        celebrations that showcase local traditions and customs.</p>
                    <div className="w-auto h-auto ">
                        <SwiperSlider slidesData={Local_Event} type="explore" ></SwiperSlider>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold" >Adventure & Activities</h3>
                    <p className="py-4" >Discover thrilling experiences and water sports that will make your South Goa
                        vacation memorable and exciting.</p>
                    <div>
                        <SwiperSlider slidesData={Adventure_Activity} type="explore" ></SwiperSlider>
                    </div>
                </div>


                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold" >Cultural Experiences</h3>
                    <p className="py-4" >Immerse yourself in the rich cultural heritage of South Goa through its
                        architecture, cuisine, art, and traditional performances.</p>
                    <div>
                        <SwiperSlider slidesData={Cultural_Experience} type="explore" ></SwiperSlider>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">Travel Tips & Recommendations</h1>
                    <p className="pt-3">Make the most of your South Goa experience with these practical tips and insider recommendations.</p>
                    <div>
                        <TravelTips_Recommendation></TravelTips_Recommendation>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">Suggested 3-Day Itinerary</h1>
                    <div>
                        <ThreeDay_Day></ThreeDay_Day>
                    </div>
                </div>

            </div>

            <div className="travel-map p-6 bg-gradient-to-tr from-yellow-100 via-rose-100 to-orange-100">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
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
            </div>
        </div>
    );
};

export default Explore;
