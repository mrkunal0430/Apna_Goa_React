import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const foodItems = [
    {
        id: 1,
        title: "Goan Seafood Thali",
        img: "/Home/Food_Drink/food1.webp",
        desc: "A flavorful platter of Goan fish curry, rice, fried fish, and coconut-based delicacies served with love.",
    },
    {
        id: 2,
        title: "Local Beach Cocktails",
        img: "/Home/Food_Drink/drink.webp",
        desc: "Refreshing tropical cocktails and mocktails made with local ingredients — perfect for a beach sunset.",
    },
    {
        id: 3,
        title: "Traditional Goan Breakfast",
        img: "/Home/Food_Drink/food2.webp",
        desc: "Start your day with Poee bread, Goan sausages, omelette, and a cup of aromatic South Indian coffee.",
    },
    {
        id: 4,
        title: "Fusion Coastal Cuisine",
        img: "/Home/Food_Drink/food3.webp",
        desc: "Where Goan spices meet international recipes — a modern twist on the coastal charm.",
    },
];

export default function FoodAndDrinks() {
    return (
        <section className="w-full bg-gradient-to-br from-orange-50 to-yellow-100 min-h-screen py-16 px-6">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-amber-800 mb-6">
                    Flavors of <span className="text-orange-600">ApnaGoa</span>
                </h1>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    Experience authentic Goan hospitality through our curated selection of
                    food and drinks — blending local culture with modern taste. Every
                    flavor tells a story of the sunshine state.
                </p>
            </motion.div>

            {/* Swiper Gallery */}
            <div className="max-w-6xl mx-auto mt-14">
                <Swiper
                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pt-20"
                >
                    {foodItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto mt-20 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                    Experience the Taste of Goa
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-10">
                    From beach shacks to fine dining, every bite and sip at ApnaGoa is
                    crafted to give you a genuine local experience — whether you’re a
                    foodie, a cocktail lover, or someone who just enjoys a good meal by
                    the sea.
                </p>

                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://wa.me/917011915055?text=Hi!%20I%20want%20to%20know%20more%20about%20ApnaGoa%20food%20and%20dining%20options"
                    target="_blank"
                    className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-orange-700 transition-all"
                >
                    Contact for Reservations
                </motion.a>
            </motion.div>
        </section>
    );
}
