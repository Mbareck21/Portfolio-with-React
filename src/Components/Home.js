import React from "react";
import { Container, Card } from "react-bootstrap";
import Header from "./Header";
import EducationExperienceSkills from "./Ed-EX-SK";
function Home() {
  return (
    <Container className="container">
      <Header />
      <EducationExperienceSkills />
      <Card>
        <Card.Header>
          <h4 className="text-center">
            <b>WORK EXPERIENCE</b>
          </h4>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <h5>Legal Services Manager</h5>
            <span className="d-flex justify-content-between">
              <h6>Canopy NWA</h6>
              <h6>2020 - Present</h6>
            </span>
          </Card.Title>
          <Card.Text>
            <li>Developed and implemented current legal service program.</li>{" "}
            <li>
              Increased efficiency of the Legal Service Program by over 150%,
              serving more than 200 client
            </li>
            <li>
              Learned and Adopted best practices in the and gained tremendous
              program management skills
            </li>
            <li>
              Established and maintained professional partnerships with local
              attorney's offices, medical providers, libraries and related{" "}
            </li>
          </Card.Text>
        </Card.Body>
        <span className="d-flex justify-content-between">
          {" "}
          <hr style={{ width: "5%" }} /> <hr style={{ width: "5%" }} />
        </span>
        <Card.Body>
          <Card.Title>
            <h5>Language Services Contractor</h5>
            <span className="d-flex justify-content-between">
              <h6>Cyracom International</h6>
              <h6>2019 - 2020</h6>
            </span>
          </Card.Title>
          <Card.Text>
            <li>
              Utilized English, French, and Arabic skills to bridge
              communication gaps between clients and service
            </li>
            <li>
              providers in the medical, legal, financial, and social areas by
              translating and interpreting for over 200 clients.
            </li>
          </Card.Text>
        </Card.Body>
        <span className="d-flex justify-content-between">
          {" "}
          <hr style={{ width: "5%" }} /> <hr style={{ width: "5%" }} />
        </span>
        <Card.Body>
          <Card.Title>
            <h5>Attaché de Presse</h5>
            <span className="d-flex justify-content-between">
              <h6>Mauritanian Government</h6>
              <h6>2011 - 2018</h6>
            </span>
          </Card.Title>
          <Card.Text>
            <li>
              Under the supervision of the president’s chief of staff, I
              performed a myriad of tasks, involving the planning of official
              communication strategies, campaigning, as well as public
              information and media relations.
            </li>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
