import React from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import { Form, Button } from "react-bootstrap";
const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (todoTitle.trim() === "") {
      alert("Cannot submit an empty todo item!");
      return;
    }
    onAddTodo({ fields: { Title: todoTitle, IsComplete: false } });
    setTodoTitle("");
  };

  return (
    <Form onSubmit={handleAddTodo} style={{width: '18rem'}}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      ></InputWithLabel>
      <Button type="submit" variant="outline-warning">Add</Button>
    </Form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
