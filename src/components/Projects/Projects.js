import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import littlelove from "../../Assets/Projects/LittleLove.png";
import doque from "../../Assets/Projects/doque.png";
import universal from "../../Assets/Projects/universal.png";

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
              title="Doque - Task management and project planning tool"
              description="DOQUE is my task management application built with Next.js, TypeScript, and Tailwind CSS. It features real-time collaboration, an intuitive user interface, and seamless task organization, making team productivity easier and more efficient, This project features a fully responsive design, ensuring optimal viewing on all devices."
              ghLink="https://github.com/fa-salu/project-doque"
              demoLink="https://doque.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universal}
              isBlog={false}
              title="Universal - Spoken English Live Project"
              description="Universal is a live project designed to provide an engaging platform for spoken English learners. Built with static HTML, JavaScript, and styled using Tailwind CSS, this project delivers a clean and responsive design. The platform showcases an intuitive interface for learners and is hosted at universalmanjeri.com for seamless accessibility."
              ghLink="https://github.com/fa-salu" // Replace with actual repo link if available
              demoLink="https://universalmanjeri.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
