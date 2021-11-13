import React from 'react'
import { Card, Container } from 'react-bootstrap'

const expData = [
    {
        jobTitle: "Full Stack JavaScript Developer",
        companyName: "Knoxpo",
        Duration: "March 2019 - Present",
        workDescription: "Building Web Applications (Client-side & Server-side), APIs with HTML5, SCSS, React, Angular, Node.js, Express, MongoDB (MEAN & MERN Stack), GraphQL, Git, Jira, Testing (Jasmine & Mocha). Deployment on AWS & Google Cloud. Ownership to improve the development process with Pull requests, better folders and file structure and rules and tools. Close collaboration with clients, designers and dev for a better workflow."
    },
    {
        jobTitle: "Full Stack JavaScript Developer",
        companyName: "Freelance",
        Duration: "August 2018 - January 2019",
        workDescription: "Developed Web Applications & APIs using technologies such as HTML5, SCSS, Angular, Typescript, Node.js, MongoDB, Express (MEAN Stack), Github & deployed on AWS. Close collaboration with clients for a better workflow."
    },
    {
        jobTitle: "Software Developer",
        companyName: "tag8",
        Duration: "January 2018 - August 2018",
        workDescription: "Developed an in-house web application using technologies such as AngularJs, PHP (Slim framework), SQL, Github & deployed on AWS. Worked on restructuring the official website and other in-house projects."
    },
    {
        jobTitle: "Front End Developer",
        companyName: "STALKERSCODE PVT. LTD.",
        Duration: "May 2017 - December 2017",
        workDescription: "Developed responsive websites using the latest technologies such as HTML5, CSS3, Bootstrap & PHP. Interacting with clients and designers to deliver the best web experiences."
    }   
]

function Experience() {
    return (
        <Container className="py-4" id="experience">
            <h3 className="mb-4">Experience</h3>
            {expData.map((e, index) => (
                <Card className="mb-4" key={index}>
                    <Card.Body>
                        <Card.Title className="mb-0">{e.jobTitle}</Card.Title>
                        <Card.Text className="text-muted">{e.companyName}</Card.Text>
                        <Card.Text>{e.workDescription}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{e.Duration}</Card.Footer>
                </Card>
            ))}
        </Container>
    )
}

export default Experience
