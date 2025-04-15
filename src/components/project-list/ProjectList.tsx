import ProjectItem from "./project-item/ProjectItem";
import "./project-list.css";

function ProjectList() {
    return (
        <section className="section container">
            <h2 className="text-center">Mis Proyectos</h2>
            <div className="row g-4">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </section>
    );
}

export default ProjectList;
