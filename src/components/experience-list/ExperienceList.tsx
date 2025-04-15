import ExperienceItem from "./experience-item/ExperienceItem";
import "./experience.css";

function ExperienceList() {
    return (
        <section id="experience" className="section container">
            <h2 className="text-center">Experience</h2>
            <ExperienceItem />
        </section>
    );
}

export default ExperienceList;
