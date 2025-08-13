// src/pages/Explore.jsx
import PopularDestination from "../Data/Explore/PopularDestination.json";
import ThreeDay_iternity from "../Data/Explore/3Day_Iternary.json";
import Adventure_Activity from "../Data/Explore/AdventrueActivity.json";
import Cultural_Experience from "../Data/Explore/CulturalExperience.json";
import Local_Event from "../Data/Explore/LocalEvent_festival.json";
import Travel_tip from "../Data/Explore/Travel_Tips_Recomendation.json";

import React from 'react';
import SwiperSlider from "../components/SwiperSlider";



const Explore = () => {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* Banner Section */}
            <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="../Explore/explore_top.jpg"
                    alt="Explore top banner"
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
            <div className="px-4 sm:px-8 py-12 bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore South Goa</h2>

                <div>
                    <h3 className="text-2xl font-bold" >Popular Destination</h3>
                    <p className="" >Discover the most beautiful and captivating locations that South Goa has to offer, from pristine beaches to historical landmarks.</p>
                    <div className="w-auto h-auto ">
                        <SwiperSlider slidesData={PopularDestination} type="explore" ></SwiperSlider>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold" >Local Events & Festivals</h3>
                    <p className="" >Experience the vibrant culture of Goa through its colorful festivals and
                        celebrations that showcase local traditions and customs.</p>
                    <div className="w-auto h-auto ">
                        <SwiperSlider slidesData={Local_Event} type="explore" ></SwiperSlider>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold" >Adventure & Activities</h3>
                    <p className="" >Discover thrilling experiences and water sports that will make your South Goa
                        vacation memorable and exciting.</p>
                    <div>
                        <SwiperSlider slidesData={Adventure_Activity} type="explore" ></SwiperSlider>
                    </div>
                </div>


                <div>
                    <h3 className="text-2xl font-bold" >Cultural Experiences</h3>
                    <p className="" >Immerse yourself in the rich cultural heritage of South Goa through its
                        architecture, cuisine, art, and traditional performances.</p>
                    <div>
                        <SwiperSlider slidesData={Cultural_Experience} type="explore" ></SwiperSlider>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Explore;
