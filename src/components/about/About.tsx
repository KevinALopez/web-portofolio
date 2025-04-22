import { Col, Container, Image, Row } from "react-bootstrap";
import "./about.css";
import { motion } from "motion/react";
import profile from "../../assets/profile.jpg";

function About() {
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
            <h2 className="text-center">Acerca de Mi</h2>
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
                            Comence estudiando ingeniería electrica en la
                            universidad pero a lo largo del camino, inspirado
                            por ver a mi hermano trabajar, me adentre en el
                            mundo de la programacion y me encanto todo, desde la
                            planeacion para la solucion de un problema hasta la
                            implementacion, creo que el mejor trabajo se realiza
                            cuando amas lo que haces y a mi, me encanta la
                            tecnologia y la programacion.
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.section>
    );
}

export default About;
