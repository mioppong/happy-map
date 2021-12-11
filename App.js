import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import * as Location from "expo-location";
import { PersistGate } from "redux-persist/integration/react";

import MapScreen from "./app/screens/MapScreen/MapScreen";
import { persistedStore, store } from "./app/redux/store";
import MyBottomSheet from "./app/components/MyBottomSheet/MyBottomSheet";

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <View style={styles.container}>
          <MapScreen />
          <MyBottomSheet />
        </View>
      </PersistGate>
    </Provider>
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
