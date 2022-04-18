import React from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div className="">
            <Navbar className="p-2 fs-4" collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
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
                            {user ? (
                                <Nav.Link
                                    onClick={handleSignOut}
                                    eventKey={2}
                                    as={Link}
                                    to="/login"
                                >
                                    SignOut
                                </Nav.Link>
                            ) : (
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
