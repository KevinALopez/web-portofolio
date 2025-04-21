import ProjectItem, { IProject } from "./project-item/ProjectItem";
import "./project-list.css";
import { motion } from "motion/react";
import projects from "./data/projects.json";

function ProjectList() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.4 }}
            id="projects"
            className="section container"
        >
            <h2 className="text-center">Mis Proyectos</h2>
            <div className="m-auto row g-4">
                {projects.map((project) => {
                    return (
                        <ProjectItem
                            key={project.id}
                            project={project as IProject}
                        />
                    );
                })}
            </div>
        </motion.section>
    );
}

export default ProjectList;
