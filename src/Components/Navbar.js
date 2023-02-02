import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://img.icons8.com/bubbles/512/motherboard.png"
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt=""
          />{" "}
          <b>Personal Portfolio</b>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>

          <Nav.Link href="/projects">Projects</Nav.Link>

          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
