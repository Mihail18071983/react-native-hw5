// import React, { useState, useRef, useEffect } from "react";

// import { Entypo } from "@expo/vector-icons";

// import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { Camera, CameraType } from "expo-camera";

// const CreatePostScreen = () => {
//   // const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();
//   const [camera, setCamera] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [startCamera, setStartCamera] = useState(null);
//   const cameraRef = useRef();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }
//       const location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   //     function toggleCameraType() {
//   //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//   // }

//   const takePhoto = async () => {
//     try {
//       const photo = await cameraRef.takePictureAsync();
//       console.log("photo", photo);
//     } catch (err) {
//       console.log(photo);
//     }
//   };

//   const __startCamera = async () => {
//     const { status } = await Camera.requestPermissionsAsync();
//     if (status === "granted") {
//       // start the camera
//       setStartCamera(true);
//     } else {
//       Alert.alert("Access denied");
//     }
//   };

//   return (
//     <>
//       { (
//         <View style={{ flex: 1 }}>
//           <Camera style={styles.camera} ref={cameraRef}>
//             {startCamera && (
//               <View style={styles.takePhotoContainer}>
//                 <Image
//                   source={{ uri: photo }}
//                   style={{ height: 50, width: 50 }}
//                 />
//               </View>
//             )}
//             <TouchableOpacity style={styles.snapWrapper} onPress={takePhoto}>
//               <Entypo name="camera" size={24} color="#BDBDBD" />
//             </TouchableOpacity>
//           </Camera>
//         </View>
//       )}
//     </>
//   );
// };

// export default CreatePostScreen;

// const styles = StyleSheet.create({
//   camera: {
//     height: 240,
//     marginHorizontal: 16,
//     marginTop: 32,
//     borderColor: "#E8E8E8",
//     borderWidth: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 8,
//   },

//   snapWrapper: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//   },

//   takePhotoContainer: {
//     position: "absolute",
//     top: 50,
//     left: 10,
//     borderColor: "#fff",
//     borderWidth: 1,
//   },
// });

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import { useEffect, useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
const CreatePostScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [startCamera, setStartCamera] = useState(null);
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
      <Text>{text}</Text>
      {startCamera ? (
        <>
          <Camera
            style={styles.camera}
            ref={cameraRef}
          >
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
    justifyContent: "center",
    borderRadius: 8,
  },

  snapWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
