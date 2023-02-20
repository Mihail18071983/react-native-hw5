import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import RegistrationScreens from "./components/Screens/RegistrationScreen";
import LoginScreen from "./components/Screens/LoginScreen";

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
