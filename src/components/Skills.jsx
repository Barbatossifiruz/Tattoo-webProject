//* Import progressBar
import ProgressBar from "./progressBar";

//* import motion
import { motion } from "framer-motion";

//* Import fade in
import { fadeIn } from "../variants";

//* Import SkillsData
import { percentageSkills } from "../data";

const Skills = () => {
    return (
        <motion.section
            className="section font-primary"
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row  justify-between items-center gap-y-12">
                    {percentageSkills.map((Skills, i) => (
                        <ProgressBar key={i} name={Skills.name} percentage={Skills.value} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
