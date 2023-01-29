import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className="d w-50 rounded p-0 mx-auto">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} onRemoveTodo={onRemoveTodo} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
