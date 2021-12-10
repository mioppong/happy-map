import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import RefreshIcon from "./RefreshIcon";

const RefreshIconButton = () => {
  return (
    <TouchableOpacity>
      <RefreshIcon />
    </TouchableOpacity>
  );
};

export default RefreshIconButton;

const styles = StyleSheet.create({});
