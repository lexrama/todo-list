import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Stops from auto-refreshing
  const handleSubmit = (e) => {
    e.preventDefault();

    // Adding an item to the props
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // After submitted, clear text box
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
