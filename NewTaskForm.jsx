import { useState } from "react";

export default function NewTaskForm({ addTodo }) {
  NewTaskForm.propTypes = addTodo;
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <div className="form-row"></div>
        <label htmlFor="item" className="new-label">
          New Task
        </label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </>
  );
}
