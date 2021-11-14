import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
    return (
        <Container id="about" style={{padding: "7rem 0"}}>
            <Row>
                <Col md={6}>
                    <h3>About</h3>
                    <p>
                    I currently am working as full stack developer at Knoxpo. I have 4 years of experience in building responsive web applications & products. I specialize in JavaScript, React, Angular, Node.js, Express & MongoDB.
                    <br /><br />
                    Most of my learning has been through building and deploying web apps, pushing to GitHub and getting code tips & reviews from senior developers & colleagues. I love the daily challenges of web development: writing quality code, learning new technologies, and solving complex problems. 
                    <br /><br />
                    Outside of work I loved cycling & watching animes. Currently I am not accepting freelance work, but I&apos;d love to get coffee and get to know you, so don’t hesitate to get in touch.
                    </p>
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Skills</h3>
                    <ul>
                        <li>Primary Experience:</li>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>RESTful APIs</li>
                            <li>Git/GitHub</li>
                        </ul>
                        <br />
                        <li>Secondary Experience:</li>
                        <ul>
                            <li>Typescript</li>
                            <li>GraphQL</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Google Cloud Platform</li>
                            <li>PHP</li>
                        </ul>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About
