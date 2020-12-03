import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import allEvents from "./../../fullstack.json";
import logo from "./../../Group 1329.png";

const UsersProject = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);

  // const getEventName = (newElement) => {
  //   for (let i = 0; i < allEvents.length; i++) {
  //     if (newElement.eventName === allEvents[i].eventName) {
  //       newElement.picture = allEvents[i].picture;
  //     }
  //   }
  //   return newElement;
  // };

  const [deletedCount, setDeletedCount] = useState(false);
  useEffect(() => {
    fetch(
      "https://radiant-woodland-82751.herokuapp.com/allEvents?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        // setEvents(data);
        // const newData = data.map((dt) => getEventName(dt));
        console.log(data);
        setEvents(data);
      });
  }, [deletedCount]);

  const handleDelete = (eventName) => {
    fetch(
      `https://radiant-woodland-82751.herokuapp.com/deleteItem?eventname=${eventName}&email=${loggedInUser.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          setDeletedCount(!deletedCount);
        }
        console.log(data.deletedCount);
      });
  };

  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#home">
          <img src={logo} className="navLogo" alt="" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="nav-text" href="/home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-text" href="#features">
            Donation
          </Nav.Link>
          <Nav.Link className="nav-text" href="#pricing">
            Events
          </Nav.Link>
          <Nav.Link className="nav-text" href="#pricing">
            Blog
          </Nav.Link>
          <Navbar.Text>
            <p style={{ fontWeight: "bolder", color: "black" }}>
              {loggedInUser.name}
            </p>
          </Navbar.Text>
        </Nav>
      </Navbar>
      <Row>
        {events.map((event) => (
          <ProjectOverview
            event={event}
            handleDelete={handleDelete}
          ></ProjectOverview>
        ))}
      </Row>
    </Container>
  );
};

export default UsersProject;
