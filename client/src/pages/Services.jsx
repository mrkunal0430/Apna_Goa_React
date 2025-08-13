// src/pages/Service.jsx
import React from 'react';
import { FaUmbrellaBeach, FaShuttleVan, FaWifi, FaUtensils, FaRegSnowflake } from 'react-icons/fa';
import SwiperSlider from '../components/explore/SwiperSlider';

import Complimentary from '../Data/Service/Complimentary.json';
import Premium from '../Data/Service/Premium.json';

const Service = () => {
    return (
        <div>

            <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-yellow-50 via-white to-rose-100 text-gray-800">
                <h1 className="text-4xl font-bold text-center mb-12">What we have to offer</h1>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Complimentary Amenities</h4>
                    <div className='mt-5'> <SwiperSlider slidesData={Complimentary} type='services' ></SwiperSlider></div>
                </div>
                <div data-aos="fade-up">
                    <h4 className='text-2xl font-semibold'>Premium Services</h4>
                    <div className='mt-5'> <SwiperSlider slidesData={Premium} type='services' ></SwiperSlider></div>
                </div>
            </div>
        </div>
    );
};

export default Service;







{/* <div className="mt-2 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:bg-amber-50 text-center border border-yellow-200"
                    >
                        <div className="text-4xl text-orange-500 mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div> */}