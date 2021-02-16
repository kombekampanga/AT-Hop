import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  Modal,
} from "react-native";
import { Video } from "expo-av";
import { Icon } from "react-native-elements";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const accountBalance = require("../../card-balance.json");
    this.state = {
      balance: accountBalance.cardBalance.toFixed(2),
      shouldPlay: false,
      isLooping: false,
      modalOpen: false,
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

  exitModal = () => {
    this.setState({
      modalOpen: false,
    });
  };
  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  render() {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/tag-on-screen.png")}
      >
        <View style={{ right: "42%", bottom: "20%", opacity: 0.7 }}>
          <Icon
            name="reply"
            type="font-awesome-5"
            color="white"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>

        <Modal
          visible={this.state.modalOpen}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContent}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/popUp.png")}
            >
              <View style={{ left: "45%", top: 5 }}>
                <Icon
                  name="times"
                  type="font-awesome-5"
                  color="white"
                  onPress={this.exitModal}
                />
              </View>
              <View style={styles.cardDetailsButton}>
                <Button color="white" title="Card Details" raised />
              </View>
              <View style={styles.activateCardButton}>
                <Button color="white" title="Activate Card" raised />
              </View>
              <View style={styles.languageButton}>
                <Button color="white" title="Language" raised />
              </View>
            </ImageBackground>
          </View>
        </Modal>
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
            onPress={this.openModal}
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
  activateCardButton: {
    left: "5%",
    top: "35%",
    width: 170,
    height: 40,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
  },
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
  cardDetailsButton: {
    left: "5%",
    top: "20%",
    width: 200,
    height: 40,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
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
  languageButton: {
    left: "5%",
    top: "45%",
    width: 140,
    height: 40,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
  },
  modalContent: {
    height: "45%",
    width: "100%",
    borderRadius: 5,
    marginTop: "auto",
    alignSelf: "center",
    alignItems: "center",
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
