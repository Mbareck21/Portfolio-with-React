import React from "react";
import { Button, ListGroup } from "react-bootstrap";
function TodoItem({ todo, onRemoveTodo }) {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex justify-content-between my-1">
         <b>🎉{todo.fields.Title}</b>
        <Button
          className=""
          variant="outline-danger"
          size="sm"
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default TodoItem;
