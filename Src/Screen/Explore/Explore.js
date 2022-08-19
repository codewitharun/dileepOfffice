import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Nav from "./Nav";
const { height, width } = Dimensions.get("screen");
const Explore = (props) => {
  return (
    <View style={{ height: height * 1, width: width * 1 }}>
      <View style={{ height: height * 1, width: width * 1 }}>
        <View
          style={{
            width: width * 0.9,
            height: height * 0.1,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Image source={require("../../Images/icons/Menu/Menu.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../Images/icons/Share/Share.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{ resizeMode: "contain" }}
          source={require("../../Images/Map/Map.png")}
        />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
