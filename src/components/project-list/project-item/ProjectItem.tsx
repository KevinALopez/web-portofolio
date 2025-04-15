import "./project-item.css";

function ProjectItem() {
    return (
        <div className="col-md-4">
            <div className="card p-3 h-100">
                <h5 className="text-primary">Project One</h5>
                <p className="text-muted">
                    A sleek landing page built with Bootstrap and custom
                    animations.
                </p>
            </div>
        </div>
    );
}

export default ProjectItem;
