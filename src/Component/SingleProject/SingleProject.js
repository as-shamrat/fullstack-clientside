import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleProject = (props) => {
  //   console.log(props);
  const { picture, eventName } = props.project;
  console.log(picture, eventName);
  return (
    <div>
      <Col sm={3} style={{ margin: "10px auto", borderRadius: "10px" }}>
        <Card style={{ width: "200px", border: "none" }}>
          <Card.Img
            variant="top"
            src={picture}
            style={{ maxHeight: "170px" }}
          />
          <Card.Body style={{ background: "red", textAlign: "center" }}>
            <Card.Title>{eventName}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleProject;
