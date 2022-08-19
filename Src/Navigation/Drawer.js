import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";
import { ImagePath } from "../Utils/ImagePath";
import { FONTS } from "../Utils/FontFamily";
const { height, width } = Dimensions.get("screen");

const Draw = createDrawerNavigator();

const Drawer = (props) => {
  function CustomDrawerContent({ navigation }) {
    return (
      //   <SafeAreaView style={{ width: width * 0.8, backgroundColor: "white" }}>
      //     <View style={styles.headerView}>
      //       <View style={styles.avatarView}>
      //         <View style={styles.imgView}>
      //           <Image
      //             source={ImagePath.AVATAR}
      //             resizeMode="contain"
      //             style={{ height: height * 0.13, width: width * 0.2 }}
      //           />
      //         </View>
      //         <View style={styles.nameVeiw}>
      //           <Text
      //             style={{
      //               marginLeft: width * 0.03,
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Vijay Shankar
      //           </Text>
      //           <Text
      //             style={{
      //               marginLeft: width * 0.03,
      //               fontFamily: FONTS.PoppinsRegular,
      //               color: "#FFFFFF",
      //               fontSize: height / 65,
      //             }}
      //           >
      //             ID : 4987391822
      //           </Text>
      //         </View>
      //         <View style={styles.verifyView}>
      //           <TouchableOpacity>
      //             <ImageBackground
      //               source={ImagePath.VERIFY}
      //               resizeMode="contain"
      //               style={{
      //                 height: height * 0.05,
      //                 width: width * 0.15,
      //                 justifyContent: "center",
      //                 alignItems: "center",
      //               }}
      //             >
      //               <Text
      //                 style={{
      //                   fontFamily: FONTS.PoppinsSemiBold,
      //                   color: "#FFFFFF",
      //                   fontSize: height / 75,
      //                 }}
      //               >
      //                 Verified
      //               </Text>
      //             </ImageBackground>
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //       <View style={styles.detailView}>
      //         <View style={styles.keyView}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 65,
      //             }}
      //           >
      //             Email
      //           </Text>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 65,
      //             }}
      //           >
      //             Mobile Number
      //           </Text>
      //         </View>
      //         <View style={styles.valueView}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#1E1E1E",
      //               fontSize: height / 75,
      //             }}
      //           >
      //             Vijayshankar@gmail.com
      //           </Text>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#1E1E1E",
      //               fontSize: height / 75,
      //             }}
      //           >
      //             4987391822
      //           </Text>
      //         </View>
      //       </View>
      //     </View>
      //     <ScrollView>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             KYC
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Add Bank Details
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Security
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Withdraw/Deposit History
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Add INR/Payment Method
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Fee Settings
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Trade Statement
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             About Us
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //       <View style={styles.optionView}>
      //         <TouchableOpacity style={styles.optionInside}>
      //           <Text
      //             style={{
      //               fontFamily: FONTS.PoppinsSemiBold,
      //               color: "#FFFFFF",
      //               fontSize: height / 55,
      //             }}
      //           >
      //             Logout
      //           </Text>
      //           <Image
      //             source={ImagePath.GO}
      //             resizeMode="contain"
      //             style={{ height: height * 0.02, width: width * 0.03 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //     </ScrollView>
      //   </SafeAreaView>
      <View
        style={{
          height: height * 1,
          width: width * 0.8,
          backgroundColor: "white",
        }}
      >
        <View>
          <ImageBackground
            source={require("../Images/nr.png")}
            style={{ height: height * 0.2, width: width * 0.8 }}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: -30,
              }}
            >
              <Image source={require("../Images/User/User.png")} />
              <Text style={{ top: 20, fontWeight: "bold" }}>Steve</Text>
            </View>
          </ImageBackground>
          <View style={{ height: height * 0.1 }}></View>
          <View style={{ height: height * 0.5 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../Images/home.png")} />
                <Text style={{ color: "black" }}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 10 }}
              >
                <Image source={require("../Images/profile.png")} />
                <Text style={{ color: "black" }}>Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Explore")}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 20 }}
              >
                <Image source={require("../Images/explore.png")} />
                <Text style={{ color: "black" }}>Explore</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("History")}>
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 30 }}
              >
                <Image source={require("../Images/history.png")} />
                <Text style={{ color: "black" }}>History</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Volunteer")}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 40 }}
              >
                <Image source={require("../Images/volunteer.png")} />
                <Text style={{ color: "black" }}>Volunteer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 50 }}
              >
                <Image source={require("../Images/profile.png")} />
                <Text style={{ color: "black" }}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../Images/contact.png")} />
                <Text style={{ color: "black" }}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ flexDirection: "row", alignItems: "center", top: 20 }}
              >
                <Image source={require("../Images/logout.png")} />
                <Text style={{ color: "black" }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#141414",
          width: "100%",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Draw.Screen
        screenOptions={{ headerShown: false }}
        name="BottomTab"
        component={BottomTab}
        {...props}
      />
    </Draw.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  headerView: {
    height: height * 0.23,
    width: width * 0.8,
    backgroundColor: "#3F3F3F",
    justifyContent: "center",
    alignItems: "center",
  },
  optionView: {
    height: height * 0.08,
    width: width * 0.8,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.005,
  },
  avatarView: {
    height: height * 0.13,
    width: width * 0.9,
    alignSelf: "center",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  detailView: {
    height: height * 0.08,
    width: width * 0.9,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    // backgroundColor: "pink"
  },
  imgView: {
    height: height * 0.13,
    width: width * 0.2,
    alignSelf: "center",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  nameVeiw: {
    height: height * 0.06,
    width: width * 0.5,
    alignSelf: "center",
    // backgroundColor: "pink",
    justifyContent: "space-between",
    // alignItems: "center"
  },
  verifyView: {
    height: height * 0.13,
    width: width * 0.2,
    alignSelf: "center",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  keyView: {
    height: height * 0.06,
    width: width * 0.45,
    alignSelf: "center",
    // backgroundColor: "green",
    justifyContent: "space-between",
    // alignItems: "center"
  },
  valueView: {
    height: height * 0.06,
    width: width * 0.45,
    alignSelf: "center",
    // backgroundColor: "grey",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  optionInside: {
    height: height * 0.08,
    width: width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    // backgroundColor: "grey",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
