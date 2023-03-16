import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Platform,
} from "react-native";

import DefaultScreen from "./nestedSreens/DefaultScreen";

import MapScreen from "./nestedSreens/MapScreen";

import CommentScreen from "./nestedSreens/CommentsScreen";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const HomeTabsScreen = () => {
  return (
    <>
      <AuthStack.Navigator initialRouteName="default">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="default"
          component={DefaultScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Comments"
          component={CommentScreen}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default HomeTabsScreen;
