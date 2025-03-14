import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/taskSlice";
const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      ...task,
    };
    // console.log("Task Submitted:", newTask);
    dispatch(addTask(newTask));
    // Reset the form after submission
    setTask({ title: "", description: "", status: "To Do" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Task Name"
            value={task.title}
            onChange={handleChange}
            required
            class="form-control"
          />
        </div>
        <div className="mb-4">
          <textarea
            class="form-control"
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="mb-4">
          <select
            class="form-select"
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
