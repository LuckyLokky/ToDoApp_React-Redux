import { combineReducers } from "redux";
import { tasksReducer } from "../ducks/tasks";

const reducers = {
  tasks: tasksReducer,
};

export const reducer = combineReducers({
  ...reducers,
});
