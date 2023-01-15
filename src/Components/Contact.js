import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Accordion,
  ListGroup,
  Card,
  Row,
  Container,
} from "react-bootstrap";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [yourmsg, setYourmsg] = useState();
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email using the mailto: protocol
    setYourmsg(
      <Card style={{ width: "" }} className="mx-auto mt-2">
        <Card.Header>Your Message:</Card.Header>
        <Card.Header>
          <Card.Body>
            <Card.Title className="text-center ">{name}</Card.Title>
            <Card.Subtitle className="text-left ">{email}</Card.Subtitle>
            <Card.Text>{message}</Card.Text>
          </Card.Body>
        </Card.Header>
      </Card>
    );
    formRef.current.reset();
  };
  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setYourmsg();
  };

  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-between my-5">
        <Card className="my-5">
          <Card.Header className="">
            <h5>Get in Touch</h5>
          </Card.Header>
          <Form ref={formRef} className="p-3 bg-secondary mt-3">
            <Form.Group className="mb-3">
              <Form.Label variant="light">Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label className="mt-3">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>{" "}
            <Button onClick={handleReset}>Reset</Button>
          </Form>
        </Card>

        <Card className="">
          <Accordion>
            <Accordion.Header>
              <h5>Click to see more </h5>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                <Card.Title>LEMINE MBARECK</Card.Title>
              </Card.Body>

              <ListGroup className="list-group-flush" href="">
                <ListGroup.Item>
                  <img
                    src="https://img.icons8.com/bubbles/40/github.png"
                    alt=""
                  />
                  <a href="https://github.com/Mbareck21">Find me on GitHub</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img
                    src="https://img.icons8.com/bubbles/40/apple-mail.png"
                    alt=""
                  />
                  <a href="mailto:missara.lamine@gmail.com">Send me an email</a>
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion>
        </Card>

        {yourmsg}
      </Row>
      <Footer />
    </Container>
  );
}

export default Contact;
