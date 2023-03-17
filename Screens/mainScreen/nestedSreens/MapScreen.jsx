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

const MapScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <TouchableOpacity onPress={()=>{navigation.navigate("default")}}>
                <Text>
                    goBack
                </Text>
</TouchableOpacity> */}
            <Text>MapScreen</Text>
        </View>
    )
}

export default MapScreen;

