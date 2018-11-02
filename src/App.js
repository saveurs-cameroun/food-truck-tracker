import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// main navigator
import AppNavigator from "./navigation/AppNavigator";
import TruckPage from "./screens/TruckPage";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
