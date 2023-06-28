import { useEditButton } from "./hooks/useEditButton";
import "./style.css";

const EditButton = ({ idx }) => {
  const { handleShowInput, handleSubmit, handleChange, updatedValues, status } =
    useEditButton(idx);

  return (
    <div className="edit">
      <button className="updateData" onClick={handleShowInput}>
        Update Task
      </button>
      {status === true && (
        <form className="editForm" onSubmit={handleSubmit}>
          <input
            name="task"
            value={updatedValues.task}
            onChange={handleChange}
          />
          <button>Add changes</button>
        </form>
      )}
    </div>
  );
};

export default EditButton;
