import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (idx) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === idx) todo.isTodoComplete = !todo.isTodoComplete;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (idx) => {
    let removedTodoTodolist = [...todos].filter((todo) => todo.id !== idx);
    setTodos(removedTodoTodolist);
  };

  return (
    <div>
      {" "}
      <h1>TodoList</h1>
      <TodoForm onTodoSubmit={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
// == only checks value while === checks for value and datatype
