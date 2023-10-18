import React from "react";

//* Import motion
import { motion } from "framer-motion";

const Copyright = () => {
    return (
        <div className="text-center bg-dark text-greyLight py-6 border-t border-[#2b2b2b] ">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    delay: 0.2,
                }}
                viewport={{ once: false, amount: 0 }}
                className="container mx-auto"
            >
                © Copyright 2023&ensp;
                <span className="font-semibold text-white">&ensp;The Zyphyrus Tattoo </span>&ensp;Recreating by
                <a className="text-green-400 font-semibold" href="https://github.com/Barbatossifiruz">
                    &ensp;BarbatosSifiruz
                </a>
            </motion.div>
        </div>
    );
};

export default Copyright;
