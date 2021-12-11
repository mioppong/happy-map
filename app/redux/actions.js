import axios from "axios";
import types from "./actionTypes";

export const getAllData = () => async (dispatch) => {
  dispatch({ type: types.BACKEND_REQUEST_START });

  const url = "https://61aecea833653500172f9fbf.mockapi.io/gethappydata";

  const response = await axios.get(url).catch(() => {
    return dispatch({ type: types.GET_ALL_DATA_FAIL });
  });

  dispatch({ type: types.GET_ALL_DATA_SUCCESS, payload: response.data });
};

export const postData = (newData) => async (dispatch) => {
  dispatch({ type: types.BACKEND_REQUEST_START });

  const url = "https://61aecea833653500172f9fbf.mockapi.io/gethappydata";

  const response = await axios.get(url).catch(() => {
    return dispatch({ type: types.POST_NEW_DATA_FAIL });
  });

  dispatch({ type: types.GET_ALL_DATA_SUCCESS, payload: newData });
};
