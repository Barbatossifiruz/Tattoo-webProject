import React, { useState, useEffect } from "react";

//* UseView Hook
import { useInView } from "react-intersection-observer";

//* React Circular
import { CircularProgressbar } from "react-circular-progressbar";

//* React circular styles
import "react-circular-progressbar/dist/styles.css";

//* import Motion
import { motion } from "framer-motion";

//* import fade in
import { fadeIn } from "../variants";

const Skills = () => {
    // //! Destructure useInView Hook
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    //! Full body (%) tattoo state
    const [fullBody, setFullBody] = useState(0);
    //! irezumi  (%) tattoo state
    const [irezumi, setIrezumi] = useState(0);
    //! old School (%) tattoo state
    const [oldSchool, setOldSchool] = useState(0);
    //! Realism (%) tattoo state
    const [realism, setRealism] = useState(0);

    // useEffect(() => {
    //     if (inView) {
    //         setTimeout(() => {
    //             //* FullBody - line (90%)
    //             setFullBody((prevFullBody) => (prevFullBody < 90 ? prevFullBody + 1 : prevFullBody));
    //             //* Irezumi - line (95%)
    //             setIrezumi((prevIrezumi) => (prevIrezumi < 95 ? prevIrezumi + 1 : prevIrezumi));
    //             //* OldSchool - line (70%)
    //             setOldSchool((prevOldSchool) => (prevOldSchool < 70 ? prevOldSchool + 1 : prevOldSchool));
    //             //* Realism - line (80%)
    //             setRealism((prevRealism) => (prevRealism < 80 ? prevRealism + 1 : prevRealism));
    //         }, 50);
    //     } else {
    //         setFullBody(0);
    //         setIrezumi(0);
    //         setOldSchool(0);
    //         setRealism(0);
    //     }
    // }, [inView, fullBody, irezumi, oldSchool, realism]);

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                if (fullBody < 90) {
                    setFullBody(fullBody + 1);
                }
                if (irezumi < 95) {
                    setIrezumi(irezumi + 1);
                }
                if (oldSchool < 70) {
                    setOldSchool(oldSchool + 1);
                }
                if (realism < 75) {
                    setRealism(realism + 1);
                }
            }, 50);
        } else {
            setFullBody(0);
            setIrezumi(0);
            setOldSchool(0);
            setRealism(0);
        }
    }, [inView, fullBody, irezumi, oldSchool, realism]);

    //! Circular progressbar styles
    const styles = {
        path: {
            stroke: "#111111",
        },
        trail: {
            stroke: "#eeeeee",
        },
        text: {
            fill: "#111111",
            fontSize: "24px",
        },
    };

    return (
        <section ref={ref} className="section">
            <div className="container mx-auto">
                <div className="bg-pink-200 flex flex-col justify-between items-center gap-y-12">
                    {/* Circular ítem full body tattoo*/}
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <div>
                            <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`} />
                            {/* text */}
                            <div className="uppercase font-light tracking-[1.2px] text-center">Full Body Tattoo</div>
                        </div>
                    </div>
                    {/* Circular ítem irezumi tattoo*/}
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <div>
                            <CircularProgressbar strokeWidth={1} value={irezumi} styles={styles} text={`${irezumi}%`} />
                            {/* text */}
                            <div className="uppercase font-light tracking-[1.2px] text-center">Irezumi Tattoo</div>
                        </div>
                    </div>
                    {/* Circular ítem Old school Tattoo */}
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <div>
                            <CircularProgressbar strokeWidth={1} value={oldSchool} styles={styles} text={`${oldSchool}%`} />
                            {/* text */}
                            <div className="uppercase font-light tracking-[1.2px] text-center">Old School Tattoo</div>
                        </div>
                    </div>
                    {/* Circular ítem Realism Tattoo  */}
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <div>
                            <CircularProgressbar strokeWidth={1} value={realism} styles={styles} text={`${realism}%`} />
                            {/* text */}
                            <div className="uppercase font-light tracking-[1.2px] text-center">Realism Tattoo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
