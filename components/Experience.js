import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { expData } from '../data'

function Experience() {
    return (
        <Container id="experience" style={{ backgroundColor: "#f8f8f9 !important", padding: "7rem 0"}} fluid>
           <Container>
            <h3 className="mb-5" style={{color: "#000"}}>Experience</h3>
                {expData.map((e, index) => (
                    <Card className="mb-4 card-shadow" key={index}>
                        <Card.Body>
                            <Card.Title className="mb-0">{e.jobTitle}</Card.Title>
                            <Card.Text className="text-muted">{e.companyName}</Card.Text>
                            <Card.Text>
                                <ul>
                                    {e.workDescription.map((wd, i) => (
                                        <li key={i}>{wd}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">{e.Duration}</Card.Footer>
                    </Card>
                ))}
           </Container>
        </Container>
    )
}

export default Experience
