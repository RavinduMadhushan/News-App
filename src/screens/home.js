import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { LocalScreen } from "./local";
import { BreakingScreen } from "./breaking";
import { InternationalScreen } from "./international";
import { SportsScreen } from "./sports";

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "NewsApp",
    headerTintColor: "#000000",
    headerStyle: {
      backgroundColor: "#1976D2"
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };

  render() {
    const Tabs = createBottomTabNavigator(
      {
        Breaking: {
          screen: BreakingScreen
        },
        Local: {
          screen: LocalScreen
        },
        International: {
          screen: InternationalScreen
        },
        Sports: {
          screen: SportsScreen
        }
      },
      {
        initialRouteName: "Breaking"
      }
    );

    const Main = createAppContainer(Tabs);
    return <Main style={{ Color: "#4DD0E1" }} />;
  }
}
