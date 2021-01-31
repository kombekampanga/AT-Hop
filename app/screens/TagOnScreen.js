import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from "react-native";

function TagOnScreen(props) {
  return (
    <ImageBackground
      style={styles.Background}
      source={require("../assets/at-tag-on.png")}
    >
      <View style={styles.GIF}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://media.giphy.com/media/DtfgzTxPw7pPq/giphy.gif",
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  GIF: {
    flex: 1,
    flexDirection: "column",
    top: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TagOnScreen;
