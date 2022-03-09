import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { skills } from "../data";

function About() {
  return (
    <Container id="about" style={{ padding: "7rem 0" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h3>About</h3>
            <p>
              I am a full-stack developer. I&apos;ve spent four years developing
              responsive web applications and products. I specialize in
              JavaScript, React, Angular, Node.js, Express & MongoDB.
              <br />
              <br />
              Building and deploying web apps, pushing to GitHub, and obtaining
              code recommendations and evaluations from senior developers and
              coworkers have been the mainstays of my learning. I enjoy the
              daily challenges of web development, such as generating
              high-quality code, learning new technologies, and resolving
              complicated issues.
              <br />
              <br />
              Outside of work, I enjoyed cycling and watching animated series.
              I&apos;m not currently accepting freelance work, but I&apos;d love
              to meet for coffee and get to know you, so please don&apos;t
              hesitate to contact me.
            </p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <h3>Skills</h3>
            <div>
              {skills.map((s, i) => (
                <Row className="mb-2" key={i}>
                  <Col xs={3} style={{ textTransform: "capitalize" }}>
                    <b>{s.key}</b>
                  </Col>
                  <Col xs={9}>{s.value}</Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
