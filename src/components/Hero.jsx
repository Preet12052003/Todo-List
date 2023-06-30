import React, { useState } from "react";
import List from "./List.jsx";

export default function Hero(props) {
  const darkstyles = {
    backgroundColor: "#333",
    color: "white",
  };

  const lightstyles = {
    backgroundColor: "white",
    color: "black",
  };

  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(todo === ""){
        alert('Please enter the task first')
        return 
    }

    setAllTodo((prevAllTodo) => {
      return [
        ...prevAllTodo,
        {
          id: crypto.randomUUID(),
          title: todo,
          completed: false,
        },
      ];
    });
    console.log(todo);
    setTodo("");
  }

  function handleDelete(id) {
    setAllTodo((prevAllTodo) => {
      return prevAllTodo.filter((todo) => todo.id !== id);
    });
  }

  // console.log(alltodo);

  const alltodoElement = alltodo.map((todo) => {
    return (
      <List
        key={todo.id}
        todo={todo}
        handleDelete={() => handleDelete(todo.id)}
        darkMode={props.darkMode}
      />
    );
  });

  return (
    <div className="hero" style={props.darkMode ? lightstyles : darkstyles}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo--input"
          placeholder="New Title"
          value={todo}
          onChange={handleChange}
        />

        <button
          className="todo--addbtn"
          style={
            props.darkMode
              ? {
                  backgroundColor: "#333",
                  color: "white",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        >
          Add
        </button>
      </form>
      <div className="list-elemetns">
        <h1 className="head-2">Todo List</h1>
        {alltodoElement.length === 0 ? <h2 className="head-2">No Tasks</h2> : alltodoElement}
      </div>
    </div>
  );
}
