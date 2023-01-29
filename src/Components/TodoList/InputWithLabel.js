import React from "react";
import { Form } from "react-bootstrap";
function InputWithLabel(props) {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Form.Group>
      <Form.Label htmlFor="title">{props.children}</Form.Label>
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="add todo item"
        ref={inputRef}
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        onChange={props.handleTitleChange}
      ></Form.Control>
    </Form.Group>
  );
}

export default InputWithLabel;
