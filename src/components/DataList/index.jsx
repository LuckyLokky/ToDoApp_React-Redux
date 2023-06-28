import EditButton from "../EditButton";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { dataSelector } from "../../ducks/tasks";
import { ACTION_DELETE_TASK } from "../../ducks/tasks";

const DataList = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    let value = data.filter((el) => el.id !== id);
    dispatch(ACTION_DELETE_TASK(value));
  };
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.task}</p>

            <EditButton className="editButton" idx={item.id} />

            <button className="delete" onClick={() => handleDelete(item.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DataList;
