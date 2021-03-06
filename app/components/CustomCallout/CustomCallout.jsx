import React from "react";
import { StyleSheet, Text, View } from "react-native";
import myColors from "../../styles/colors";

const CustomCallout = ({ item }) => {
  const calloutColor = item.emotion % 2 == 0 ? myColors.first : myColors.fourth;

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

export default CustomCallout;

const styles = StyleSheet.create({});
