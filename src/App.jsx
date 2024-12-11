import React from "react";
import tasks from "./models/tasks.js";
import "./App.css";

function App() {
  const tasksUndone = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

  const tasksDone = tasks.filter((task) => task.state === "completed");

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <main>
        <section>
          <h2>Current Tasks ({tasksUndone.length})</h2>

          <ul>
            {tasksUndone.map((task) => (
              <li>
                <h4>{task.title}</h4>
                <p>Priority: {task.priority}</p>
                <p>Estimated Time: {task.estimatedTime}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr />

        <section>
          <h2>Completed Tasks</h2>

          <ul>
            {tasksDone.map((task) => (
              <li>
                <h4>{task.title}</h4>
                <p>Priority: {task.priority}</p>
                <p>Estimated Time: {task.estimatedTime}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
