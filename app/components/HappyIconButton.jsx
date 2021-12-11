import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import HappyIcon from "./Icons/HappyIcon";

const HappyIconButton = ({ onPress, size, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <HappyIcon size={size} />
    </TouchableOpacity>
  );
};

export default HappyIconButton;

const styles = StyleSheet.create({});
