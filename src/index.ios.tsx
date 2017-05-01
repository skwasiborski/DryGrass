/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import { Login } from './login.ios'

export interface DryGrassState {
  route?: string,
  showText: boolean
}

export default class DryGrass extends Component<undefined, DryGrassState> {
  constructor(props) {
    super(props);
    this.state = { showText: true, route: 'main' };
  }

  goToLogin() {
    this.setState(Object.assign({}, this.state, { route: 'login' }));
  }

  goToMain() {
    this.setState(Object.assign({}, this.state, { route: 'main' }));
  }

  render() {
    let page: JSX.Element;
    switch (this.state.route) {
      case 'login': {
        page = (
            <View style={styles.container}>
              <Login back={() => this.goToMain()}/>
            </View>
          );
        break;
      }
      case 'main': {
        page = (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native! in TS
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Button
              onPress={() => this.goToLogin()}
              title="Log in"
            />
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
        );
        break;
      }
      default: throw new Error('unkonown route');
    }

    return page;
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('DryGrass', () => DryGrass);