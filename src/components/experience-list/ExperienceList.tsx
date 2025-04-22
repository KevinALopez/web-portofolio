import ExperienceItem from "./experience-item/ExperienceItem";
import "./experience.css";
import { motion } from "motion/react";
import experiences from "./data/experiences.json";

function ExperienceList() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.4 }}
            id="experience"
            className="section container"
        >
            <h2 className="text-center">Mi Experiencia</h2>
            <div className="m-auto row g-4">
                {experiences.map((experience) => {
                    return (
                        <ExperienceItem
                            key={experience.id}
                            experience={experience}
                        />
                    );
                })}
            </div>
        </motion.section>
    );
}

export default ExperienceList;
