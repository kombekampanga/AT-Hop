import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import { Video } from "expo-av";

import * as FileSystem from "expo-file-system";

import { Icon } from "react-native-elements";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const accountBalance = this.props.route.params.myBalance;
    this.shouldPlayState = false;
    const defaultAmount = 5;
    this.state = {
      amount: defaultAmount.toFixed(2),
      balance: accountBalance,
      shouldPlay: false,
    };
  }

  //return the updated balance to the main tag on screen
  componentWillUnmount() {
    this.props.route.params.updateBalance(this.state.balance);
  }

  handleAmount = (text) => {
    if (isNaN(parseFloat(text))) {
      this.handleInvalidAmount();
    } else {
      this.setState({ amount: parseFloat(text).toFixed(2) });
    }
  };

  handleInvalidAmount = () => {
    Alert.prompt(
      "Top Up",
      "Invalid amount entered. Please enter a valid top up amount (e.g. 50)",
      (text) => {
        this.handleAmount(text);
      }
    );
  };

  handlePressAmount = () => {
    Alert.prompt("Top Up", "Please enter top up amount", (text) => {
      this.handleAmount(text);
    });
  };

  handleTransferPress = () => {
    let value = parseFloat(this.state.balance) + parseFloat(this.state.amount);
    const amount = 0;
    this.setState({
      shouldPlay: true,
      balance: parseFloat(value).toFixed(2),
      amount: amount.toFixed(2),
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.backButton}>
          <Icon
            name="reply"
            type="font-awesome-5"
            color="white"
            onPress={() => this.props.navigation.navigate("TagOn")}
          />
        </View>
        <View style={styles.topSection}>
          <View style={styles.topLeftBox}>
            <Image
              style={styles.visa}
              source={require("../assets/visa.png")}
            ></Image>
          </View>
          <View style={styles.topRightBox}>
            <Text style={styles.tableText} onPress={this.handlePressAmount}>
              ${this.state.amount}
            </Text>
            <Text style={styles.tableText2}>Add top up amount</Text>
          </View>
          <View style={styles.bottomRightBox}>
            <Text style={styles.tableText}>${this.state.balance}</Text>
            <Text style={styles.tableText2}>Current Balance</Text>
          </View>
          <View style={styles.bottomLeftBox}>
            <Image
              style={styles.hopCard}
              source={require("../assets/real-hop-card.png")}
            ></Image>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.handleTransferPress}>
          <View style={styles.bottomSection}>
            <Video
              style={styles.GIF}
              source={require("../assets/loading-video-1s.mp4")}
              shouldPlay={this.state.shouldPlay}
            />
            <Text style={styles.transferText}>TRANSFER</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
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
    bottom: "88%",
    right: "72%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#84AB3C",
    borderRadius: 50,
    position: "absolute",
  },
  bottomSection: {
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    top: "55%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomLeftBox: {
    borderColor: "black",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 30,
    bottom: "94%",
    left: "2%",
    width: "45%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRightBox: {
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 30,
    bottom: "46%",
    left: "47%",
    width: "51%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  tableText: {
    color: "darkgrey",
    fontSize: 40,
    fontWeight: "bold",
  },
  tableText2: {
    right: "-15%",
    bottom: "55%",
    color: "darkgrey",
    fontSize: 12,
    fontWeight: "bold",
  },
  topLeftBox: {
    borderColor: "black",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    top: "2%",
    left: "2%",
    width: "45%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  topRightBox: {
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 30,
    bottom: "46%",
    left: "47%",
    width: "51%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    backgroundColor: "white",
    top: "15%",
    width: "90%",
    height: "35%",
    borderRadius: 30,
    position: "absolute",
  },
  transferText: {
    bottom: "7%",
    color: "#84AB3C",
    fontSize: 20,
    fontWeight: "bold",
  },
  GIF: {
    bottom: "18%",
    width: 350,
    height: 350,
    position: "absolute",
  },
  visa: {
    width: 130,
    height: 84.5,
    position: "absolute",
  },
  hopCard: {
    width: 130,
    height: 78,
    position: "absolute",
  },
});

//export default TransferScreen;
