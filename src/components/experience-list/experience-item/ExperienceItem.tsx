import "./experience-item.css";

function ExperienceItem() {
    return (
        <div className="card p-4">
            <h5 className="text-primary">
                Web Development Intern – CoolCompany Inc.
            </h5>
            <p className="text-muted mb-1">Jan 2024 – Mar 2024</p>
            <p className="text-muted">
                Worked on front-end components, contributed to live features,
                and learned the ins and outs of building production-grade apps
                in a team.
            </p>
        </div>
    );
}

export default ExperienceItem;
