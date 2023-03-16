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

const CommentScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>CommentScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("default");
        }}
      >
        <Text>goBack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentScreen;
