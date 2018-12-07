import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView
} from 'react-native';
import { Transition } from "react-navigation-fluid-transitions";
const { height, width } = Dimensions.get('window');
import NavBack from '../component/NavBack'


export default class CollapseExpandScreen extends Component {
  state = {
    animateOpacity: new Animated.Value(0),
    blurImageAniamtion: new Animated.Value(30),
    animatedScrollValue: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      // Animate value over time
      this.state.animateOpacity, // The value to drive
      {
        toValue: 1, // Animate to final value of 1
        duration: 1800,
      }
    ).start();
    Animated.timing(this.state.blurImageAniamtion, // The value to drive
      {
        toValue: 0, // Animate to final value of 1
        duration: 1200,
      }
    ).start();
  }

  render() {

    let scalevalue = this.state.animatedScrollValue.interpolate({
      inputRange: [-600, 0, 600],
      outputRange: [(1 + 600 / (width * 9 / 11) * 2), 1, 1],
    });
    letIamgeTop = this.state.animatedScrollValue.interpolate({
      inputRange: [-600, 0, 600],
      outputRange: [0, 0, -600],
    });

    return (
      <View style={styles.container}>

        <Transition shared={"image" + this.props.navigation.state.params.key} >
          <Animated.Image
            blurRadius={this.state.blurImageAniamtion}
            resizeMode="cover"
            source={require("../image/sharkanimation.gif")}
            style={{

              opacity: this.state.animateOpacity,
              width: width, height: width * 9 / 11,
              transform: [{ scale: scalevalue }]
              // borderTopLeftRadius: 10, borderTopRightRadius: 10,

            }}
          >
          </Animated.Image>

        </Transition>
        <View style={{ position: 'absolute', width: width, top: 0, left: 0, height: height, }}>
          <Animated.ScrollView style={{ flex: 1, paddingTop: 300, }}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.animatedScrollValue } } }],
              { useNativeDriver: false }
            )}
          >
            <View style={{ height: 860, backgroundColor: '#fff', borderRadius: 6, }} >
              <Transition shared={"content" + this.props.navigation.state.params.key}
              >
                <Animated.View style={{
                  opacity: this.state.animateOpacity,
                  marginTop: 10,
                  width: width,
                  paddingRight: 24, paddingLeft: 24,
                  paddingTop: 14, paddingBottom: 14, borderRadius: 10, backgroundColor: '#fff',
                  overflow: 'hidden',

                }}>

                  <Text ellipsizeMode={"tail"} numberOfLines={2} style={{ paddingRight: 18, fontSize: 20, lineHeight: 20, color: "#0C0C0C", fontWeight: '800' }}>{this.props.navigation.state.params.datas.title}</Text>
                  <Text ellipsizeMode={"tail"} numberOfLines={4} style={{ paddingRight: 18, fontSize: 12, marginTop: 10, color: '#4A4A4A' }}>{this.props.navigation.state.params.datas.detail}</Text>
                </Animated.View>
              </Transition>
              <Transition appear={"bottom"} >
                <View style={{ marginTop: 10, position: 'relative', width: width, paddingLeft: 24, paddingRight: 24, }} >
                  <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: "#0C0C0C", fontWeight: '800', textAlign: 'left' }}>Episodes</Text>
                  </View>
                  <ScrollView style={{ marginTop: 12,}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.ImageBannerSmall} source={require("../image/sharkDetail1.png")}></Image>
                    <Image style={styles.ImageBannerSmall} source={require("../image/sharkDetail2.png")}></Image>
                    <Image style={styles.ImageBannerSmall} source={require("../image/sharkDetail3.png")}></Image>
                  </ScrollView>


                  <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 24 }}>
                    <Text style={{ fontSize: 20, color: "#0C0C0C", fontWeight: '800', textAlign: 'left' }}>Hope You Like</Text>
                  </View>
                  <ScrollView style={{ marginTop: 12, }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.ImageBannerBig} source={require("../image/sharkAnimation1.gif")}></Image>
                    <Image style={styles.ImageBannerBig} source={require("../image/sharkAnimation2.gif")}></Image>
                  </ScrollView>
                </View>

              </Transition>
            </View>
            {/* </View> */}
            {/* <View style={{ width: width, height: 300, backgroundColor: '#fff' }}></View> */}
          </Animated.ScrollView>
        </View>
        <NavBack handleOnpress={() => this.props.navigation.goBack()}/>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start'

  },
  textButton: {
    width: 30,
    height: 30,
    // lineHeight: 60,

  },
  ImageBannerSmall: { width: 240, height: 100,marginRight:12, backgroundColor: "#f0f0f0", borderRadius: 6, },
  ImageBannerBig: { width: 240, height: 180, marginRight: 12, backgroundColor: "#f0f0f0", borderRadius: 6, }
})