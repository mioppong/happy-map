import types from "../actionTypes";

export const initialState = {
  allData: [],
  id: "",
  currentUser: {},
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.GET_ALL_DATA_SUCCESS:
      newState.allData = action.payload
      return newState;

    case types.POST_NEW_DATA_SUCCESS:
      return newState;

    case types.BACKEND_REQUEST_START:
      return newState;

    default:
      return newState;
  }
};
export default { initialState, reducer: defaultReducer };
