import { v4 } from "uuid";

export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const ACTION_CREATE_TASK = (payload) => ({
  type: "CREATE_TASK",
  payload: {
    ...payload,
    id: v4(),
  },
});

export const ACTION_UPDATE_TASK = (updatedData) => ({
  type: "UPDATE_TASK",
  payload: updatedData,
});

export const ACTION_DELETE_TASK = (value) => ({
  type: "DELETE_TASK",
  payload: value,
});

export const initialState = {
  data: [],
};

export const dataSelector = (state) => state.tasks.data;

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        data: action.payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};
