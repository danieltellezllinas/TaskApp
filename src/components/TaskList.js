import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(
      deleteTask(id),
    );
  };
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>{task.title}</div>
          <div>{task.description}</div>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </>
  );
};

export default TaskList;
