/*
TO DO
- Fix pop up window so the edges are rounded
- Find out how to dynamically change the font size to fit the screen
(maybe word length should be less than 40, if its more then reduce font size)
*/
import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Modal,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { Icon } from "react-native-elements";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const accountBalance = this.props.route.params.myBalance;
    this.state = {
      balance: accountBalance,
      shouldPlay: false,
      isLooping: false,
      modalOpen: false,
    };
  }

  componentWillUnmount() {
    this.props.route.params.updateBalance(this.state.balance);
  }

  updateBalance(value) {
    this.setState({
      balance: value,
    });
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
        <View style={{ right: "42%", bottom: "38%", opacity: 0.7 }}>
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
              onPress={() =>
                this.props.navigation.navigate("Transfer", {
                  myBalance: this.state.balance,
                  updateBalance: this.updateBalance.bind(this),
                })
              }
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
              style={{
                width: (2 * Dimensions.get("window").width) / 3,
                height:
                  (2 * Dimensions.get("window").width) / 3 -
                  Dimensions.get("window").width / 5,
                bottom: "15%",
                right: "17%",
              }}
              source={require("../assets/loaded-video-3.mp4")}
              shouldPlay={this.state.shouldPlay}
              isLooping={this.state.isLooping}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  activateCardButton: {
    left: "5%",
    top: "35%",
    width: Dimensions.get("window").width / 2 - 30,
    height: 40,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
  },
  Background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    top: Dimensions.get("window").height / 2.5,
    width: Dimensions.get("window").width / 2,
    height: 50,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  cardDetailsButton: {
    left: "5%",
    top: "20%",
    width: Dimensions.get("window").width / 2,
    height: 40,
    backgroundColor: "#84AB3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
  },
  content: {
    bottom: "21%",
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
    width: Dimensions.get("window").width / 2 - 60,
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
    borderRadius: 15,
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
    top: -1 * (Dimensions.get("window").width / 6.9),
    position: "absolute",
    color: "white",
    fontWeight: "500",
  },
  TopUpText: {
    color: "white",
    fontSize: Dimensions.get("window").width / 11,
    fontWeight: "bold",
  },
  ToUpButton: {
    left: "18%",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 8.3,
    backgroundColor: "#84AB3C",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 50,
  },
});
