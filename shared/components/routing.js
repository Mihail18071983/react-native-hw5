import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreens from '../../Screens/auth/RegistrationScreen'
import LoginScreen from "../../Screens/auth/LoginScreen";
import Home from '../../Screens/mainScreen/Home';
import PostScreen from "../../Screens/mainScreen/PostsScreen";
import CreatePostScreen from '../../Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from "../../Screens/mainScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import useAuth from "../hooks/useAuth";

export  const Routing = () => {
    const { isAuth } = useAuth();
   
  if (!isAuth) {
    return (
      <>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreens}
          />
        </AuthStack.Navigator>
      </>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          alignItems: 'center',
          justifyContent:'center',
          paddingHorizontal: 80,
          paddingVertical:20,
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
            <Feather name="log-out" size={24} color="#BDBDBD" />
          ),
          tabBarItemStyle: {height:40, borderRadius:20}
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
          tabBarItemStyle: {height:40, borderRadius:20}
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
          tabBarItemStyle: {height:40, borderRadius:20}
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};