import React, { useState, useEffect } from "react";
import { Card, Toast, Container, Row, Col, Button } from "react-bootstrap/";
import LegalCard from "./LegalSubCard";
import TodoCard from "./TodoList/TodoCard";

const avatar = "https://img.icons8.com/bubbles/30/github.png";
function Projects() {
  const [gitProjects, setGitProjects] = useState([]);
  const [isloading, setIsloading] = useState(true);
  // fetching Github Repositories
  useEffect(() => {
    fetch("https://api.github.com/users/Mbareck21/repos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res[2]);
        setGitProjects(res);
        setIsloading(false);
      });
  }, []);
  return (
    <Container className="container mt-5">
      <Row className="p-0 ">
        <Card className="p-0 mt-5">
          <Card.Header>
            <h2>My GitHub Repos!</h2>
            <p className="text-justify">
              This component displays some of my GitHub repositories by fetching
              data from the <strong>GitHub API</strong> using{" "}
              <strong>fetch</strong> method, it uses React Hooks, specifically{" "}
              <b>useState</b> and <b>useEffect</b> to manage the component's
              state and fetch the data from the API respectively. It uses{" "}
              <b>React Bootstrap</b> library to create a visually appealing
              layout and display the data in a <b>Toast</b> component. It also
              uses a <b>ternary operator</b> inside the <b>map</b> function to
              check if the repository's description is not null before rendering
              the repository, this way I render only the repositories that I
              wrote a description for. And it also uses a ternary operator to
              check if the component is still loading data from the API or not.
            </p>

            <Row className="p-2 rounded">
              {!isloading ? (
                <>
                  {gitProjects.map((project) => {
                    return project.description != null ? (
                      <Col key={project.id} className="col-md-4">
                        <Toast className="mx-auto p-0  mb-3 ">
                          <Toast.Header closeButton={false} className="">
                            <img src={avatar} className="rounded me-2" alt="" />
                            <strong className="me-auto">{project.name}</strong>
                            <small>{project.created_at.substring(0, 10)}</small>
                          </Toast.Header>
                          <Toast.Body className="text-success">
                            {project.description}{" "}
                            <Button size="sm" variant="outline-secondary">
                              <a
                                href={project.html_url}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                                rel="noreferrer"
                              >
                                See it on GitHub
                              </a>
                            </Button>
                          </Toast.Body>
                        </Toast>
                      </Col>
                    ) : null;
                  })}
                </>
              ) : (
                "data fetching is loading.."
              )}
            </Row>
          </Card.Header>
        </Card>
      </Row>
      <Row className="mt-1 p-0">
        <Col sm={3} className="p-0 me-1 mb-1">
          <TodoCard />
        </Col>
        <Col className="p-0">
          <LegalCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
