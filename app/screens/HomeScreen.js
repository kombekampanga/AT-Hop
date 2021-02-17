/*
TO DO
- Fix video that plays when transfer is made
*/
import React, { Component } from "react";
import { Button, ImageBackground, StyleSheet, View } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const accountBalance = require("../../card-balance.json").cardBalance;
    this.state = {
      balance: accountBalance.toFixed(2),
    };
  }

  updateBalance(value) {
    this.setState({
      balance: value,
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.Background}
        source={require("../assets/at-portrait.png")}
      >
        <View style={styles.loginButton}>
          <Button
            color="white"
            title="Login"
            onPress={() =>
              this.props.navigation.navigate("TagOn", {
                myBalance: this.state.balance,
                updateBalance: this.updateBalance.bind(this),
              })
            }
          />
        </View>
        <View style={styles.registerButton}>
          <Button
            color="white"
            title="Register"
            onPress={() =>
              this.props.navigation.navigate("TagOn", {
                myBalance: this.state.balance,
                updateBalance: this.updateBalance.bind(this),
              })
            }
          />
        </View>
      </ImageBackground>
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
