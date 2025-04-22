import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { useState } from "react";
import DarkModeIcon from "../icons/DarkModeIcon";
import LightModeIcon from "../icons/LightModeIcon";

function Header() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

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
                        <Nav.Link href="#projects">Proyectos</Nav.Link>
                        <Nav.Link href="#experience">Experiencia</Nav.Link>
                        <Nav.Link href="#formacion">Formacion</Nav.Link>
                        <Nav.Link href="#about">Acerca de Mi</Nav.Link>
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
