import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import style from "./TodoListItem.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const TodoListItem = ({ todo, onRemoveTodo, onEditTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const inputRef = useRef(null);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      fields: {
        ...updatedTodo.fields,
        [name]: value,
      },
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditTodo(updatedTodo);
    setIsEditing(false);
  };

  useEffect(() => {
    if (inputRef.current && isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li
      className={todo.fields.IsComplete ? style.Complete : style.ListItem}
      title={
        todo.fields.IsComplete
          ? "Click to uncheck as Completed!"
          : "Click to check as Completed!"
      }
    >
      {isEditing ? (
        <Form onSubmit={handleEditSubmit} className={style.EditForm}>
          <Form.Group className="d-flex">
            <Form.Control
              className="me-5"
              type="text"
              value={updatedTodo.fields.Title}
              name="Title"
              onChange={handleEditChange}
              ref={inputRef}
            />
            <Button size="sm" type="submit" className="me-5">
              Save
            </Button>
            <Button
              size="sm"
              type="button"
              
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <>
          <span onClick={() => completeTodo(todo.id)}>{todo.fields.Title}</span>
          <span className={style.ListItemIcons}>
            <FaEdit
              onClick={() => setIsEditing(true)}
              className={style.EditIcon}
            />

            <AiFillDelete
              className={style.DeleteIcon}
              onClick={() => onRemoveTodo(todo.id)}
            />
          </span>
        </>
      )}
    </li>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
export default TodoListItem;
