import { Card } from "react-bootstrap";
import "./project-item.css";
import ReactIcon from "../../icons/ReactIcon";
import TypescriptIcon from "../../icons/TypescriptIcon";
import TailwindCssIcon from "../../icons/TailwindCssIcon";
import AwsIcon from "../../icons/AwsIcon";
import GitHubIcon from "../../icons/GitHubIcon";

const icons = {
    react: <ReactIcon className="tech-icon" />,
    typescript: <TypescriptIcon className="tech-icon" />,
    tailwind: <TailwindCssIcon className="tech-icon" />,
    aws: <AwsIcon className="tech-icon" />,
    github: <GitHubIcon className="tech-icon" />,
};

type IconKey = keyof typeof icons;

export type IProject = {
    id: number;
    title: string;
    description: string;
    img: string;
    webLink: string;
    github: null | string;
    sourceCode: null | string;
    technologies: IconKey[];
};

type IProjectItemProps = {
    project: IProject;
    lang: "es" | "en";
};

function ProjectItem({ project, lang }: IProjectItemProps) {
    return (
        <Card className="col-md-4 p-0">
            <div className="position-relative card-cover">
                <Card.Img
                    variant="top"
                    src={project.img}
                    className="card-img"
                    alt={project.title}
                />
                <Card.Link
                    href={project.github || project.webLink}
                    target="_blank"
                    className="site-link btn btn-accent"
                >
                    {lang === "es" ? "Ver Proyecto" : "Go to Project"}
                </Card.Link>
            </div>
            <Card.Body className="card p-3 h-100">
                <Card.Title className="text-primary">
                    {project.title}
                </Card.Title>
                <Card.Text className="text-muted">
                    {project.description}
                </Card.Text>
                <ul className="icons p-0 m-0 d-flex">
                    {project.technologies.map((tech) => {
                        return (
                            <li className="d-inline-block" key={tech}>
                                {icons[tech]}
                            </li>
                        );
                    })}
                </ul>
                {project.sourceCode && (
                    <Card.Link
                        href={project.sourceCode}
                        className="github-code"
                        target="_blank"
                    >
                        <div>
                            {icons.github}{" "}
                            {lang === "es" ? "Ver Código" : "Source Code"}
                        </div>
                    </Card.Link>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectItem;
