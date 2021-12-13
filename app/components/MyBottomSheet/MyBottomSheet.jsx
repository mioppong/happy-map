import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { connect } from "react-redux";

import HappyIconButton from "../HappyIconButton";
import SadIconButton from "../SadIconButton";
import RefreshIconButton from "../RefreshIconButton";
import { getAllData, postData } from "../../redux/actions";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import AdComponent from "../AdComponent";
import FeedbackModal from "../FeedBackModal";
import Settings from "../Settings/Settings";

const MyBottomSheet = (props) => {
  const { getAllData, homeStore, postData } = props;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["20%", "60%"], []);
  const handleSheetChanges = useCallback((index) => {}, []);
  const [text, setText] = useState("I feel blessed Today :)");

  const handleEmotionSelected = (emotion) => {
    const { currentUser } = homeStore;

    const newEmotion = {
      id: currentUser.id,
      coordinates: {
        latitude: currentUser.coordinates.latitude,
        longitude: currentUser.coordinates.longitude,
      },
      emotion: emotion,
      text: text,
      timestamp: Date.now(),
      image: "",
    };
    postData(newEmotion);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          height: 20,
          width: 20,
        }}
      >
        <Settings />
      </View>
      <View style={{ padding: "2%" }}>
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
            onPress={() => handleEmotionSelected(2)}
          />
          <RefreshIconButton onPress={getAllData} />

          <HappyIconButton
            size={75}
            disabled={!homeStore.locationPermission}
            onPress={() => handleEmotionSelected(1)}
          />
        </View>
        <CustomTextInput value={text} onChangeText={(text) => setText(text)} />

        <View style={{ marginTop: 30 }}>
          <AdComponent />
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  howFeel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
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
