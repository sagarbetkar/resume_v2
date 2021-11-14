import React from 'react'
import { Container, Image, Nav } from 'react-bootstrap'

function Profile() {
    return (
        <Container id="home" style={{ backgroundColor: "#141414 !important"}} fluid>
            <div className="text-center py-5">
                <Image className="profile-pic img-fluid" src="/profilePic.jpg" alt="Sagar Betkar" roundedCircle  style={{marginTop: "80px"}}/>
                <h1 style={{color: "#f2f2f2"}}>Hello, I&apos;m <span style={{color: "#00ADB5"}}>Sagar Betkar</span>.</h1>
                <h3 style={{color: "#f2f2f2"}}>I&apos;m a Full Stack Developer.</h3>
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
