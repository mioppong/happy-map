import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { connect } from "react-redux";

import HappyIconButton from "../HappyIconButton";
import SadIconButton from "../SadIconButton";
import RefreshIconButton from "../RefreshIconButton";
import { getAllData, postData } from "../../redux/actions";
import CustomTextInput from "../CustomTextInput/CustomTextInput";

const MyBottomSheet = (props) => {
  const { getAllData, homeStore } = props;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["20%", "60%"], []);
  const handleSheetChanges = useCallback((index) => {}, []);
  const [text, setText] = useState("");
  const handleSadButton = () => {};
  const handleHappyButton = () => {};
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={{ padding: "2%" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          How do you feel
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 5,
          }}
        >
          <SadIconButton
            disabled={!homeStore.locationPermission}
            size={75}
            handleSadButton={handleSadButton}
          />
          <RefreshIconButton onPress={getAllData} />

          <HappyIconButton
            size={75}
            disabled={!homeStore.locationPermission}
            handleHappyButton={handleHappyButton}
          />
        </View>
        <CustomTextInput value={text} onChangeText={(text) => setText(text)} />
        <Text>{homeStore.currentUser.id}</Text>
        <Text>{homeStore.locationPermission ? "ENABLED" : "DISABLED"}</Text>

        <Text>{homeStore.currentUser.coordinates.latitude}</Text>
        <Text>{homeStore.currentUser.coordinates.longitude}</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  homeStore: state.homeStore,
});

const mapDispatchToProps = (dispatch) => ({
  getAllData: () => {
    dispatch(getAllData());
  },
  postData: (payload) => {
    dispatch(postData(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBottomSheet);
