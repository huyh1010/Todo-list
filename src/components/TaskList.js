import React from "react";
import TaskItems from "./TaskItems";

function TaskList({
  tasks,
  showIncomplete,
  handleTaskStatus,
  removeTask,
  setShowIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItems
              key={task.id}
              task={task}
              handleTaskStatus={handleTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter">Show incompleted tasks only</label>
        <input
          onChange={(e) => setShowIncomplete(e.target.checked)}
          checked={showIncomplete}
          type="checkbox"
          id="filter"
        />
      </div>
    </>
  );
}

export default TaskList;
