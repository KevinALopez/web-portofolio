import { Card } from "react-bootstrap";
import "./experience-item.css";

type IExperience = {
    position: string;
    company: string;
    companyLink: string;
    date: string;
    description: string;
};

type ExperienceItemProps = {
    experience: IExperience;
};

function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <Card className="p-4">
            <Card.Title className="text-primary">
                {experience.position + " - " + experience.company}
            </Card.Title>
            <Card.Link
                href={experience.companyLink}
                target="_blank"
                className="text-muted"
            >
                {experience.company}
            </Card.Link>
            <Card.Text className="text-muted mb-1">{experience.date}</Card.Text>
            <Card.Text className="text-muted">
                {experience.description}
            </Card.Text>
        </Card>
    );
}

export default ExperienceItem;
