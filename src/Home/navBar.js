/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Animated, Image, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');



type Props = {};
export default class NavBar extends Component<Props> {
  static defaultProps = {
    containerHeight: 120,
  }
  render() {
    return (
      <Animated.View style={[this.props.style, styles.container, { height: this.props.containerHeight,paddingTop: this.props.containerHeight - 90}]}>
        <Text style={styles.title}>Ocean Predators</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <TouchableOpacity ><Image
            source={require("../image/search.png")}
            style={styles.searchIcon}
          /></TouchableOpacity>
          <Image
            source={require("../image/avator.png")}
            style={styles.avator}
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width: width,
    // paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"


  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  avator: {
    marginLeft: 15,
    width: 36,
    height: 36,
    borderRadius: 18,
  }
});
