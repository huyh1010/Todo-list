import React from "react";

function AddTaskForm({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        onChange={handleInputChange}
        value={newTask}
        type="text"
        id="newitem"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
