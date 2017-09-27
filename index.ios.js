

import React, { Component } from 'react';
import { AppRegistry,View} from 'react-native';

import App from './Root/Components/App'

export default class Homestay extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <App/>
      </View>
    );
  }
}
AppRegistry.registerComponent('Homestay', () => Homestay);
