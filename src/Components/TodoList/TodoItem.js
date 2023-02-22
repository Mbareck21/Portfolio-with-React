import React, { useState, useRef, useEffect } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { MdOutlineDataSaverOn, MdOutlineCancel } from "react-icons/md";
function TodoItem({ todo, onRemoveTodo, onEditTodo, completeTodo }) {
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
    <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between my-1">
        {isEditing ? (
          <Form
            onSubmit={handleEditSubmit}
            className="p-0 d-flex justify-content-between align-Items-c"
          >
            <Form.Control
              type="text"
              value={updatedTodo.fields.Title}
              name="Title"
              onChange={handleEditChange}
              ref={inputRef}
            ></Form.Control>
            <span className="d-flex mr-3">
              <Button type="submit" variant="outline-warning">
                Save
              </Button>
              <Button
                variant="outline-success"
                type="button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </span>
          </Form>
        ) : (
          <>
            <span onClick={() => completeTodo(todo.id)}>
              {todo.fields.Title}
            </span>
            <span>
              <FaEdit type="button" onClick={() => setIsEditing(true)} />

              <AiFillDelete onClick={() => onRemoveTodo(todo.id)} />
            </span>
          </>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default TodoItem;
