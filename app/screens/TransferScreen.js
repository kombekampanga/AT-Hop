import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
} from "react-native";

import { Icon } from "react-native-elements";

function TransferScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.backButton}>
        <Icon
          name="reply"
          type="font-awesome-5"
          color="white"
          onPress={() => navigation.navigate("TagOn")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C3C54",
  },
  backButton: {
    width: 100,
    height: 55,
    //flex: 0.1,
    bottom: "40%",
    right: "35%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#84AB3C",
    borderRadius: 50,
  },
});

export default TransferScreen;
