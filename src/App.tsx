import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProjectList from "./components/project-list/ProjectList";
import ExperienceList from "./components/experience-list/ExperienceList";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import StudiesList from "./components/studies-list/StudiesList";
import { useEffect, useState } from "react";

function App() {
    const [lang, setLang] = useState<"es" | "en">("es");

    useEffect(() => {
        const lang = window.navigator.language.slice(0, 2).toLowerCase(); // en | es

        if (!(lang === "es" || lang === "en")) return;

        setLang(lang);
    }, []);

    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <Hero lang={lang} />
            <ProjectList lang={lang} />
            <ExperienceList lang={lang} />
            <StudiesList lang={lang} />
            <About lang={lang} />
            <Footer />
        </>
    );
}

export default App;
