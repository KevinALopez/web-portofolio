import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProjectList from "./components/project-list/ProjectList";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <ProjectList />
        </>
    );
}

export default App;
