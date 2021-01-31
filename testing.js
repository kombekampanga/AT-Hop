import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  const handleTextPress = () => console.log("Text Pressed");
  const handleImagePress = () => console.log("Image Pressed");
  const handleButtonPress1 = () =>
    Alert.alert("My Title", "My message", [
      { text: "Yes", onPress: () => console.log("Yes Pressed") },
      { text: "No", onPress: () => console.log("No Pressed") },
    ]);

  const handleButtonPress2 = () =>
    Alert.prompt("My Title", "My message", (text) => console.log(text));
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
  {
    /* <View
        style={{
          backgroundColor: "dodgerblue",
          width: landscape ? "100%" : "50%",
          height: landscape ? "100%" : "30%",
        }}
      ></View> */
  }
  {
    /* <Button color="pink" title="Click Me" onPress={handleButtonPress2} /> */
  }
  {
    /* <Text onPress={handleTextPress}>Hello Kombe</Text>
      <TouchableHighlight onPress={handleImagePress}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/200",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" /> */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
