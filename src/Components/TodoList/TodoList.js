import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoItem";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";

const TodoList = ({ todoList, onRemoveTodo, onEditTodo, completeTodo }) => {
  const [isSort, setIsSort] = useState(false);

  const handleSortZA = () => {
    todoList.sort((objA, objB) => {
      if (objA.fields.Title < objB.fields.Title) {
        return 1;
      } else if (objA.fields.Title > objB.fields.Title) {
        return -1;
      } else {
        return 0;
      }
    });
    setIsSort(!isSort);
  };
  const handleSortAZ = () => {
    todoList.sort((objA, objB) => {
      if (objA.fields.Title < objB.fields.Title) {
        return -1;
      } else if (objA.fields.Title > objB.fields.Title) {
        return 1;
      } else {
        return 0;
      }
    });
    setIsSort(!isSort);
  };
  return (
    <>
      {isSort ? (
        <>
          <span>
            Sort:{" "}
            <FaSortAlphaDown onClick={handleSortAZ}  />
          </span>

          <ul>
            {todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                onRemoveTodo={onRemoveTodo}
                onEditTodo={onEditTodo}
                todo={todo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <span>
            Sort:{" "}
            <FaSortAlphaDownAlt onClick={handleSortZA}  />
          </span>
          <ul>
            {todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                onRemoveTodo={onRemoveTodo}
                onEditTodo={onEditTodo}
                todo={todo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
export default TodoList;
