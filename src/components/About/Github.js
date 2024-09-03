import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="fa-salu"
        blockSize={15}
        blockMargin={5}
        color="#4CAF50" // GitHub-like green color // This-website like blue color [color="#c084f5"]
        fontSize={16}
      />
    </Row>
  );
}

export default Github;