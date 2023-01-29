import React from "react";
import TodoForm from "./TodoForm";
import Navbar from "../Navbar";
import { Container, Row, Card } from "react-bootstrap";
import TodoList from "../TodoList/TodoList";

function RenderTodoList() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setTodoList([...res.records]);
        setIsLoading(false);
      });
  }, []);
  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);
  // remove button
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };
  // addTodo function
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <Container className="">
      <Row className="mb-5">
        <Navbar />
      </Row>
      <Card className="bg-dark text-white text-center">
        <Card.Header>
          <h1>Todo List</h1>
        </Card.Header>
        <Card.Body>
          <TodoForm onAddTodo={addTodo} />

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RenderTodoList;
