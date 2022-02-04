import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { skills } from '../data'

function About() {
    return (
        <Container id="about" style={{padding: "7rem 0"}}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>About</h3>
                        <p>
                        I am a full-stack developer. I&apos;ve spent four years developing responsive web applications and products. I specialize in JavaScript, React, Angular, Node.js, Express & MongoDB. 
                        <br /><br />
                        Building and deploying web apps, pushing to GitHub, and obtaining code recommendations and evaluations from senior developers and coworkers have been the mainstays of my learning. I enjoy the daily challenges of web development, such as generating high-quality code, learning new technologies, and resolving complicated issues.  
                        <br /><br />
                        Outside of work, I enjoyed cycling and watching animated series. I&apos;m not currently accepting freelance work, but I&apos;d love to meet for coffee and get to know you, so please don&apos;t hesitate to contact me.
                        </p>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <h3>Skills</h3>
                        <div>
                            {skills.map((s, i) => (
                                <Row className="mb-2" key={i}>
                                    <Col xs={3} style={{textTransform: "capitalize"}}><b>{s.key}</b></Col>
                                    <Col xs={9}>{s.value}</Col>
                                </Row>
                            ))}
                        </div>
                        {/* <div>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="75" height="75"/ >
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-plain.svg" alt="angular" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" width="75" height="75" />
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg" alt="mysql" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" alt="graphql" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg" alt="socketio" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-plain.svg" alt="redis" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" alt="aws" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-plain.svg" alt="googlecloud" width="75" height="75"/>
                            <Image className="p-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg" alt="docker" width="75" height="75"/>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About
