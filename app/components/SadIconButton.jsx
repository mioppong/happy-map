import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import SadIcon from "./Icons/SadIcon";

const SadIconButton = ({ onPress, size, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <SadIcon size={size} />
    </TouchableOpacity>
  );
};

export default SadIconButton;

const styles = StyleSheet.create({});
