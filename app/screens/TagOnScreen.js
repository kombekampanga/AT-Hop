import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import { Video } from "expo-av";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const accountBalance = require("../../card-balance.json");
    this.state = {
      balance: accountBalance.cardBalance.toFixed(2),
      shouldPlay: false,
      isLooping: false,
    };
  }
  handleTagOnOffPress = () => {
    this.setState({
      shouldPlay: true,
      isLooping: true,
    });
  };

  handleTagOnOffRelease = () => {
    this.setState({
      shouldPlay: false,
      isLooping: false,
    });
  };

  handleTopUpPress = () => console.log("Register Pressed");

  render() {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/tag-on-screen.png")}
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
            title="Settings"
            raised
            onPress={this.handleTopUpPress}
          />
        </View>
        <TouchableWithoutFeedback
          onPressIn={this.handleTagOnOffPress}
          onPressOut={this.handleTagOnOffRelease}
        >
          <View style={styles.GIF}>
            <Video
              style={{ width: 280, height: 210, bottom: "15%", right: "20%" }}
              source={require("../assets/loaded-video-3.mp4")}
              shouldPlay={this.state.shouldPlay}
              isLooping={this.state.isLooping}
            />
          </View>
        </TouchableWithoutFeedback>
        {/* <Text style={styles.tapText}>TAP AND HOLD</Text>
          <Text style={styles.tapText}>HERE TO TAG ON</Text> */}
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
    top: "23%",
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
    left: "15%",
    width: 150,
    height: 50,
    backgroundColor: "#84AB3C",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 50,
  },
});
