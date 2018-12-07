/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Animated, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";
const { height, width } = Dimensions.get('window');
let progressValue;
type Props = {};

export default class VideoList extends Component<Props> {

    static defaultProps = {
        ImageUrl: require("../image/defaultImage.png"),
        ListTitle: '',
        ListDetail: '',
        hanlePress: () => { },
    };
    // state = {
    //     progress :new Animated.Value(0)
    // }

    render() {
        // const opacityChange = progressValue.interpolate({
        //     inputRange: [0, start, end, 1],
        //     outputRange: ['1', '1', '0', '0'],
        // });
        // console.log(this.state.progress)

        let opacityChange;
        return (
            <View style={styles.detailContainer}>

                <Animated.View style={{ flex: 1, height: 110, paddingLeft: 40, opacity:opacityChange,}}>
                    <View style={{
                        backgroundColor: '#fff', borderRadius: 10, flex: 1,
                        paddingLeft: 75,
                        

                    }}>
                        <Transition shared={this.props.transitionContentID}
                             >
                            <Animated.View style={{
                                // opacity:opacityChange,
                                zIndex: 100,
                                paddingRight: 10, paddingLeft: 10,
                                paddingTop: 14, borderRadius: 10, backgroundColor: "#fff"
                            }}>
                                <Text ellipsizeMode={"tail"} numberOfLines={2} style={{ fontSize: 16, lineHeight: 20, color: "#0C0C0C", fontWeight: '800' }}>{this.props.ListTitle}</Text>
                                <Text ellipsizeMode={"tail"} numberOfLines={2} style={{ fontSize: 12, marginTop: 10, color: '#4A4A4A' }}>{this.props.ListDetail}</Text>
                            </Animated.View>
                        </Transition>
                    </View>
                </Animated.View>


                <View style={[{ flex: 1, position: 'relative' }, styles.detailImageContainer]}>
                    <TouchableOpacity onPress={this.props.hanlePress}>
                        <Transition shared={this.props.transitionImageID}

                        >
                            <Animated.Image
                                resizeMode="cover"
                                source={this.props.ImageUrl}
                                style={{
                                    width: 110, height: 90,
                                    borderRadius: 8,
                                }}

                            >
                            </Animated.Image>
                        </Transition>
                        <Image style={{
                            width: 40, height: 40, position: 'absolute', top: 25, left: 35
                        }} source={require('../image/startVideo.png')} ></Image>

                    </TouchableOpacity>

                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        marginTop: 20,
        marginLeft: 20, marginRight: 20,

        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowColor: 'rgba(38,40,42,.3)',
        backgroundColor: "rgba(0,0,0,0)"
    },
    detailImageContainer: {
        position: 'absolute', shadowColor: 'rgba(38,40,42,.3)',
        backgroundColor: '#f0f0f0',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        borderRadius: 8,
        shadowColor: 'rgba(38,40,42,.3)',
    }
});
