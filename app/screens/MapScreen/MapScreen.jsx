import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { connect } from "react-redux";
import MapView, { Marker, Callout } from "react-native-maps";

import { getAllData } from "../../redux/actions";
import CustomMapPin from "../../components/CustomMapPin";
import CustomCallout from "../../components/CustomCallout/CustomCallout";
import Stats from "../../components/Stats/Stats";

const MapScreen = (props) => {
  const { homeStore, getAllData } = props;

  useEffect(() => {
    props.getAllData();
  }, []);

  return (
    <>
      <View style={styles.container}>
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
                  <CustomMapPin item={item} />

                  <Callout tooltip>
                    <CustomCallout item={item} />
                  </Callout>
                </Marker>
              ))
            : null}
        </MapView>
      </View>
      <Stats />
    </>
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
