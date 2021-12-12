import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { sendGridEmail } from "react-native-sendgrid";
import myCoolConfig from "../../config";
import myColors from "../styles/colors";

const FeedbackModal = (props) => {
  const [subject, setSubject] = useState();
  const [modalVisible, setmodalVisible] = useState(false);
  const [description, setDescription] = useState(null);
  const FROMEMAIL = "oppongstudios@gmail.com";
  const TOMEMAIL = "oppongstudios@gmail.com";

  const handleSendMessage = async () => {
    console.log("subject is", subject);
    console.log("description is", description);

    const sendRequest = sendGridEmail(
      myCoolConfig.sendgrid,
      TOMEMAIL,
      FROMEMAIL,
      subject,
      description
    );
    sendRequest
      .then((response) => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });

    setmodalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: myColors.first,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          width: 150,
          borderRadius: 20,
        }}
        onPress={() => setmodalVisible(true)}
      >
        <Text style={styles.buttonText}>Give FeedBack</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        style={{}}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ justifyContent: "center" }}
        >
          <Text style={styles.mainText}> Thank you for your feedback</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.subjectInput}
              placeholder="subject"
              placeholderTextColor={"black"}
              onChangeText={(text) => setSubject(text)}
            />

            <TextInput
              style={styles.description}
              multiline
              placeholder="anything you want to tell the develper :)"
              placeholderTextColor={"black"}
              onChangeText={(text) => setDescription(text)}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{ height: 50, width: 100, justifyContent: "center" }}
                onPress={() => setmodalVisible(false)}
              >
                <Text>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ height: 50, width: 100, justifyContent: "center" }}
                onPress={() => handleSendMessage()}
              >
                <Text>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: myColors.fourth,
  },
  container: {
    flex: 1,
    // backgroundColor: "#1a1a1a",
  },
  buttonText: {
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
    backgroundColor: myColors.fourth,
    color: "black",
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
    color: myColors.third,
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
    backgroundColor: myColors.fourth,
    color: "black",
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

export default FeedbackModal;
