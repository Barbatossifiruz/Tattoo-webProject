import React, { useState, useEffect } from "react";

//* UseView Hook
import { useInView } from "react-intersection-observer";

//* React Circular
import { CircularProgressbar } from "react-circular-progressbar";

//* React circular styles
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  //! Destructure useInView Hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  //? Percentage
  const percentageEmpty = {
    fullBody: 0,
    irezumi: 0,
    oldSchool: 0,
    realism: 0,
  };

  //? Skills percentage (%) tattoo state
  const [percentage, setPercentage] = useState(percentageEmpty);

  //? Percentage change
  const changePercentage = (category, percentage) => {
    setPercentage((prevPercentage) => ({
      ...prevPercentage,
      [category]: percentage,
    }));
  };

  //? Changing percentage
  useEffect(() => {
    const { fullBody, irezumi, oldSchool, realism } = percentage;

    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          changePercentage("fullBody", fullBody + 1);
        }
        if (irezumi < 95) {
          changePercentage("irezumi", irezumi + 1);
        }
        if (oldSchool < 70) {
          changePercentage("oldSchool", oldSchool + 1);
        }
        if (realism < 75) {
          changePercentage("realism", realism + 1);
        }
      }, 50);
    } else {
      setPercentage(percentageEmpty);
    }
  }, [inView, percentage]);

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
    <section ref={ref} className="section">
      <div className="container mx-auto">
        <div className="bg-pink-200 flex flex-col justify-between items-center gap-y-12">
          {/* Circular ítem full body tattoo*/}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <div>
              <CircularProgressbar
                strokeWidth={1}
                value={percentage.fullBody}
                styles={styles}
                text={`${percentage.fullBody}%`}
              />
              {/* text */}
              <div className="uppercase font-light tracking-[1.2px] text-center">
                Full Body Tattoo
              </div>
            </div>
          </div>
          {/* Circular ítem irezumi tattoo*/}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <div>
              <CircularProgressbar
                strokeWidth={1}
                value={percentage.irezumi}
                styles={styles}
                text={`${percentage.irezumi}%`}
              />
              {/* text */}
              <div className="uppercase font-light tracking-[1.2px] text-center">
                Irezumi Tattoo
              </div>
            </div>
          </div>
          {/* Circular ítem Old school Tattoo */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <div>
              <CircularProgressbar
                strokeWidth={1}
                value={percentage.oldSchool}
                styles={styles}
                text={`${percentage.oldSchool}%`}
              />
              {/* text */}
              <div className="uppercase font-light tracking-[1.2px] text-center">
                Old School Tattoo
              </div>
            </div>
          </div>
          {/* Circular ítem Realism Tattoo  */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <div>
              <CircularProgressbar
                strokeWidth={1}
                value={percentage.realism}
                styles={styles}
                text={`${percentage.realism}%`}
              />
              {/* text */}
              <div className="uppercase font-light tracking-[1.2px] text-center">
                Realism Tattoo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
