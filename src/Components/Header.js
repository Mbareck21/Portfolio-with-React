import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

function Header() {
  return (
    <Card
      className="mx-auto"
      bg="secondary"
      style={{ width: "100%", margin: "3em", color: "#FFF" }}
    >
      <Card.Body>
        <h1 className="text-center">LEMINE MBARECK</h1>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col>
            <h4>PROFILE</h4>
            <hr />
            <p className="text-justify">
            Welcome to my portfolio! As a passionate and dedicated front-end developer, I am eager to take on new challenges and expand my skillset. I am constantly striving to improve and stay up-to-date with the latest technologies in web and software development. My ultimate goal is to secure an entry-level role in the industry and grow my career in this exciting field. Thank you for taking the time to visit my profile. Please feel free to browse my projects and learn more about my experience and capabilities.
            </p>
          </Col>

          <Col lg="auto" className="mx-auto">
            <Image
              roundedCircle="true"
              src="https://img.icons8.com/bubbles/512/guest-male.png"
              style={{ width: "15vw" }}
            />
          </Col>
          <Col lg="auto">
            <span className="d-flex justify-content align-items-center">
              <img
                src="https://img.icons8.com/ios/512/phone.png"
                alt=""
                style={{ width: "20px", height: "20px", margin: ".5em" }}
              />
              <p>479-397-2044</p>
            </span>
            <span className="d-flex justify-content align-items-center">
              <img
                src="https://img.icons8.com/ios/512/mail.png"
                alt=""
                style={{ width: "20px", height: "20px", margin: ".5em" }}
              />
              <p>missara.lamine@</p>
            </span>
            <span className="d-flex justify-content align-items-center">
              <img
                src="https://img.icons8.com/ios/512/marker--v1.png"
                alt=""
                style={{ width: "20px", height: "20px", margin: ".5em" }}
              />
              <p>Fayetteville, AR</p>
            </span>
            <span className="d-flex justify-content-left">
              <img
                src="https://img.icons8.com/ios/512/linkedin-2.png"
                alt=""
                style={{ width: "20px", height: "20px", margin: ".5em" }}
              />
              <p> Linkedin</p>
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Header;
