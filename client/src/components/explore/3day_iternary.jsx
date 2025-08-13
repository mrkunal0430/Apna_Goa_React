import React from "react";
import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Assuming you import your JSON data like this:
import Travel_Data from "../../Data/Explore/3Day_Iternary.json";

const TravelTips_Recommendation = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
            {Travel_Data.map((tip, index) => (
                <Card key={index} tip={tip} index={index} />
            ))}
        </div>
    );
};

const Card = ({ tip, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    // Fix typo keys by accessing them safely:
    const desc1 = tip.descriptiom1 || tip.description1 || "—";
    const desc2 = tip.description2 || "—";
    const desc3 = tip.description3 || "—";
    const desc4 = tip.description4 || "—";
    const desc5 = tip.description5 || "—";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
        >
            {/* Header */}
            <div className="flex items-center p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <h1 className="bg-white text-orange-600 w-12 h-12 flex items-center justify-center rounded-full shadow-md text-2xl text-bold">
                    {index + 1}
                </h1>
                <h2 className="ml-4 text-xl md:text-2xl font-bold">{tip.title}</h2>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3 text-gray-700">
                <p>•  {desc1}</p>
                <p>•  {desc2}</p>
                <p>•  {desc3}</p>
                <p>•  {desc4}</p>
                <p>•  {desc5}</p>
            </div>
        </motion.div>
    );
};

export default TravelTips_Recommendation;
