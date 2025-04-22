import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { useEffect, useState } from "react";
import DarkModeIcon from "../icons/DarkModeIcon";
import LightModeIcon from "../icons/LightModeIcon";

type HeaderProps = {
    lang: string;
    setLang: (lang: "es" | "en") => void;
};

function Header({ lang, setLang }: HeaderProps) {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            setTheme("light");
        } else {
            document.body.classList.remove("light-mode");
            setTheme("dark");
        }
    }, []);

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("light-mode");
        const mode = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", mode);
        setTheme(mode);
    }

    return (
        <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="text-primary fw-bold">
                    Kevin Ayala
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-nav" />
                <Navbar.Collapse id="header-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#projects">
                            {lang === "es" ? "Proyectos" : "My Projects"}
                        </Nav.Link>
                        <Nav.Link href="#experience">
                            {lang === "es" ? "Experiencia" : "My Experience"}
                        </Nav.Link>
                        <Nav.Link href="#formacion">
                            {lang === "es" ? "Formación" : "My Studies"}
                        </Nav.Link>
                        <Nav.Link href="#about">
                            {lang === "es" ? "Acerca de Mí" : "About Me"}
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => setLang(lang === "es" ? "en" : "es")}
                            className="text-primary fw-bold"
                        >
                            {lang === "es" ? "EN" : "ES"}
                        </Nav.Link>
                        <Nav.Link onClick={toggleTheme}>
                            {theme === "dark" ? (
                                <DarkModeIcon className="mode-toggle" />
                            ) : (
                                <LightModeIcon className="mode-toggle" />
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
