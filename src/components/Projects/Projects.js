import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import animal from "../../Assets/Projects/animal.png";
import nlp from "../../Assets/Projects/nlp.png";
import books from "../../Assets/Projects/books.png"
import data from "../../Assets/Projects/data.png";

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
              imgPath={animal}
              isBlog={false}
              title="Animal Image Classifier"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""// TODO
              demoLink=""//TODO
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Solution Towards a data storage system for SDLC of IoT applications,"
              description="An storage solution  for IoT based applications. analysing cloud based storage is effective or edge or fog."
              ghLink=""// TODO
              demoLink=""//TODO
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="Keyword Extraction "
              description="keyword extraction from a given document using RAKE algorithm, NLP,Python."
              ghLink=""     //TODO
              demoLink=""    //TODO          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Ecommerce Book Store"
              description="An Ecommerce platform for purchasing books."
              ghLink="" // TODO
              demoLink=""//TODO
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
