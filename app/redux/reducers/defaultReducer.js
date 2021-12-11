import types from "../actionTypes";

export const initialState = {
  allData: [],
  currentUser: {
    id: "",
    coordinates: { longitude: 0, latitude: 0 },
    emotion: "",
    timestamp: "",
  },
  locationPermission: false,
  loading: false,
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.BACKEND_REQUEST_START:
      newState.loading = true;
      return newState;

    case types.GET_ALL_DATA_SUCCESS:
      newState.allData = action.payload;
      newState.loading = false;

      return newState;

    case types.POST_NEW_DATA_SUCCESS:
      console.log("new user os", action.payload);
      const currentUser = newState.allData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (currentUser === -1) {
        newState.allData.push(action.payload);
        newState.loading = false;
        newState.currentUser = action.payload;
        return newState;
      }

      newState.allData[currentUser] = action.payload;
      newState.currentUser = action.payload;
      newState.loading = false;

      return newState;

    case types.SAVE_USER_ID:
      newState.currentUser.id = action.payload;
      newState.loading = false;
      return newState;
    case types.SAVE_USER_LOCATION:
      const { coords, timestamp } = action.payload;

      newState.currentUser.coordinates.latitude = coords.latitude;
      newState.currentUser.coordinates.longitude = coords.longitude;
      newState.currentUser.timestamp = timestamp;
      newState.loading = false;
      return newState;

    case types.LOCATION_PERMISSIONS:
      newState.locationPermission = action.payload;
      return newState;
    default:
      return newState;
  }
};
export default { initialState, reducer: defaultReducer };
