import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import SadIcon from "./Icons/SadIcon";

const SadIconButton = ({ onPress, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SadIcon size={size} />
    </TouchableOpacity>
  );
};

export default SadIconButton;

const styles = StyleSheet.create({});
