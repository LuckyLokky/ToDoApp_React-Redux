import { useForm } from "./hooks/useForm";
import "./style.css";

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="FormInput"
        name="task"
        value={values.task}
        onChange={handleChange}
      />
      <button className="FormButton">Add new task</button>
    </form>
  );
};

export default Form;
