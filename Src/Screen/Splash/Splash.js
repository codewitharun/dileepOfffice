import {
  StyleSheet,
  Text,
  Alert,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";

const { height, width } = Dimensions.get("screen");

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Slogin");
    }, 3000);
  });

  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <TouchableOpacity
          style={styles.TrTouchable}
          onPress={() => props.navigation.navigate("Slogin")}
        >
          <Image
            source={require("../../Images/Splash/Splash.png")}
            style={styles.TrImg}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainView: {
    height: height * 1,
    width: width * 1,
    //   backgroundColor:"cyan",
    justifyContent: "center",
    alignItems: "center",
  },
  TrTouchable: {
    height: height * 0.5,
    width: width * 0.85,
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor:"red"
  },
  TrImg: {
    height: height * 0.6,
    width: width * 0.7,
  },
});
