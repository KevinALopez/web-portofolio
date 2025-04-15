import "./hero.css";
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <section className="hero text-center section" data-aos="fade-up">
            <h1>
                <ReactTyped
                    strings={["¡Hola! , Soy Kevin Ayala"]}
                    typeSpeed={50}
                />
            </h1>
            <p className="text-muted mt-3">
                Full Stack developer, apasionado por la tecnologia, solucion de
                problemas y con una pasion por aprender cosas nuevas.
                <br />
                Estoy buscando nuevas oportunidades por lo que no dudes en
                contactar conmigo si me perfil te interesa.
            </p>
            <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1zc7oceSEZKox3OckBa7cxTNEakA3LK1j&export=download"
                className="btn btn-accent mt-4 me-2 px-4 py-2 bg-transparent border border-1 cv"
            >
                CV
            </a>
            <a href="#projects" className="btn btn-accent mt-4 px-4 py-2">
                Mis Proyectos
            </a>
        </section>
    );
}

export default Hero;
