import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("screen");
const Slogin1 = (props) => {
  return (
    <View style={{ height: height * 1, width: width * 1 }}>
      <View
        style={{
          height: height * 0.2,
          width: width * 0.8,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../../Images/Logo!/Logo1.png")} />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Drawer")}>
        <View
          style={{
            height: height * 0.25,
            width: width * 0.8,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../Images/Logo/Logo.png")} />
        </View>
      </TouchableOpacity>
      <View style={{ height: height * 0.1, width: width * 1 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.5,
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "#F26837",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.5,
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "#F26837",
              borderRadius: 4,
              top: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Drawer")}>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.5,
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "#0D65A0",
              borderRadius: 4,
              top: 35,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../Images/Vectorfb.png")}
              style={{ right: 4 }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Start via Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.5,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 4,
              top: 55,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <Image
              source={require("../../Images/Vector.png")}
              style={{ right: 4 }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Start via Apple
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slogin1;

const styles = StyleSheet.create({});
