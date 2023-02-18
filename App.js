import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import RegistrationScreens from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <>
      {/* <RegistrationScreens /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
