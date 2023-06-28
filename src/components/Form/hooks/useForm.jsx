import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_CREATE_TASK } from "../../../ducks/tasks";
const initialState = {
  task: "",
};

export const useForm = () => {
  const [values, setValue] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(ACTION_CREATE_TASK(values));

      setValue(initialState);
    },
    [values, dispatch]
  );

  return { values, handleChange, handleSubmit };
};
