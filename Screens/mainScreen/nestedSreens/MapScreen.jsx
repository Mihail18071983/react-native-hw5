import React from "react";

import { useState, useEffect } from "react";

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

const MapScreen = ({ route } ) => {

  const { location } = route.params
  console.log('location in maps',location)
  const [region, setRegion] = useState(null);

  useEffect(() => {
    if (location) {
      setRegion(location);
     
    }
  }, [location]);

  //  console.log(region)

  // const getInitialState = () => {
  //   return {
  //     region: {
  //       latitude: 48.488388,
  //       longitude: 35.001967,
  //       latitudeDelta: 0.001,
  //       longitudeDelta: 0.001,
  //     },
  //   };
  // };
  const onChangeRegion = () => {
    setRegion(region);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        onRegionChange={onChangeRegion}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
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
