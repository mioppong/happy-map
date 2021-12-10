import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import HappyIcon from "./Icons/HappyIcon";

const HappyIconButton = ({ onPress, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HappyIcon size={size} />
    </TouchableOpacity>
  );
};

export default HappyIconButton;

const styles = StyleSheet.create({});
