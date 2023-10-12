/* eslint-disable react-hooks/rules-of-hooks */
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
//* React circular styles
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ name, percentage }) => {
    //! Destructure useInView Hook
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const [currentPercentage, setCurrentPercentage] = useState(0);

    //? Changing percentage
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                if (currentPercentage < percentage) {
                    setCurrentPercentage(currentPercentage + 1);
                }
            }, 50);
        } else {
            setCurrentPercentage(0);
        }
    }, [inView, currentPercentage]);

    //! Circular progressbar styles
    const styles = {
        path: {
            stroke: "#111",
        },
        trail: {
            stroke: "#eee",
        },
        text: {
            fill: "#111",
            fontSize: "24px",
        },
    };

    return (
        <div ref={ref} className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <div>
                <CircularProgressbar strokeWidth={1} value={currentPercentage} styles={styles} text={`${currentPercentage}%`} />
                <div className="uppercase font-light tracking-[1.2px] text-center">{name}</div>
            </div>
        </div>
    );
};

export default ProgressBar;
