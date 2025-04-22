import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import "./footer.css";

function Footer() {
    return (
        <div className="container-fluid border-top">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-4 container">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-muted">Kevin Ayala</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a
                            href="https://github.com/KevinALopez"
                            target="_blank"
                            aria-label="Github"
                        >
                            <GitHubIcon className="icon" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a
                            href="https://www.linkedin.com/in/kayalalopez"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="icon" />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
