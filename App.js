import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import RegistrationScreens from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <>
      <RegistrationScreens />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
