export interface DryGrassState {
  page: Page,
  route?: string,
  houseName?: string,
  sensors?: Sensor[],
}

export interface Sensor {
  id: string,
  name: String,
  targetValue: number,
  values?: SensorValue[],
}

export interface SensorValue {
  value: number,
  plantId: string
  dateTime: Date,
}

export enum Page {
  main,
  login,
  sensors,
  sensorDetails,
}

export function getInitialState(): DryGrassState {
    return {
      page: Page.main,
      houseName: 'domek Ani i Sławka',
      sensors: [
        {
          id: 's1',
          name: 'Temperatura',
          targetValue: 15,
          values: [
            {value: 10, plantId: 'p1', dateTime: new Date('2015/06/17 12:00:00')},
            {value: 20, plantId: 'p1', dateTime: new Date('2015/06/17 00:00:00')},
          ]
        },
        {
          id: 's2',
          name: 'Wilgotność',
          targetValue: 8,
          values: [
            {value: 10, plantId: 'p2', dateTime: new Date('2015/06/17 13:00:00')},
            {value: 5, plantId: 'p2', dateTime: new Date('2015/06/17 00:00:00')},
          ]
        },
      ]
    };
}