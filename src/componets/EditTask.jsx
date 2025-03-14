import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";
// import { v4 as uuid4 } from "uuid";

const EditTask = ({ taskData }) => {
  const [task, setTask] = useState({
    title: taskData.title,
    description: taskData.description,
    status: taskData.status,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(task, "Edit Data");
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: taskData.id, ...task }));
    document.getElementById("closeModalBtn").click();

    // const newTask = {
    //   id: uuid4(),
    //   ...task,
    // };
    // console.log("Task Submitted:", newTask);
    // dispatch(addTask(newTask));
    // Reset the form after submission
    // setTask({ title: "", description: "", status: "To Do" });
  };
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={`#modal-${taskData.id}`}
        >
          Edit
        </button>

        <div
          className="modal fade"
          id={`modal-${taskData.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <form onSubmit={handleEdit}>
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
                      Save
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
