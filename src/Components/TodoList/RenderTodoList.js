import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import { Container, Row, Card } from "react-bootstrap";
import TodoList from "../TodoList/TodoList";
function RenderTodoList() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  function addTodo(newTodo) {
    console.log("New todo:", newTodo.fields.Title);

    if (!newTodo.fields.Title || /^\s*$/.test(newTodo.fields.Title)) {
      return;
    }

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: newTodo.fields }),
      }
    )
      .then((response) => response.json())

      .then((res) => {
        setTodoList([...todoList, newTodo]);
      });
  }

  useEffect(() => {
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
      .then((result) => {
        console.log(result.records);
        setTodoList([...result.records]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);

  function editTodo(updatedTodo) {
    if (!updatedTodo.fields.Title || /^\s*$/.test(updatedTodo.fields.Title)) {
      return;
    }
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...updatedTodo };
      }
      return todo;
    });

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${updatedTodo.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: updatedTodo.fields }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("Todo Item Updated:", updatedTodo.fields.Title);
        setTodoList(updatedTodoList);
      });
  }

  const completeTodo = (id) => {
    let updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id);
        fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${todo.id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                ...todo.fields,
                IsComplete: !todo.fields.IsComplete,
              },
            }),
          }
        )
          .then((response) => response.json())
          .then(() => {
            setTodoList(updatedTodos);
          });
        todo.fields.IsComplete = !todo.fields.IsComplete;
        console.log("Todo Status updated to:", todo.fields.IsComplete);
      }
      return todo;
    });
  };

  const removeTodo = (id) => {
    console.log(id);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        const newTodoList = todoList.filter((todo) => id !== todo.id);
        setTodoList(newTodoList);
      });
  };

  return (
    <Container>
      <Card className="bg-dark text-white text-center w-50 mx-auto d-flex justify-content-center">
        <Card.Header>
          <h1>Todo List</h1>
        </Card.Header>
        <Card.Body>
          <Row className="d-flex justify-content-center">
            <TodoForm onAddTodo={addTodo} />
          </Row>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Row>
              <TodoList
                todoList={todoList}
                onRemoveTodo={removeTodo}
                onEditTodo={editTodo}
                completeTodo={completeTodo}
              />
            </Row>
          )}
        </Card.Body>
      </Card>
      <Row className="mb-0" style={{ height: "35vh" }}></Row>
    </Container>
  );
}

export default RenderTodoList;
