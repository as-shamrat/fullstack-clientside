import React from "react";
import { Container } from "react-bootstrap";
import Navmenu from "../Nav/Navmenu";
import Project from "../Project/Project";

const Home = () => {
  return (
    <Container className="nav-bg">
      <Navmenu></Navmenu>
      <Project></Project>
    </Container>
  );
};

export default Home;
