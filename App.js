import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/home";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
