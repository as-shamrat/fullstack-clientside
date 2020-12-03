import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { UserContext } from "../../App";
import allEvents from "./../../fullstack.json";
import "./ProjectOverview.css";
const ProjectOverview = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { eventName } = props.event;
  const handleDelete = props.handleDelete;
  let project = allEvents.find((evt) => evt.eventName === eventName);
  // const handleDelete = () => {
  //   fetch(
  //     `https://radiant-woodland-82751.herokuapp.com/deleteItem?eventname=${eventName}&email=${loggedInUser.email}`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.deletedCount));
  // };

  //   const filteredImage = filterdItem.picture;
  // console.log(props.event);
  return (
    <Col sm={5} className="project-overview">
      {project && (
        <div>
          <img
            style={{ width: "120px", height: "auto", borderRadius: "7px" }}
            src={project.picture}
            alt=""
          />
          <div style={{ position: "absolute", left: "150px", top: "12px" }}>
            <h4>{project.eventName}</h4>
            <h6>{props.event.date}</h6>
            <button
              onClick={() => handleDelete(eventName)}
              className="btn-cancel"
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </Col>
  );
};

export default ProjectOverview;
