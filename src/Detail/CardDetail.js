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
const goBackPosition = height > 700 ? 50 : 30

export default class CardDetail extends Component {
    state = {
        blurTransition: new Animated.Value(0),
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.navigation.state.params.key)

        return (
            <View style={styles.container}>
                <Transition
                    //   shared={this.props.navigation.state.params.sharekey }
                    appear={"scale"} >
                    <View style={{ width: width, paddingLeft: 24, paddingRight: 24, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>


                        <Animated.Image
                            resizeMode={"cover"}
                            style={[styles.card, {
                                // transform:[{scale:2}],
                                width: width - 48, height: this.props.navigation.state.params.cardHeight / 3 * 2,
                            }]}
                            source={require("../image/sharkTitle.png")}
                        // source={this.props.navigation.state.params.imagesource}

                        />



                        {/* <View style={{ marginLeft: 20, }} >
                        <Text style={{ color: "rgba(38,40,42,1)", fontSize: 20, }}>
                            Hammer Shark
                         </Text>
                        <Text ellipsizeMode={"tail"} numberOfLines={7} style={{ top: 30, flexWrap: 'wrap', position: 'absolute', width: width - this.props.navigation.state.params.cardWidth / 2 - 72, color: "rgba(38,40,42,.7)", fontSize: 14, }}>
                            Sphyrnidae distribution map.svg
                     The hammerhead sharks are a group of sharks in the family Sphyrnidae, so named for the unusual and distinctive structure of their heads, which are flattened and laterally extended into a "hammer" shape called a cephalofoil. Most hammerhead species are placed in the genus Sphyrna, while the winghead shark is placed in its own genus, Eusphyra. Many, but not necessarily mutually exclusive, functions have been proposed for the cephalofoil, including sensory reception, manoeuvering, and prey manipulation. Hammerheads are found worldwide in warmer waters along coastlines and continental shelves. Unlike most sharks, hammerheads usually swim in schools during the day, becoming solitary hunters at night. Some of these schools can be found near Malpelo Island in Colombia, Galapagos Islands in Ecuador, Cocos Island off Costa Rica, and near Molokai in Hawaii. Large schools are also seen in the waters off southern and eastern Africa.
                      </Text>
                    </View> */}

                    </View>
                </Transition>
                {/* <View style={{marginLeft: 24, marginRight: 24,width:width - 48,marginTop:18, height:1, backgroundColor:"rgba(38,40,42,.1)",}}></View> 
                              */}
                 <Transition appear="bottom">
                 <View>



                      <View>
                    <View style={{ width: width, marginTop: 24, paddingLeft: 24, paddingRight: 24, flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center' }}>
                        <View style={{ height: 30,alignItems:'center',flexDirection: 'column', }} >
                            <Text style={[styles.tab, { color: "rgba(38,40,42,1" }]}>Introduction</Text>
                            <View style={{marginTop:8,height: 2, width: 30, backgroundColor: "#000", }}></View>
                        </View>
                        <View style={{ height: 30 }}><Text style={styles.tab}>Mission</Text></View>
                        <View style={{ height: 30 }}><Text style={styles.tab}>Version</Text></View>
                    </View>
                </View>
                <View style={{paddingLeft:24,paddingRight:24,}}>
                              <Text style={{marginTop:18,flexWrap:"wrap",color:"rgba(38,40,42,.6)",lineHeight:24, width:width-48,}}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.

Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </Text>
                </View>
                 </View>
               
             </Transition>

                <View style={{ position: 'absolute', top: 0, left: 0, height: 30, width: width, alignItems: 'center', justifyContent: 'center' }}>


                    <NavBack style={{ tintColor: "rgba(38,40,42,1)" }} handleOnpress={() => this.props.navigation.goBack()}> </NavBack>
                    <Text style={{ color: "rgba(38,40,42,1)", top: goBackPosition, fontSize: 20, fontWeihgt: 800 }}>Title</Text>
                </View>



            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingTop: goBackPosition + 50,


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

    },
    tab: {
        fontSize: 16, color: "rgba(38,40,42,.6)",
        marginRight: 20,
        textAlign:'center'
    }
})