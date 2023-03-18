import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as Location from "expo-location";
import { useEffect, useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CreatePostScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [startCamera, setStartCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const makePhoto = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    console.log("photo :>> ", photo);
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("Posts", { photo });
  };

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  return (
    <>
      {/* <Text>{text}</Text> */}
      {startCamera ? (
        <>
          <Camera style={styles.camera} ref={cameraRef}>
            {photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 150, width: 150, borderRadius: 10 }}
                />
              </View>
            )}
            <TouchableOpacity style={styles.snapWrapper} onPress={makePhoto}>
              <Entypo name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Input something..."
                style={{ borderBottomColor: "black", backgroundColor: "white" }}
                onChangeText={(value) => {
                  console.log(value);
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}

      { photo && (
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishButtonText} onPress={sendPhoto}>
            Publish
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
export default CreatePostScreen;

const styles = StyleSheet.create({
  camera: {
    height: 240,
    marginHorizontal: 16,
    marginTop: 32,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 8,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  snapWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  publishButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  publishButtonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
