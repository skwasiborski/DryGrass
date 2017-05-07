import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import { Login } from './login'
import { Sensors } from './sensors'
import { SensorDetails } from './sensorDetails'

import { DryGrassState, Page, getInitialState } from './stateHandling'

export default class DryGrass extends Component<undefined, DryGrassState> {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  goToPage(page: Page, pageParams?: any) {
    this.setState(Object.assign({}, this.state, { page: page, pageParams: pageParams }));
  }

  render() {
    let page: JSX.Element;
    switch (this.state.page) {
      case Page.login: {
        page = (
            <View style={styles.container}>
              <Login back={() => this.goToPage(Page.main)}/>
            </View>
          );
        break;
      }
      case Page.sensors: {
        page = (
              <Sensors goToMain={() => this.goToPage(Page.main)}
                       goToSensorDetails={r => this.goToPage(Page.sensorDetails, r)}
                       sensors={this.state.sensors}/>
          );
        break;
      }
      case Page.sensorDetails: {
        page = (
              <SensorDetails goToSensors={() => this.goToPage(Page.sensors)}
                             goToEdit={() => {}}
                             params={this.state.pageParams}/>
          );
        break;
      }
      case Page.main: {
        page = (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native! in TS
            </Text>
            <Button
              onPress={() => this.goToPage(Page.login)}
              title="Log in"
            />
            <Button
              onPress={() => this.goToPage(Page.sensors)}
              title="Sensors"
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