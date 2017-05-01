import React from 'react'

import {
  Button,
} from 'react-native'

export interface Props {
    back: () => void,
}

export const Login = (props: Props) => {
    return (
      <Button
              onPress={props.back}
              title="BACK"/>
    );
  }