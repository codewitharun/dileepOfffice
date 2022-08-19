import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screen/Splash/Splash";

import Drawer from "./Drawer";
import Login from "../Screen/Login/Login";
import Slogin1 from "../Screen/SocialLogin/Slogin1";
import SignUp from "../Screen/SignUp/SignUp";
import Details from "../Screen/Details/Details";

const rootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <rootStack.Navigator screenOptions={{ headerShown: false }}>
      <rootStack.Screen name="Splash" component={Splash} />
      <rootStack.Screen name="Slogin" component={Slogin1} />
      <rootStack.Screen name="Drawer" component={Drawer} />
      <rootStack.Screen name="Login" component={Login} />
      <rootStack.Screen name="SignUp" component={SignUp} />
      <rootStack.Screen name="Details" component={Details} />
    </rootStack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
