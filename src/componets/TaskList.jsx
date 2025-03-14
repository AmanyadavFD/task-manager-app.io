import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodos } from "../features/taskSlice";
import { useEffect } from "react";
import EditTask from "./EditTask";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error, status } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>There is an error: {error}</p>;
  }

  console.log(tasks, status);

  return (
    <div>
      {tasks?.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <div>
                <p>{task.title}</p>
                {task.description && <p>{task.description}</p>}
                <p>Status: {task.status}</p>
              </div>
              <div
                className="d-flex justify-content-end "
                style={{ gap: "20px" }}
              >
                <EditTask taskData={task} />
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
