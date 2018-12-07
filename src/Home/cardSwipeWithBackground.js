/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, StatusBar, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import { Transition } from "react-navigation-fluid-transitions";
const { height, width } = Dimensions.get('window');


type Props = {};

export default class CardSwipeWithBackground extends Component<Props> {
  static defaultProps = {
    cardWidth: 240,
    backgroundBlur: 10,
    cardTop: 120,
    maskImage: require("../image/mask.png"),
    verticalScroll:false,
    cardOnScroll:()=>{},
    verticalScrollFun:()=>{}
  };

  state = {
    animatedScrollValue: new Animated.Value(0),
    beginScrollX: 0
  };


  _handleOnScrollBeginDrag(event) {
    // this.cardOnScroll()
    this.setState({
      beginScrollX: event.nativeEvent.contentOffset.x
    })
  }
  _handleOnScrollEnd(event) {
    let currentOffset = event.nativeEvent.contentOffset.x;
    let distance = currentOffset - this.state.beginScrollX;
    if (currentOffset > 0) {
      if (distance >= 0) {
        if (distance < this.props.cardWidth / 3) {
          this.refs._scrollView.getNode().scrollTo({ x: this.state.beginScrollX, animated: true })
        } else {
          this.refs._scrollView.getNode().scrollTo({ x: this.state.beginScrollX + (this.props.cardWidth + 30), animated: true })
        }
      } else {
        if (distance > this.props.cardWidth / 3) {
          this.refs._scrollView.getNode().scrollTo({ x: this.state.beginScrollX, animated: true })
        } else {
          this.refs._scrollView.getNode().scrollTo({ x: this.state.beginScrollX - this.props.cardWidth - 30, animated: true })
        }
      }
    }
    
  }
  _handleScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x
    this.props.cardOnScroll(offsetX)
  }
  // _handleOpressCard(key){
  
  // }
  componentDidMount() {

  }




  render() {

    let opacityCards = this.props.imageDate.map((value, key) => {
      let distance = this.props.cardWidth + 30;
      let value0 = distance * (key + 1) - distance * 2;
      let value1 = distance * (key + 1) - distance;
      return (this.state.animatedScrollValue.interpolate({
        inputRange: [value0, value1, distance * (key + 1)],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp',
      }))
    });


    return (
      <View style={[this.props.style, styles.container]}>
        {this.props.imageDate.map((value, key) => {
          return <Animated.Image key={key} resizeMode={"cover"} style={[styles.backGroundImage, { opacity: opacityCards[key] }]} source={this.props.imageDate[key]} blurRadius={0} />
        })}
        <BlurView blurType="light" blurAmount={this.props.backgroundBlur} style={{ width: width, height: height + 30, position: 'absolute', top: -30 }}></BlurView>

        <Animated.Image style={[styles.gradient]} source={this.props.maskImage} />
        <View style={{}}>
        <Animated.ScrollView style={{ flex:1  }}
          scrollEventThrottle={10}
          onScroll={({ nativeEvent }) => this.props.verticalScrollFun(nativeEvent)}
          scrollEnabled={this.props.verticalScroll}
          >
          <Animated.ScrollView
            ref="_scrollView"
            horizontal={true}
            onScrollBeginDrag={event => this._handleOnScrollBeginDrag(event)}
            onScrollEndDrag={event => this._handleOnScrollEnd(event)}
            scrollEventThrottle={10}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.state.animatedScrollValue } } }],
              {
                useNativeDriver: false,
                listener: event => {
                  this._handleScroll(event)
                },
              },
            )}

            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 0, paddingTop: this.props.cardTop, paddingBottom: 60 }}
          >

            {this.props.imageDate.map((value, key) => {
                  // console.log("cardContent"+key)
              return (
            
              <View key={key} style={styles.cardContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('cardDetail',{sharekey:`cardContent${key}`,imagesource:this.props.imageDate[key],cardWidth: this.props.cardWidth,cardHeight:this.props.cardHeight})}>
              <Transition 
               shared={`cardContent${key}`}
              // disappear={"bottom"}
              >
                <Animated.Image 
                resizeMode={"cover"} 
                style={[styles.card, { width: this.props.cardWidth, height: this.props.cardHeight, marginLeft: 30 }]} 
                source={this.props.imageDate[key]} />
                 </Transition>
                </TouchableOpacity>
              </View>
             )

            })}
          </Animated.ScrollView>
          {this.props.children}
        </Animated.ScrollView>
        </View>
        {/* <View style={{ backgroundColor: 'blue', position: 'absolute', width: width }} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backGroundImage: {
    width:width,
    height:height,
    position: 'absolute',
    backgroundColor: "#000",
  },
  gradient: {
    width: width,
    height: height,
    position: 'absolute',
    bottom: 0,
    opacity: 1
  },
  cardContainer: {
    borderRadius: 10,
    shadowColor: 'rgba(38,40,42,.6)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  card: {
    borderRadius: 10,

    // shadowOffset: { width: 10, height: 10 },
    // shadowRadius: 20,

  }
});
