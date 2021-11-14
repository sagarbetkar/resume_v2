import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image alt="logo" src="/logo.png" width="50" height="50" className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="/Sagar-Betkar-Resume.pdf" target="_blank">Resumé</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
