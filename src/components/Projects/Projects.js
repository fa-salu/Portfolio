import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import littlelove from "../../Assets/Projects/LittleLove.png"
import doque from "../../Assets/Projects/doque.png"

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
              imgPath={littlelove}
              isBlog={false}
              title="LittleLove - E-Commerce Baby Shop"
              description="LittleLove is a feature-rich e-commerce platform for baby products, front-end built with React.js to deliver a seamless and engaging user experience. It includes a secure shopping cart, real-time inventory updates, and a streamlined checkout process. Perfect for parents looking for a convenient and delightful shopping experience."
              ghLink="https://github.com/fa-salu/Baby-Shop-E-Commerse-client"
              demoLink="https://baby-shop-e-commerse-client.vercel.app"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doque}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/fa-salu/project-doque"
              demoLink="https://doque.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
