import React, { Component } from "react";
import { View, Text } from "native-base";

export class BreakingScreen extends Component {
  static navigationOptions = {
    title: "Breaking News",
    headerTintColor: "#000000",
    headerStyle: {
      backgroundColor: "#1976D2"
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };
  state = {
    data: {}
  };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View>
        <Text>{this.state.data.body}</Text>
      </View>
    );
  }
}
