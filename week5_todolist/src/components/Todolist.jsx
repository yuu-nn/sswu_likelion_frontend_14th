import { useState } from "react";
import plusImg from "../asserts/img/Vector1.png"
import closeImg from "../asserts/img/Vector.png"

function Todolist() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>TO-DO LIST</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="오늘 할 일을 입력해주세요!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo}>
            <img src={plusImg}/>
        </button>
      </div>

      <div className="todo-container">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="todo-left">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span
                  style={{
                    textDecoration: todo.done
                      ? "line-through"
                      : "none",
                  }}
                >
                  {todo.text}
                </span>
              </div>

              <button onClick={() => deleteTodo(todo.id)}>
                <img src={closeImg}/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;