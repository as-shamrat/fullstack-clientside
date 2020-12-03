import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../fullstack.json";
import SingleProject from "../SingleProject/SingleProject";

const Project = () => {
  return (
    <Row className="project">
      {data.map((project) => (
        <Link
          to={"/registration/" + project.eventName}
          style={{ color: "white" }}
        >
          <SingleProject
            project={project}
            key={project.eventName}
          ></SingleProject>
        </Link>
      ))}
    </Row>
  );
};

export default Project;
