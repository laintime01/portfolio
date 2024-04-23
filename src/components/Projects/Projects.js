import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pkams from "../../Assets/Projects/pkams.png";
import infoweb from "../../Assets/Projects/infoweb.png";
import newinca from "../../Assets/Projects/newinca.png";
import loyeco from "../../Assets/Projects/loyeco.png";
import yunliu from "../../Assets/Projects/yunliu.png";

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
              imgPath={newinca}
              isBlog={false}
              title="Newcomer Navigator"
              description="Newcomers Canada Navigator is an all-encompassing website designed to provide comprehensive guidance and information to newcomers in Canada."
              demoLink="http://3.17.140.37/en/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loyeco}
              isBlog={false}
              title="Loyeco system"
              description="A comprehensive practice management system designed specifically for wellness practitioners including massage therapists and acupuncturists."
              demoLink="http://loyeco.com:12121/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yunliu}
              isBlog={false}
              title="Yunliu's Personal Campaign Website"
              description="Yunliu's personal campaign website for nomination candidate of Conservative Party of Canada Aurora-Oak Ridges-Richmond Hill."
              demoLink="http://yunliu.ca/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infoweb}
              isBlog={false}
              title="Internal Information Platform"
              description="An internal information platform for college teachers and students. "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pkams}
              isBlog={false}
              title="PKAM System"
              description="The project knowledge achievement management system is a platform that helps users track and manage their knowledge and achievements related to project management in a concise and efficient manner."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
