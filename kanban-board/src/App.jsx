import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Column from "./components/Column";
import "./App.css";

const initialTasks = [
  { id: 1, title: "Login view form", description: "Create login form UI", status: "Todo" },
  { id: 2, title: "Registration view form", description: "Create register form UI", status: "Done" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "Todo",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const columns = ["Backlog", "Todo", "In Progress", "Done"];

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <TaskForm onAddTask={addTask} />
      <div className="board">
        {columns.map((col) => (
          <Column
            key={col}
            title={col}
            tasks={tasks.filter((t) => t.status === col)}
            allStatuses={columns}
            onMoveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
