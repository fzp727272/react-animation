import React, { Component } from 'react'

import {
    View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const { height, width } = Dimensions.get('window');
const goBackPosition = height > 700 ? 50 : 30


export default class NavBack extends Component {

  render() {
    return (
        <TouchableOpacity style={{
          zIndex: 100, paddingLeft: 18, position: 'absolute', left: 0, top: goBackPosition,
        }} 
       onPress={this.props.handleOnpress}>
          <Image source={require("../image/back.png")} style={[{width:30,height:30},this.props.style]}></Image>
         
        </TouchableOpacity>
    )
  }
}


