import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  tabBarOptions
} from "react-navigation";
import { StyleSheet } from "react-native";
import LocalASNews from "./international";

import SportNews from "./sportnews";
import BreakingNews from "./breakingnews";

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "NewsApp",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#1976D2"
    },
    headerTitleStyle: {
      fontSize: 16
    }
  };

  render() {
    const Tabs = createBottomTabNavigator(
      {
        Local: {
          screen: LocalASNews
        },
        International: {
          screen: BreakingNews
        },
        Sports: {
          screen: SportNews
        }
      },
      {
        initialRouteName: "Local"
      },
      {
        tabBarOptions: {
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12
          },
          style: {
            backgroundColor: "#1976D2"
          }
        }
      }
    );

    const Main = createAppContainer(Tabs);
    return <Main />;
  }
}
