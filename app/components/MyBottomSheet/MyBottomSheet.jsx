import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, ScrollView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const MyBottomSheet = () => {
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
      <ScrollView></ScrollView>
    </BottomSheet>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
