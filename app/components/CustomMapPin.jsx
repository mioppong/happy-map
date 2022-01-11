import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SadIcon from "./Icons/SadIcon";
import HappyIcon from "./Icons/HappyIcon";
const CustomMapPin = ({ item }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.emotion % 2 == 0 ? <HappyIcon /> : <SadIcon />}
    </View>
  );
};

export default CustomMapPin;

const styles = StyleSheet.create({});
