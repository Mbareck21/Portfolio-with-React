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

  const handleAddTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Title: todoTitle,
            },
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`Error creating todo, status code: ${response.status}`);
      }
      const newTodo = await response.json();
      onAddTodo(newTodo);
      setTodoTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form className="d w-50 mb-2 mx-auto" onSubmit={handleAddTodo}>
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
