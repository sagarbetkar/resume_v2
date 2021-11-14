import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { projectData } from '../data'

function Projects() {
    return (
        <Container id="projects" style={{ backgroundColor: "#141414 !important", padding: "7rem 0"}} fluid>
            <Container>
                <h3 className="mb-4" style={{color: "#f2f2f2"}}>Personal Projects</h3>
                <Row xs={1} sm={2} md={4} className="my-5 g-4">
                    {projectData.map((p, index) => (
                        <Col key={index}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={p.image} />
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>{p.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href={p.githubRepo}  target="_blank">GitHub Repo</Card.Link>
                                    {p.liveUrl && <Card.Link href={p.liveUrl}  target="_blank">Live Demo</Card.Link>}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
