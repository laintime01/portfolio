import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import pkams from "../../Assets/Projects/pkams.png"
import infoweb from "../../Assets/Projects/infoweb.png"

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
              imgPath={pkams}
              isBlog={false}
              title="PKAM System"
              description="The project knowledge achievement management system is a platform that helps users track and manage their knowledge and achievements related to project management in a concise and efficient manner."
              ghLink="https://github.com/laintime01/dms-front"
              demoLink="http://47.100.91.158:12121/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infoweb}
              isBlog={false}
              title="Internal Information Platform"
              description="An internal information platform for college teachers and students. The platform provides a variety of functions such as information release, information search, and information management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Newcomer Navigator"
              description="Newcomers Canada Navigator is an all-encompassing website designed to provide comprehensive guidance and information to newcomers in Canada. It serves as a one-stop resource hub, offering essential details and resources on housing, transportation, education, food, and other essential services. "
              ghLink="https://github.com/laintime01"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
