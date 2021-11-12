import React from 'react'
import { Container, Image, Nav } from 'react-bootstrap'

function Profile() {
    return (
        <Container id="home" style={{height: "calc(100vh - 190px)"}}>
            <div className="text-center my-4">
                <Image className="profile-pic img-fluid" src="/profilePic.jpg" alt="Sagar Betkar" roundedCircle />
                <h1>Sagar Betkar</h1>
                <h3>Full Stack JavaScript Developer</h3>
                <Nav className="justify-content-center">
                  <Nav.Link href="https://www.linkedin.com/in/sagarbetkar/" target="_blank">
                    <i className="bi bi-linkedin fs-1 social-link"></i>
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/sagarbetkar" target="_blank">
                    <i className="bi bi-twitter fs-1 social-link"></i>
                  </Nav.Link>
                  <Nav.Link href="https://github.com/sagarbetkar" target="_blank">
                    <i className="bi bi-github fs-1 social-link"></i>
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/sagarbetkar/" target="_blank">
                    <i className="bi bi-instagram fs-1 social-link"></i>
                  </Nav.Link>
                </Nav>
            </div>
        </Container>
    )
}

export default Profile
