import React from "react";
import { Button, ImageBackground, StyleSheet, View } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import TagOnScreen from "./TagOnScreen";

function HomeScreen(props) {
  const { portrait } = useDeviceOrientation();
  const handleLoginPress = () => console.log("Login Pressed");
  const handleRegisterPress = () => console.log("Register Pressed");

  if (portrait) {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/at-portrait.png")}
      >
        <View style={styles.loginButton}>
          <Button color="white" title="Login" onPress={handleLoginPress} />
        </View>
        <View style={styles.registerButton}>
          <Button
            color="white"
            title="Register"
            onPress={handleRegisterPress}
          />
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/at-landscape.png")}
      ></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#468DBC",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
  },
});

export default HomeScreen;
