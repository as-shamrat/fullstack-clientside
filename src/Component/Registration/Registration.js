import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "./../../Group 1329.png";
import allEvents from "./../../fullstack.json";

const Registration = () => {
  const { eventName } = useParams();
  console.log(eventName);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [regData, setRegData] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    eventName: eventName,
  });
  const handleRegistration = () => {
    console.log(regData);
    fetch("https://radiant-woodland-82751.herokuapp.com/addRegData", {
      method: "POST",
      body: JSON.stringify(regData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    const newRegData = { ...regData };
    newRegData[e.target.name] = e.target.value;
    setRegData(newRegData);
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <img src={logo} alt="" style={{ width: "20%", margin: "20px auto" }} />
      <Form
        style={{
          width: "50%",
          height: "auto",
          margin: "20px auto",
          border: "1px solid gray",
          padding: "25px",
        }}
      >
        <h4>Register as a Volunteer</h4>
        <Form.Control
          readOnly
          onChange={handleBlur}
          name="name"
          type="text"
          placeholder="Fullname"
          value={regData.name}
        />
        <Form.Control
          readOnly
          onChange={handleBlur}
          name="email"
          type="email"
          placeholder="email"
          value={regData.email}
        />
        <Form.Control
          onChange={handleBlur}
          name="date"
          type="date"
          placeholder="date"
        />
        <Form.Control
          onChange={handleBlur}
          name="description"
          type="text"
          placeholder="Description"
        />
        <Form.Control
          readOnly
          onChange={handleBlur}
          name="eventName"
          type="text"
          placeholder="Eventname"
          value={regData.eventName}
        />

        <Link to="/usersProject">
          <Button
            onClick={handleRegistration}
            variant="primary"
            size="lg"
            block
          >
            Registration
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Registration;
