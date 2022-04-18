import React from "react";
import { Container, Nav, Navbar,} from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home">
                        <img src={""} height="40px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blog">
                                Blog
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
