import Register from "./components/auth/Register";
import TodoList from "./components/todo/TodoList";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello There</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
export default App;
// todo functionality + auth component
