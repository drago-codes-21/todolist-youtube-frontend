import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <div className={`${todo.isTodoComplete ? "complete" : ""}`}>
        <div onClick={toggleComplete}>
          <span style={{ fontWeight: "bold" }}>{todo.id.substring(0, 2)}</span>
          {"    "}
          {todo.text}
        </div>

        <span onClick={deleteTodo}>
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
};

export default Todo;
