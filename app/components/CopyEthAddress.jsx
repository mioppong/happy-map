import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";

const CopyEthAddress = () => {
  const copyToClipboard = () => {
    Clipboard.setString("0xba7E2a742c429Dc686039ed9709e3524c66793eB");
  };
  return (
    <View>
      <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
        eth Donations Accepted :)
      </Text>
      <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
        <Text>0xba7E2a742c429Dc686039ed9709e3524c66793eB</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CopyEthAddress;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(29, 29, 29, 0.05)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
});
