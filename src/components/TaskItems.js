import React from "react";

function TaskItems({ task, handleTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          checked={task.status}
          onClick={(e) => handleTaskStatus(task.id, e.target.checked)}
          className="btn-action btn-action-done"
        />
        <button
          onClick={() => removeTask(task.id)}
          className="btn-action btn-action-delete"
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItems;
