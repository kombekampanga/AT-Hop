import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Video,
  Text,
} from "react-native";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const accountBalance = require("../../card-balance.json");
    this.state = {
      balance: accountBalance.cardBalance.toFixed(2),
    };
  }
  handleTopUpPress = () => console.log("Register Pressed");

  render() {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/at-tag-on.png")}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            BALANCE: <Text style={styles.TopUpText}>${this.state.balance}</Text>
          </Text>

          <View style={styles.ToUpButton}>
            <Button
              color="white"
              title="TOP UP"
              raised
              onPress={() => this.props.navigation.navigate("Transfer")}
            />
          </View>
        </View>

        <View style={styles.bottomButton}>
          <Button
            color="white"
            title="Change Cards"
            raised
            onPress={this.handleTopUpPress}
          />
        </View>

        <View style={styles.GIF}>
          <Image
            style={{ width: 180, height: 160, top: "18%", left: "6%" }}
            source={require("../assets/at-tag-on-button.gif")}
          />
          <Text style={styles.tapText}>TAP AND HOLD</Text>
          <Text style={styles.tapText}>HERE TO TAG ON</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    right: "23%",
    top: "18%",
    width: 210,
    height: 50,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  content: {
    flex: 0.4,
    right: "5%",
  },
  GIF: {
    left: "27%",
    top: "48%",
    position: "absolute",
  },
  tapText: {
    bottom: "84%",
    left: "5%",
    color: "darkgrey",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    opacity: 0.5,
  },
  text: {
    top: -60,
    position: "absolute",
    color: "white",
    fontWeight: "500",
  },
  TopUpText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  ToUpButton: {
    width: 210,
    height: 50,
    backgroundColor: "#84AB3C",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 50,
  },
});
