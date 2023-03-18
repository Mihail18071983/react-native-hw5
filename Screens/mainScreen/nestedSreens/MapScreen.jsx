import React from "react";

import MapView, { Marker } from "react-native-maps";

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

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.488388,
        longitude: 35.001967,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
        }}
    >
      <Marker
        coordinate={{ latitude: 48.488388 , longitude: 35.001967 }}
        title="travel photo"
      />
    </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});