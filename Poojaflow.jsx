import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import { assets, cardsData } from "../assets/assets";
import Flowcards from './Flowcards';

const Poojaflow = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-19 bg-gray-100 mt-32">
            <div className="flex flex-wrap w-full justify-between">
                <div className="flex flex-col flex-1 ml-4">
                    <Title
                        align="left"
                        title="Your Pooja, Step by Step"
                        subTitle="Welcome to the official booking portal of Pandit Ji, your trusted Vedic expert. Whether it’s Griha Pravesh, Satyanarayan Katha, Navgrah Shanti, or any special Puja, we make the process seamless from selection to confirmation. Experience devotion with ease and authenticity, as we guide you through every step of the way. Trust us to bring you closer to divine blessings with a smooth, effortless, and meaningful journey."
                    />
                </div>

                {/* 👇 Animated Havan Image */}
                <motion.div
                    className="flex flex-1 justify-center"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: 'spring',
                            stiffness: 120,
                            damping: 10,
                        },
                    }}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <img
                        src={assets.havan}
                        alt="Pooja Flow Image"
                        className="mx-7 max-w-full h-90"
                    />
                </motion.div>
            </div>

            <div className="w-full mt-12">
                <Flowcards cardsData={cardsData} />
            </div>
        </div>
    );
};

export default Poojaflow;
