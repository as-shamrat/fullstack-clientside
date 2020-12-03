import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Navmenu.css";
import logo from "./../../Group 1329.png";

const Navmenu = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">
          <img src={logo} className="navLogo" alt="" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="nav-text" href="#home">
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
          <button className="nav-btn nav-btn-1">Register</button>
          <button className="nav-btn nav-btn-2">Register</button>
        </Nav>
      </Navbar>

      <h2 className="nav-header">I GROW BY HELPING PEOPE IN NEED</h2>
      <InputGroup className="mb-3 nav-search">
        <FormControl placeholder="search..." />
        <InputGroup.Append>
          <Button variant="primary">Seach</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Navmenu;
