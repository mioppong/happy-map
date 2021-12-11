import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import RefreshIcon from "./RefreshIcon";

const RefreshIconButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RefreshIcon />
    </TouchableOpacity>
  );
};

export default RefreshIconButton;

const styles = StyleSheet.create({});
