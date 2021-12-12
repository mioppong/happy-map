import { AdMobBanner } from "expo-ads-admob";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

const AdComponent = () => {
  const bannerError = (e) => {
    console.log(e);
  };
  return (
    <View style={styles.container}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          Platform.OS == "ios"
            ? "ca-app-pub-3940256099942544/6300978111"
            : "ca-app-pub-3940256099942544/6300978111"
        }
        servePersonalizedAds={false}
        onDidFailToReceiveAdWithError={(e) => bannerError(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AdComponent;
