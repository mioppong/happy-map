import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import myColors from "../../styles/colors";
import FeedbackModal from "../FeedBackModal";
import GearIcon from "../Icons/GearIcon";

const Settings = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setmodalVisible(true)}>
        <GearIcon />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        style={{ backgroundColor: "#1a1a1a" }}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: myColors.third,
              }}
            >
              Settings
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>{/* <FeedbackModal /> */}</View>
          <Text>Language Support coming soon ...</Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setmodalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Modal>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
  },
  container: {
    flex: 1,
  },
  closeButton: {
    marginTop: "50%",
    backgroundColor: myColors.first,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: myColors.fourth,
  },
  description: {
    padding: 10,
    marginVertical: "5%",
    borderRadius: 20,
    alignSelf: "center",
    height: 200,
    width: "90%",
    backgroundColor: "#1c1c1c",
    color: myColors.first,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainText: {
    marginVertical: "10%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: myColors.second,
  },
  topContainer: {
    backgroundColor: "blue",
  },
  subjectInput: {
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    height: 50,
    width: "90%",
    backgroundColor: "#1c1c1c",
    color: myColors.third,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
