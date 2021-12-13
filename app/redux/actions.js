import axios from "axios";
import myCoolConfig from "../../config";
import types from "./actionTypes";

export const getAllData = () => async (dispatch) => {
  dispatch({ type: types.BACKEND_REQUEST_START });

  const url = myCoolConfig.backend;
  const response = await axios.get(`${url}/gethappydata`).catch(() => {
    return dispatch({ type: types.GET_ALL_DATA_FAIL });
  });

  dispatch({ type: types.GET_ALL_DATA_SUCCESS, payload: response.data });
};

export const postData = (newData) => async (dispatch) => {
  dispatch({ type: types.BACKEND_REQUEST_START });

  const url = myCoolConfig.backend;

  const response = await axios
    .post(`${url}/newemotion`, { newData: newData })
    .catch(() => {
      return dispatch({ type: types.POST_NEW_DATA_FAIL });
    });
    
  dispatch({ type: types.POST_NEW_DATA_SUCCESS, payload: newData });
};
export const saveID = (id) => async (dispatch) => {
  dispatch({ type: types.SAVE_USER_ID, payload: id });
};
export const saveLocation = (location) => async (dispatch) => {
  dispatch({ type: types.SAVE_USER_LOCATION, payload: location });
};

export const changeLocationPermissions = (value) => async (dispatch) => {
  dispatch({ type: types.LOCATION_PERMISSIONS, payload: value });
};
