import { motion } from "motion/react";
import "./studies-list.css";
import studies from "./data/studies.json";
import StudiesItem, { IStudy } from "./studies-item/StudiesItem";

type StudiesKey = keyof typeof studies;

type IStudiesListProps = {
    lang: StudiesKey;
};

function StudiesList({ lang }: IStudiesListProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.1 }}
            id="formacion"
            className="section container"
        >
            <h2 className="text-center">
                {lang === "es" ? "Mi Formacion" : "My Studies"}
            </h2>
            <div className="m-auto row g-4">
                {studies[lang].map((study) => {
                    return (
                        <StudiesItem key={study.id} study={study as IStudy} />
                    );
                })}
            </div>
        </motion.section>
    );
}

export default StudiesList;
