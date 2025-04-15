import ProjectItem from "./project-item/ProjectItem";
import "./project-list.css";
import { motion } from "motion/react";

function ProjectList() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            id="projects"
            className="section container"
        >
            <h2 className="text-center">Mis Proyectos</h2>
            <div className="row g-4">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </motion.section>
    );
}

export default ProjectList;
