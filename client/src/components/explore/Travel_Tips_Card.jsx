import React from 'react';
import { FaUtensils, FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Travel_Data from "../../Data/Explore/Travel_Tips_Recomendation.json";

const TravelTips_Recommendation = () => {
    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6 lg:p-10">
            {Travel_Data.map((item, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

                return (
                    <motion.div
                        ref={ref}
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Icon + Title */}
                        <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                                <FaUtensils className="text-2xl" />
                            </div>
                            <h2 className="ml-4 text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                                {item.title}
                            </h2>
                        </div>

                        {/* Descriptions */}
                        <div className="flex-1">
                            {item.description1 && (
                                <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                                    {item.description1}
                                </p>
                            )}
                            {item.description2 && (
                                <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                                    {item.description2}
                                </p>
                            )}
                            {item.description3 && (
                                <p className="text-gray-700 leading-relaxed mb-5 text-sm sm:text-base">
                                    {item.description3}
                                </p>
                            )}
                        </div>

                        {/* Note Box */}
                        {item.note && (
                            <div className="flex items-start bg-orange-50 border-l-4 border-orange-500 p-3 rounded-lg mt-auto">
                                <FaExclamationCircle className="text-orange-500 mt-1 text-lg flex-shrink-0" />
                                <p className="ml-2 text-xs sm:text-sm text-gray-800">
                                    {item.note}
                                </p>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TravelTips_Recommendation;
