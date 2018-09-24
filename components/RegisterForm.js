import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from "react-native";

export default class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      username: "",
      email: "",
      password: "",
      re_password: ""
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter full name..."
          value={this.state.full_name}
          onChangeText={full_name => this.setState({ full_name })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter username..."
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter email..."
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Enter password..."
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Re-enter password..."
          value={this.state.re_password}
          onChangeText={re_password => this.setState({ re_password })}
        />

        <Button
          title="Go back"
          onPress={() => {
            this.props.changeView("root");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  },
  input: {
    padding: 15,
    margin: 10
  }
});
