/** @format */
import React, { Component } from 'react'
import {
  AppRegistry, Animated,
  Easing,
  Dimensions,
  Platform
} from 'react-native';
import Home from './src/Home/Home';
import CollapseExpandScreen from './src/Detail/CollapseExpandScreen'
import CardDetail from './src/Detail/CardDetail'
import { name as appName } from './app.json';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import CustomTransition from './src/CustomTransition';

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
      inputRange,
      outputRange: ([0, 1, 1]),
  });

  return {
      opacity,
      transform: [
          { scaleY }
      ]
  };
};

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

const transitionConfig = {
  duration: 750,
  easing: Easing.out(Easing.poly(4)),
  timing: Animated.timing,
  useNativeDriver: true,
};


// const AppNavigator = createStackNavigator({
//   Home: {
//       screen: Home
//   },
//   CollapseExpand: { screen: CollapseExpandScreen }
// }, {
//       headerMode: 'none',
//       navigationOptions: {
//           cardStack: {
//               gesturesEnabled: false
//           },
//           gesturesEnabled: false
//       },
//       gesturesEnabled: false,
//       transitionConfig: TransitionConfiguration,
//   });
const Navigator = FluidNavigator({
  Home: { screen: Home },
  videoDetail: { screen: CollapseExpandScreen },
  cardDetail:{ screen:CardDetail}
},{
  transitionConfig,
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: true,
    gestureResponseDistance: {
      horizontal: Dimensions.get('window').width,
      vertical: Dimensions.get('window').height,
    },
  },
});

class App extends Component{
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
 
console.disableYellowBox = true 


AppRegistry.registerComponent(appName, () => App);
