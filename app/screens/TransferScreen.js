import React, { Component } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from "react-native";

import { Icon } from "react-native-elements";

export default class TransferScreen extends Component {
  constructor(props) {
    super(props);
    const amountValue = 60;
    const balanceValue = 50;
    //this.amount = amountValue.toFixed(2);
    //this.balance = balanceValue.toFixed(2);
    this.state = {
      amount: amountValue.toFixed(2),
      balance: balanceValue.toFixed(2),
    };
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

  handlePressTransfer = () => {
    let value = parseFloat(this.state.balance) + parseFloat(this.state.amount);
    this.setState({
      balance: parseFloat(value).toFixed(2),
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
          <View style={styles.topLeftBox}></View>
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
          <View style={styles.bottomLeftBox}></View>
        </View>
        <View style={styles.bottomSection}>
          <Image
            style={styles.GIF}
            source={require("../assets/at-transfer-button2.gif")}
          />
          <Text style={styles.transferText} onPress={this.handlePressTransfer}>
            TRANSFER
          </Text>
        </View>
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
    fontSize: 28,
    fontWeight: "bold",
    opacity: 0.7,
  },
  GIF: {
    bottom: "18%",
    width: 350,
    height: 350,
    position: "absolute",
  },
});

//export default TransferScreen;
