import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AppTabNavigator} from './components/appTabNavigator';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  welcomeScreen: {screen: WelcomeScreen},
  bottomTab: {screen: AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({});