import ProgressBar from "./progressBar";

//* Import SkillsData
import { percentageSkills } from "../data";

const Skills = () => {
    return (
        <section className="section">
            <div className="container mx-auto">
                <div className="bg-pink-200 flex flex-col justify-between items-center gap-y-12">
                    {percentageSkills.map((Skills, i) => (
                        <ProgressBar key={i} name={Skills.name} percentage={Skills.value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
