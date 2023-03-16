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

import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useAuth from "../../../shared/hooks/useAuth";

import PostScreen from "../PostsScreen";

import CreatePostScreen from "../CreatePostsScreen";

import ProfileScreen from "../ProfileScreen";

const MainTab = createBottomTabNavigator();

const DefaultScreen = ({ navigation }) => {
  const { setIsAuth } = useAuth();

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Comments");
          }}
        >
          <Text>Comments</Text>
        </TouchableOpacity>
      </View>
      <MainTab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 83,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 80,
            paddingVertical: 20,
          },
        }}
      >
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="grid" size={size} color={color} />
            ),
            tabBarActiveBackgroundColor: "#FF6C00",
            tabBarActiveTintColor: "#FFFFFF",
            title: "Posts",
            headerRight: () => (
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => {
                  setIsAuth(false);
                }}
              />
            ),
            tabBarItemStyle: { height: 40, borderRadius: 20 },
          }}
          name="Posts"
          component={PostScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="plus" size={size} color={color} />
            ),
            tabBarActiveBackgroundColor: "#FF6C00",
            tabBarActiveTintColor: "#FFFFFF",
            title: "Create Post",
            tabBarItemStyle: { height: 40, borderRadius: 20 },
          }}
          name="Create"
          component={CreatePostScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="user" size={size} color={color} />
            ),
            tabBarActiveBackgroundColor: "#FF6C00",
            tabBarActiveTintColor: "#FFFFFF",
            headerShown: false,
            tabBarItemStyle: { height: 40, borderRadius: 20 },
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </MainTab.Navigator>
    </View>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    position: "relative",
    flex: 1,
  },
  buttonWrapper: {
    minWidth: 300,
    flex:1,
    position: 'absolute',
    top: 50,
    zIndex: 100,
    left:'10%',
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
