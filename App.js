import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/photo-bg2x.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapperForm}>
              <View
                style={{
                  ...styles.form,
                  paddingBottom: setIsShowKeyboard ? 20 : 45,
                }}
              >
                <View>
                  <Text style={styles.title}>Регистрация</Text>
                </View>
                <View>
                  <TextInput
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    placeholder="Логин"
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                    style={styles.input}
                  />
                </View>
                <View>
                  <TextInput
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                    style={styles.input}
                  />
                </View>
                <View>
                  <TextInput
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    placeholder="Пароль"
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    secureTextEntry={true}
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                  style={styles.button}
                >
                  <Text style={styles.textButton}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 27,
  },
  input: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    color: "#212121",
  },
  wrapperForm: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingBottom: 45,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFFFFF",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
