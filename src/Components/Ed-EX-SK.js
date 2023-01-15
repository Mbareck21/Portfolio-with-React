import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

function App() {
  const [education, setEducation] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [skills, setSkills] = React.useState("");

  const handleEdClick = () => {
    setEducation(
      <div className="justify-content-center">
        <h5 className="text-center">
          University of Arkansas, School of Journalism and Strategic Media
        </h5>
        <h5 className="text-center">2017 - 2019</h5>
        <p>
          <li>Earned a Master of Arts in Media Studies</li>
          <li>
            Utilized the R programming language for data scraping and text
            mining techniques
          </li>
          <li>
            Taught myself R for language processing, data manipulation, and
            visualization.
          </li>
        </p>
      </div>
    );
    education && setEducation("");
  };
  const handleExClick = () => {
    setExperience(
      <div>
        <p>
          <li>
            Self-taught and motivated individual with experience in web
            development and programming languages such as HTML, CSS, JavaScript,
            Node.js, and React.
          </li>
          <li>
            Strong understanding of IT/software troubleshooting and problem
            solving skills.
          </li>
          <li>
            Experience in using tools such as MS Office Suite, Google Suites,
            and PostgreSQL for database management.
          </li>
          <li>
            Strong experience in customer service and interpersonal skills, with
            experience in working in diverse roles such as case manager,
            language services contractor, and attaché de presse.
          </li>
        </p>
      </div>
    );
    experience && setExperience("");
  };
  const handleSkClick = () => {
    setSkills(
      <div>
        <p>
          <li>
            Proficient in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> for web
            development.
          </li>
          <li>
            Familiarity with <b>Node.js</b>, <b>React</b> and{" "}
            <b>React-Bootstrap</b> for building web applications.
          </li>
          <li>
            Experience in using <b>MS Office Suite</b> and <b>Google Suites</b>{" "}
            for productivity and collaboration.
          </li>
          <li>
            Knowledge of <b>SQL</b> for database.
          </li>
          <li>
            Understanding of <b>IT</b>, software <b>troubleshooting</b> and
            problem solving.
          </li>
          <li>
            Familiarity with <b>R</b> for <b>Web Scraping</b>and language
            processing.
          </li>
          <li>
            Familiarity with <b>MongoDB</b> for data storage and persistence in
            web applications.
          </li>
          <li>
            Experience in using <b>Git</b> and <b>GitHub</b> for version control
            and code management.
          </li>
          <li>
            Experience in deploying web applications on <b>Heroku</b>.
          </li>
          <li>
            Proficient in <b>French</b>, <b>English</b> and <b>Arabic</b> for
            communication.
          </li>
          <li>Ability to work in diverse roles and environments</li>
        </p>
      </div>
    );
    skills && setSkills("");
  };
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        margin: "2em",
        justifyContent: "center",
      }}
    >
      <Col>
        <Accordion onClick={handleEdClick} style={{ width: "fit-content" }}>
          <Accordion.Button>
            <b>EDUCATION</b>
          </Accordion.Button>
          <Accordion.Body
            style={{
              display: "flex",
              width: "70.9vw",
              justifyContent: "center",
            }}
          >
            {education}
          </Accordion.Body>
        </Accordion>
      </Col>
      <Col>
        <Accordion onClick={handleExClick} style={{ width: "fit-content" }}>
          <Accordion.Button>
            <b>EXPERTISE</b>
          </Accordion.Button>
          <Accordion.Body
            style={{
              display: "flex",
              width: "70.9vw",
            }}
          >
            {experience}
          </Accordion.Body>
        </Accordion>
      </Col>
      <Col>
        <Accordion onClick={handleSkClick} style={{ width: "fit-content" }}>
          <Accordion.Button>
            <b>SKILLS</b>
          </Accordion.Button>
          <Accordion.Body
            style={{
              display: "flex",
              width: "70.9vw",
            }}
          >
            {skills}
          </Accordion.Body>
        </Accordion>
      </Col>
    </Row>
  );
}

export default App;
