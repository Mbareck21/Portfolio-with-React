import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import InputWithLabel from "./InputWithLabel";
function TodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };
  return (
    <Form
      className="d w-50 mb-2 mx-auto"
      onSubmit={handleAddTodo}
    >
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      ></InputWithLabel>
      <Button variant="outline-warning" size="sm" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default TodoForm;
