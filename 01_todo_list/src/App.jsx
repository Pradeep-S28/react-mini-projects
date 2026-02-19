import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addData = () => {
    if (input.trim) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    if (confirm("Are you sure to delete ?")) {
      let filtered_tasks = tasks.filter((task, id) => id != index);
      setTasks(filtered_tasks);
    }
  };
  return (
    <>
      <h1>Todo APP</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addData}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
