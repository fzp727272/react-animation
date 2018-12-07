/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, StatusBar, Dimensions, Animated, } from 'react-native';
import NavBar from './navBar';
import CardSwipeWithBackground from './cardSwipeWithBackground';
import VideoList from './videoList'

const { height, width } = Dimensions.get('window');

const cardTop = height>700?120:105

const imageDate = [
    require('../image/card2.png'), require('../image/card3.png'), require('../image/card1.png')
];

const listDate = [
    {
        imagesource: require('../image/videoAvator.jpg'),
        title: "MASSIVE Hammerhead Shark in Bahamas!",
        detail: "Follow Mark Vins on Instagram - http://bit.ly/realmarkvins Please SUBSCRIBE - http://bit.ly/BlueWilderness Watch More"
    },
    {
        imagesource: require('../image/biggestShark.png'),
        title: "TOP 10 BIGGEST SHARKS IN THE WORLD",
        detail: "Some sharks reach gigantic sizes, such as the famous megalodon and, like this one, there are others that make up the Top 10 of"
    },
    {
        imagesource: require('../image/tigerShark.png'),
        title: "Tiger Shark FACE-OFF! ",
        detail: "Follow Mark Vins on Instagram - http://bit.ly/realmarkvins Please SUBSCRIBE - http://bit.ly/BlueWilderness Watch More"
    }

];

export default class App extends Component<Props> {
    state = {
       
        scrollY: new Animated.Value(0)


    }
    _handleOnScroll(offset) {

    }
    _handleVerticalOnScroll(nativeEvent) {
        this.setState({
            scrollY: new Animated.Value(nativeEvent.contentOffset.y)
        });
    }

    render() {
        let topChange = this.state.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -100],
            extrapolate: 'clamp',
        })
        let topOpacity= this.state.scrollY.interpolate({
            inputRange: [0, 60],
            outputRange: [1,0],
            extrapolate: 'clamp',
        })
        return (
            <View style={styles.container}>
                {/* <StatusBar
          barStyle={'dark-content'} /> */}
                <NavBar containerHeight={cardTop} style={{ top: topChange ,opacity:topOpacity}} 
                 />
                <CardSwipeWithBackground
                   navigation={this.props.navigation}
                   cardTop={cardTop  }
                    cardHeight={320}
                    imageDate={imageDate}
                    backgroundBlur={26}
                    verticalScroll={true}
                    verticalScrollFun={this._handleVerticalOnScroll.bind(this)}
                    cardOnScroll={(offset) => this._handleOnScroll(offset)} >
                    <View style={{ paddingLeft: 24, paddingRight: 24, marginTop: -40, flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#fff", fontSize: 18, }}>See Movie</Text>
                        <Text style={{ color: "#fff", opacity: .7, fontSize: 12 }}>View More </Text>
                    </View>
                    {

                       listDate.map((data, key) => {
                        return<VideoList
                            key = {key}
                            ImageUrl={data.imagesource}
                            ListTitle={data.title}
                            ListDetail={data.detail}
                            hanlePress={() =>this.props.navigation.navigate('videoDetail',{ datas: data,key:key})}
                            transitionImageID={`image${key}`}
                            transitionContentID={`content${key}`}
                             />
                        })
                    }

                   
                </CardSwipeWithBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 0,
        paddingLeft: 0,
        justifyContent: 'flex-start',
    },
});
