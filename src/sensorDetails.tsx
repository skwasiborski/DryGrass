import React from 'react'

import {
  Button,
  View,
  ListView,
  Text
} from 'react-native'

import { Sensor, SensorValue } from './stateHandling'

export interface Props {
    params: {sensor: Sensor, isEdit: boolean}
    goToSensors: () => void,
    goToEdit: () => void,
}

export const SensorDetails = (props: Props) => {
  return (
    <View style={{padding: 25}}>
      <Button
          onPress={props.goToSensors}
          title="Go To Sensors"
      />
      <Text>{`${props.params.sensor.id}:${props.params.sensor.name}`}</Text>
      <ListView
          dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id}).cloneWithRows(props.params.sensor.values)}
          renderRow={(value: SensorValue) =>
                      <Text>{`${value.dateTime}:\n${value.plantId}->${value.value}`}</Text>
              }
      />
    </View>
  );
}