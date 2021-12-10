import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import * as Device from "expo-device";
import Constants from "expo-constants";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import HappyIcon from "./app/components/Icons/HappyIcon";
import SadIcon from "./app/components/Icons/SadIcon";
import myColors from './app/styles/colors'
const App = () => {
  const [location, setLocation] = useState(null);

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE = 29.9990674;
  const LONGITUDE = -90.0852767;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const SPACE = 0.01;

  console.log("location is", location);
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
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const [count, setCount] = useState(0);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [markers, setMarkers] = useState([
    {
      id: "12312",
      text: "Heyy everyone",
      image: "",
      emotion: "happy",
      timestamp: "",
      coordinate: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
    },
    {
      id: "324234",
      text: "yerrr",
      image: "",
      emotion: "sad",
      timestamp: "",
      coordinate: {
        latitude: LATITUDE + SPACE + 1,
        longitude: LONGITUDE + SPACE,
      },
    },
    {
      id: "34554",
      text: "ayeepo ma BIG BONG",
      image: "",
      emotion: "sad",
      coordinate: {
        latitude: LATITUDE + SPACE + 7.07,
        longitude: LONGITUDE + SPACE + 1,
      },
    },
    {
      id: "34534",
      text: "AYERRRRRR MA ",
      image: "",
      emotion: "happy",
      timestamp: "",
      coordinate: {
        latitude: LATITUDE + SPACE + 1.01,
        longitude: LONGITUDE + SPACE,
      },
    },
    {
      id: "3453453",
      text: "LKDJF FDGHJDFN SDFNHD DSJHFS",
      image: "",
      emotion: "happy",
      timestamp: "",
      coordinate: {
        latitude: LATITUDE + SPACE + 1.4,
        longitude: LONGITUDE + SPACE,
      },
    },
    {
      id: "546456",
      text: "HOLA COMO ESTA HERMANO ESPOERO QUE TODO ESTA BIEN",
      image: "",
      emotion: "sad",
      timestamp: "",
      coordinate: {
        latitude: LATITUDE + 1.7 + SPACE,
        longitude: LONGITUDE - SPACE,
      },
    },
  ]);

  const MyCustomMarkerView = ({ item }) => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.emotion === "sad" ? <SadIcon /> : <HappyIcon />}
    </View>
  );

  const MyCustomCalloutView = ({ item }) => {
    const calloutColor= item.emotion ==="sad"? myColors.fourth: myColors.first
    return (
    <View
      style={{
        height: 100,
        width: 150,
        backgroundColor: calloutColor,
        borderRadius: 20,
        padding: "5%",
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>{item.text}</Text>
    </View>
  )};

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {markers.map((item, index) => (
          <Marker coordinate={item.coordinate} title={`Title is${index}`}>
            <MyCustomMarkerView item={item} />
            <Callout tooltip>
              <MyCustomCalloutView  item={item}/>
            </Callout>
          </Marker>
        ))}
       
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}></View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default App;

// import * as SecureStore from 'expo-secure-store';
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';

// let uuid = uuidv4();
// await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuid));
// let fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
// console.log(fetchUUID)
