import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/Purina.png";
import bitsOfCode from "../../Assets/Projects/Memory.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Purina"
              description="Project 1 for web, decided to copy the original page of Purina.com."
              ghLink="https://gonzalo-web-repo.web.app/purina/"
              demoLink="https://gonzalo-web-repo.web.app/purina/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Memory Game"
              description="Created a little memory game to help myself improve in web development skills."
              ghLink="https://gonzalo-web-repo.web.app/memory/"
              demoLink="https://gonzalo-web-repo.web.app/memory/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lab 9 calculator"
              description="Created a calculator to be used on the web."
              ghLink="https://github.com/GonzaloSantizo"
              demoLink="https://github.com/GonzaloSantizo"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
