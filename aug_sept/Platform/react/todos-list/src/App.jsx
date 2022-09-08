import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState("");

  const [todoList, settodoList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      return;
    }

    const todoObj = {
      title: todo,
      complete: false,
    };

    settodoList([...todoList, todoObj]);
    setTodo("");
  };

  const handleDelete = (delIdx) => {
    const filteredList = todoList.filter((todo, idx) => {
      return idx !== delIdx;
    });

    settodoList(filteredList);
  };

  const handleCheckbox = (i) => {
    const updatedTodo = todoList.map((todo, idx) => {
      if (idx === i) {
        todo.complete = !todo.complete;

        //the following snippet is an alternative to mutating the state directly
        //const updatedTodo = { ...todo, complete: !todo.complete};
        //return updatedTodo;
      }
      return todo;
    });
    settodoList(updatedTodo);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          value={todo}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>

      <hr />

      {todoList.map((todo, idx) => {
        return (
          <Todo
            key={idx}
            idx={idx}
            todo={todo}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
          ></Todo>
        );
      })}
    </div>
  );
}

export default App;
