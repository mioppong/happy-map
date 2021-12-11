import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import myColors from "../../styles/colors";
const CustomTextInput = ({ onChangeText, value }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.textButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
      <Text style={styles.information}>
        Select an emotion to publish your status
      </Text>

      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={[styles.textButton, { height: 100, marginTop: "50%" }]}>
            <TextInput
              placeholder="100 WORD LIMIT"
              maxLength={100}
              multiline
              style={styles.text}
              value={value}
              onChangeText={(text) => onChangeText(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.text}>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  closeButton: {
    height: 60,
    width: 60,
    backgroundColor: myColors.fourth,
    borderWidth: 5,
    borderColor: myColors.third,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  information: {
    textAlign: "right",
    color: myColors.third,
  },
  container: {
    width: "100%",
  },
  text: {
    fontWeight: "bold",
  },
  textButton: {
    height: 75,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: myColors.fourth,
    backgroundColor: myColors.first,
    marginVertical: 10,
  },
  textInput: {},
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(29, 29, 29, 0.5)",
    padding: "2%",
  },
  insideModal: {
    height: 50,
    width: 200,
  },
});
