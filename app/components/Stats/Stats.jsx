import React from "react";
import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import myColors from "../../styles/colors";
import { ProgressChart } from "react-native-chart-kit";
import Close from "../../components/Icons/Close";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stats = () => {
  const homeStore = useSelector((state) => state.homeStore);
  const [modalVisible, setmodalVisible] = useState(false);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ["Swim"], // optional
    data: [0.4],
  };

  return (
    <>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          backgroundColor: "white",
          position: "absolute",
          top: "70%",
          left: "85%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
        onPress={() => setmodalVisible(true)}
      >
        <Text children="Stats" style={{ fontWeight: "bold" }} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        presentationStyle="pageSheet"
        animationType="slide"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1%",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: myColors.third,
              marginTop: 10,
            }}
          >
            Stats
          </Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setmodalVisible(false)}
          >
            <Close />
          </TouchableOpacity>
        </View>

        <FlatList
          data={homeStore.countryData}
          contentContainerStyle={{ padding: "1%" }}
          renderItem={({ item, index }) => {
            const total = item.happy.length + item.sad.length;

            return (
              <View key={index} style={{ flex: 1, marginVertical: 10 }}>
                <Text style={styles.countryName}>{item.country.name}</Text>
                <ProgressChart
                  data={{
                    labels: ["Happy"],
                    data: [item.happy.length / total],
                  }}
                  width={windowWidth}
                  height={100}
                  strokeWidth={16}
                  radius={32}
                  chartConfig={chartConfig}
                  hideLegend={false}
                />
              </View>
            );
          }}
        />
      </Modal>
    </>
  );
};

export default Stats;

const styles = StyleSheet.create({
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  countryName: {
    fontWeight: "bold",
    fontSize: 20,
    color: myColors.fourth,
  },
});
