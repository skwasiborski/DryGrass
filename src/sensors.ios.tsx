import React from 'react'

import {
  ListView,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native'

import { Sensor } from './stateHandling'

export interface Props {
    sensors: Sensor[],
    goToSensorDetails: (route: any) => void,
    goToMain: () => void,
}

export const Sensors = (props: Props) => {
    return (
      <View style={{padding: 25}}>
        <Button
            onPress={props.goToMain}
            title="Go To Main"
        />
        <ListView
            dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}).cloneWithRows(props.sensors)}
            renderRow={(sensor: Sensor) =>
                    <TouchableHighlight onPress={() => props.goToSensorDetails({sensor: sensor, isEdit: false})}>
                        <Text>{sensor.name}</Text>
                    </TouchableHighlight>
                }
        />
      </View>
    );
  }