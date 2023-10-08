import React from "react";

// import hero Data
import { heroData } from "../data";

// import motion
// import { motion } from "framer-motion";

// import fadeIn
// import { fadeIn } from "../variants";

const Hero = () => {
    // Destructure hero data
    const { title, subtitle, btnIcon, btnText } = heroData;

    return (
        <>
            <section className="bg-hero bg-cover bg-center min-h-[40vh] lg-h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
                <div className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end">
                    <div
                        className="text-white text-center
                     lg:text-left lg:max-w-[640px]"
                    >
                        {/* TEXT */}
                        <h1 className="h1">{title}</h1>
                        <p>{subtitle}</p>
                        <div>
                            <button>
                                {btnText} <div>{btnIcon}</div>
                            </button>
                        </div>
                    </div>
                    {/* outline Text */}
                    <div className=""></div>
                </div>
            </section>
        </>
    );
};

export default Hero;
