import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker, Callout } from "react-native-maps";

import SadIcon from "../../components/Icons/SadIcon";
import HappyIcon from "../../components/Icons/HappyIcon";
import myColors from "../../styles/colors";
import { getAllData } from "../../redux/actions";

const MyCustomMarkerView = ({ item }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.emotion === "sad" ? <SadIcon /> : <HappyIcon />}
    </View>
  );
};

const MyCustomCalloutView = ({ item }) => {
  const calloutColor =
    item.emotion === "sad" ? myColors.fourth : myColors.first;
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
  );
};
const MapScreen = (props) => {
  const { homeStore, getAllData } = props;

  useEffect(() => {
    props.getAllData();
  }, []);
  return (
    <MapView style={styles.map}>
      <MapView style={styles.map}>
        {!homeStore.loading
          ? homeStore.allData.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: Number(item.coordinates.latitude),
                  longitude: Number(item.coordinates.longitude),
                }}
                title={`Title is${index}`}
              >
                <MyCustomMarkerView item={item} />
                <Callout tooltip>
                  <MyCustomCalloutView item={item} />
                </Callout>
              </Marker>
            ))
          : null}
      </MapView>
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const mapStateToProps = (state) => ({
  homeStore: state.homeStore,
});

const mapDispatchToProps = (dispatch) => ({
  getAllData: () => {
    dispatch(getAllData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
