import "./about.css";
import { motion } from "motion/react";

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
            className="section container text-center"
        >
            <h2>About Me</h2>
            <p className="text-muted">
                I’m a developer who believes in clean code, pixel precision, and
                projects that don’t just work — they *feel* right. Whether it’s
                front-end finesse or back-end muscle, I love building stuff that
                makes people go “whoa.”
            </p>
        </motion.section>
    );
}

export default About;
