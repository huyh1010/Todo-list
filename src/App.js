import React, { useState } from "react";

import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        } else {
          return task;
        }
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div>
      <div className="container">
        <Header
          title="Todo List"
          subTitle="Get things done, one item at a time."
        />
        <TaskList
          tasks={tasks}
          showIncomplete={showIncomplete}
          handleTaskStatus={handleTaskStatus}
          removeTask={removeTask}
          setShowIncomplete={setShowIncomplete}
        />

        <AddTaskForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          newTask={newTask}
        />
      </div>
    </div>
  );
}

export default App;
