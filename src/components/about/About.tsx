import { Col, Container, Image, Row } from "react-bootstrap";
import "./about.css";
import { motion } from "motion/react";
import profile from "../../assets/profile.jpg";

type IAboutProps = {
    lang: "es" | "en";
};

function About({ lang }: IAboutProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.2 }}
            id="about"
            className="section container"
        >
            <h2 className="text-center">
                {lang === "es" ? "Acerca de Mi" : "About Me"}
            </h2>
            <Container className="about-text">
                <Row>
                    <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
                        <Image
                            src={profile}
                            width={250}
                            height={250}
                            roundedCircle
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="text-muted">
                            {lang === "es"
                                ? "Soy un desarrollador full-stack con preferencia por el desarrollo backend, aunque también cuento con sólidas habilidades en front-end para dar vida a proyectos completos. Disfruto construir APIs robustas con Node.js y Express, gestionar datos con MongoDB y SQL, y trabajar con herramientas en la nube como AWS. Al mismo tiempo, tengo experiencia creando interfaces responsivas y amigables con React y Tailwind. Me apasiona la arquitectura limpia, el aprendizaje continuo y desarrollar tecnología que aporte soluciones reales."
                                : "I’m a full-stack developer who leans towards backend development, but with strong front-end skills to bring full projects to life. I enjoy building robust APIs with Node.js and Express, managing data with MongoDB and SQL, and working with cloud tools like AWS. At the same time, I have experience creating responsive, user-friendly interfaces with React and Tailwind. I’m passionate about clean architecture, continuous learning, and building meaningful tech that solves real problems."}
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.section>
    );
}

export default About;
