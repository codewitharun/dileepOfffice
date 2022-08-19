import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import React, { Profiler } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Settings from '../Screen/Settings/Settings';
// import Stacking from '../Screen/Stacking/Stacking';
// import Trade from '../Screen/Trade/Trade';
// import Market from "../Screen/Market/Market"
// import Wallet from "../Screen/Wallet/Wallet"
// import Home from '../Screen/Home/Home';
const { height, width } = Dimensions.get("window");
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImagePath } from "../Utils/ImagePath";
import { FONTS } from "../Utils/FontFamily";
import Login from "../Screen/Login/Login";
import Details from "../Screen/Details/Details";
import History from "../Screen/History/History";
import SignUp from "../Screen/SignUp/SignUp";
// import Slogin1 from "../Screen/Slogin1/Slogin1";
import Slogin1 from "../Screen/SocialLogin/Slogin1";
import Volunteer from "../Screen/Volunteer/Volunteer";
import Explore from "../Screen/Explore/Explore";
import SetLoc from "../Screen/SetLocation/SetLoc";
// import Splash from "../Screen/Splash/Splash";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        position: "absolute",
        tabBarStyle: {
          position: "absolute",
          height: height / 10,
          height: height * 0.09,
          backgroundColor: "black",
          width: width,
          alignItems: "center",
          // borderTopLeftRadius: height / 30,
          // borderTopRightRadius: height / 30,
          borderColor: "red",
          borderTopWidth: 0,
          bottom: -height * 0.0,
        },
        tabBarStyle: { display: "none" },
      }}
    >
      {/* ************ Explore Tab ************ */}
      <Tab.Screen
        name="Details"
        component={Details}
        // component={DrawerRoutes}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEOFF}
                  resizeMode="contain"
                  style={styles.image}
                  // style={{ height}}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        // component={DrawerRoutes}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEOFF}
                  resizeMode="contain"
                  style={styles.image}
                  // style={{ height}}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Volunteer"
        component={Volunteer}
        // component={DrawerRoutes}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEOFF}
                  resizeMode="contain"
                  style={styles.image}
                  // style={{ height}}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Slogin"
        component={Slogin1}
        // component={DrawerRoutes}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.HOMEOFF}
                  resizeMode="contain"
                  style={styles.image}
                  // style={{ height}}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
        }}
      />

      {/* ************ Auctions Tab ************ */}
      {/* <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.MARKETON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Market
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.MARKETOFF}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Market
                </Text>
              </View>
            ),
        }}
      /> */}

      {/* ************ Collections Tab ************ */}
      <Tab.Screen
        name="History"
        // component={CollectionsStackScreen}
        component={History}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.TRADEON}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Trade
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.TRADEOFF}
                  resizeMode="contain"
                  style={[styles.image]}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Trade
                </Text>
              </View>
            ),
        }}
      />

      {/* ************ Wallet Tab ************ */}
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.STACKINGON}
                  resizeMode="contain"
                  style={[styles.img]}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Stacking
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.STACKINGOFF}
                  resizeMode="contain"
                  style={[styles.image]}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Stacking
                </Text>
              </View>
            ),
        }}
      />

      {/* ************ Profile Tab ************ */}
      <Tab.Screen
        name="Profile"
        component={SetLoc}
        // component={EditProfile}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.WALLETON}
                  resizeMode="contain"
                  style={[styles.img]}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#EAB73B",
                    fontSize: height / 65,
                  }}
                >
                  Wallet
                </Text>
              </View>
            ) : (
              <View style={styles.TabImageContainer}>
                <Image
                  source={ImagePath.WALLETOFF}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: "#929292",
                    fontSize: height / 65,
                  }}
                >
                  Wallet
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  img: {
    height: height * 0.05,
    width: width * 0.06,
  },
  image: {
    height: height * 0.05,
    width: width * 0.06,
  },
  TabImageContainer: {
    height: height * 0.08,
    width: width * 0.15,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red"
  },
});
