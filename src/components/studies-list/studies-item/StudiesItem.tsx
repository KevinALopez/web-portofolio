import { Card, Image } from "react-bootstrap";
import "./studies-item.css";
import HtmlIcon from "../../icons/HtmlIcon";
import CssIcon from "../../icons/CssIcon";
import JavascriptIcon from "../../icons/JavascriptIcon";
import AngularIcon from "../../icons/AngularIcon";
import GitIcon from "../../icons/GitIcon";
import BootstrapIcon from "../../icons/BootstrapIcon";
import MySqlIcon from "../../icons/MySqlIcon";
import MongoIcon from "../../icons/MongoIcon";
import ExpressIcon from "../../icons/ExpressIcon";
import NodeJsIcon from "../../icons/NodeJsIcon";
import JavaIcon from "../../icons/JavaIcon";

const icons = {
    html: <HtmlIcon className="study-icon" />,
    css: <CssIcon className="study-icon" />,
    javascript: <JavascriptIcon className="study-icon" />,
    angular: <AngularIcon className="study-icon" />,
    git: <GitIcon className="study-icon" />,
    bootstrap: <BootstrapIcon className="study-icon" />,
    mysql: <MySqlIcon className="study-icon" />,
    mongodb: <MongoIcon className="study-icon" />,
    node: <NodeJsIcon className="study-icon" />,
    express: <ExpressIcon className="study-icon" />,
    java: <JavaIcon className="study-icon" />,
};

type IconKey = keyof typeof icons;

export type IStudy = {
    id: number;
    title: string;
    institute: string;
    link: string;
    date: string;
    description: string;
    technologies: IconKey[] | null;
    badge: string | null;
};

type StudiesItemProps = {
    study: IStudy;
};

function StudiesItem({ study }: StudiesItemProps) {
    return (
        <>
            <Card className="p-4 gap-1 ">
                <Card.Title className="text-primary">{study.title}</Card.Title>
                <Card.Subtitle className="text-secondary">
                    <Card.Link
                        href={study.link}
                        target="_blank"
                        className="text-secondary"
                    >
                        {study.institute}
                    </Card.Link>
                </Card.Subtitle>
                <Card.Text className="text-muted mb-1">{study.date}</Card.Text>
                <Card.Text className="text-muted">
                    {study.description}
                </Card.Text>
                <ul className="studies-icons p-0 m-0 flex">
                    {study.technologies &&
                        study.technologies.map((tech) => {
                            return (
                                <li className="d-inline-block p-1" key={tech}>
                                    {icons[tech]}
                                </li>
                            );
                        })}
                    {study.badge && (
                        <Image src={study.badge} width={100} height={100} />
                    )}
                </ul>
            </Card>
        </>
    );
}

export default StudiesItem;
