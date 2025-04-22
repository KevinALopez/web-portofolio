import "./hero.css";
import { ReactTyped } from "react-typed";
import hero from "../../assets/hero-gibli-image-close.png";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import content from "./data/content.json";

type contentKey = keyof typeof content;

type IHeroProps = {
    lang: contentKey;
};

function Hero({ lang }: IHeroProps) {
    return (
        <section
            id="home"
            className="hero text-center section"
            data-aos="fade-up"
        >
            <img src={hero} alt="Gibli style cover" className="profile-image" />
            <h1>
                <ReactTyped
                    strings={[content[lang].heroTitle]}
                    typeSpeed={50}
                />
            </h1>
            <p className="text-muted mt-3">
                {content[lang].heroIntro1}
                <br />
                {content[lang].heroIntro2}
            </p>
            <a
                href={content[lang].cvLink}
                className="btn btn-accent mt-4 me-2 px-4 py-2 bg-transparent border border-1 cv"
            >
                CV
            </a>
            <a href="#projects" className="btn btn-accent mt-4 px-4 py-2">
                {content[lang].cta}
            </a>
            <motion.div
                className="mt-5 flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ChevronDown size={32} className="text-muted" />
            </motion.div>
        </section>
    );
}

export default Hero;
