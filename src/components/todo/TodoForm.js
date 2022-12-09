import React, { useState, useRef, useEffect } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const currRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    currRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodoSubmit({
      text: text,
      id: shortid.generate(),
      isTodoComplete: false,
    });
    setText("");
  };

  return (
    <div>
      TodoForm
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          ref={currRef}
          placeholder="write your todo here..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
