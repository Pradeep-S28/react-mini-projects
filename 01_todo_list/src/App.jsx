import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const [checkStatus, SetcheckStatus] = useState(false);

  const addData = () => {
    if (input.trim()) {
      setTasks([...tasks, { task_name: input, completed: false }]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    if (confirm("Are you sure to delete ?")) {
      let filtered_tasks = tasks.filter((task, id) => id != index);
      setTasks(filtered_tasks);
    }
  };

  const checkStatusCheckbox = (index, status) => {
    let alter_tasks = tasks.map((task, id) => {
      if (id == index) {
        return { task_name: task.task_name, completed: !task.completed };
      }

      return task;
    });

    setTasks(alter_tasks);
  };

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>

        <div className="form-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addData}>Add</button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>
                <input
                  type="checkbox"
                  id=""
                  onChange={(e) => checkStatusCheckbox(index, e.target.checked)}
                />
              </span>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task_name}
              </span>
              <button onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
