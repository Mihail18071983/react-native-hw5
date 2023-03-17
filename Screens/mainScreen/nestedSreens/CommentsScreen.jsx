import React from "react";
import { AntDesign } from '@expo/vector-icons';

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

const CommentScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>CommentScreen</Text>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("default");
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

export default CommentScreen;
