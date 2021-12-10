import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import HappyIconButton from "../HappyIconButton";
import SadIconButton from "../SadIconButton";
import RefreshIconButton from "../RefreshIconButton";

const MyBottomSheet = ({ handleHappyButton, handleSadButton }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const handleSheetChanges = useCallback((index) => {}, []);
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
          <RefreshIconButton />

          <HappyIconButton size={100} handleHappyButton={handleHappyButton} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
