import "./App.css";
import AddTask from "./componets/AddTask";
import TaskList from "./componets/TaskList";

function App() {
  return (
    <>
      <div className="container py-3">
        <h2>Tasks Management</h2>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-6">
            <AddTask />
          </div>
          <div className="col-sm-6">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
