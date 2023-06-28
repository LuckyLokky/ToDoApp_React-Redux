import { useSelector } from "react-redux";
import { dataSelector } from "../../../ducks/tasks";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_UPDATE_TASK } from "../../../ducks/tasks";

const initialState = {
  task: "",
};

export const useEditButton = (idx) => {
  const [status, setStatus] = useState(false);
  const [updatedValues, setUpdatedValues] = useState(initialState);
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const handleShowInput = () => {
    setStatus(!status);
  };

  const handleChange = useCallback((e) => {
    setUpdatedValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedData = data.map((item) => {
      if (item.id === idx) {
        return (item = {
          ...updatedValues,
          id: item.id,
        });
      } else {
        return item;
      }
    });
    console.log(updatedData);
    dispatch(ACTION_UPDATE_TASK(updatedData));
    setUpdatedValues(initialState);
  };

  return { handleShowInput, handleSubmit, handleChange, updatedValues, status };
};
