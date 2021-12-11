import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import * as Location from "expo-location";
import { PersistGate } from "redux-persist/integration/react";

import MapScreen from "./app/screens/MapScreen/MapScreen";
import { persistedStore, store } from "./app/redux/store";
import MyBottomSheet from "./app/components/MyBottomSheet/MyBottomSheet";
import { getPhoneID } from "./app/api/index";
import {
  saveID,
  saveLocation,
  changeLocationPermissions,
} from "./app/redux/actions";
const App = (props) => {
  const dispatch = useDispatch();

  const getLocationPermission = async () => {
    // WE GET LOCATION PERMISSION AND A USER ID WHICH WE GENERATE FOR EACH DEVICE
    // in this method
    const userID = await getPhoneID();
    dispatch(saveID(userID));

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      dispatch(changeLocationPermissions(false));
      return;
    }

    let location = await Location.getCurrentPositionAsync();

    dispatch(changeLocationPermissions(true));
    dispatch(saveLocation(location));
  };

  useEffect(async () => {
    await getLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapScreen />
      <MyBottomSheet />
    </View>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppWrapper;
