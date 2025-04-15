import ExperienceItem from "./experience-item/ExperienceItem";
import "./experience.css";
import { motion } from "motion/react";

function ExperienceList() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            id="experience"
            className="section container"
        >
            <h2 className="text-center">Experience</h2>
            <ExperienceItem />
        </motion.section>
    );
}

export default ExperienceList;
