import types from "../actionTypes";

export const initialState = {
  allData: [],
  id: "",
  currentUser: {},
  loading: false
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.BACKEND_REQUEST_START:
      newState.loading = true
      return newState;

    case types.GET_ALL_DATA_SUCCESS:
      newState.allData = action.payload
      newState.loading = false

      return newState;

    case types.POST_NEW_DATA_SUCCESS:
      newState.loading = false

      return newState;


    default:
      return newState;
  }
};
export default { initialState, reducer: defaultReducer };
