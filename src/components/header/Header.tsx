import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

function toggleMode() {
    const body = document.body;
    body.classList.toggle("light-mode");
    const mode = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", mode);
}

function Header() {
    return (
        <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="text-primary fw-bold">
                    Kevin Ayala
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="header-navbar-nav" />
                <Navbar.Collapse id="header-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#link">Experience</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link" onClick={toggleMode}>
                            🌓
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
