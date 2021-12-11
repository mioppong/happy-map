import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { connect } from "react-redux";

import HappyIconButton from "../HappyIconButton";
import SadIconButton from "../SadIconButton";
import RefreshIconButton from "../RefreshIconButton";
import { getAllData } from "../../redux/actions";

const MyBottomSheet = (props) => {
  const { getAllData } = props;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const handleSheetChanges = useCallback((index) => {}, []);

  const handleSadButton = () => {};
  const handleHappyButton = () => {};
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            margin: 10,
          }}
        >
          How do you feel
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <SadIconButton size={100} handleSadButton={handleSadButton} />
          <RefreshIconButton onPress={getAllData} />

          <HappyIconButton size={100} handleHappyButton={handleHappyButton} />
        </View>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBottomSheet);
