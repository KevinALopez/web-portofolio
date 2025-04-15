import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProjectList from "./components/project-list/ProjectList";
import ExperienceList from "./components/experience-list/ExperienceList";
import About from "./components/about/About";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <ProjectList />
            <ExperienceList />
            <About />
        </>
    );
}

export default App;
