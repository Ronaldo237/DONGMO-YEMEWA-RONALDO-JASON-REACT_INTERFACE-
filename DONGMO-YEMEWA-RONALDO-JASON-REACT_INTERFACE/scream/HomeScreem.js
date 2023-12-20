import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image
                    style={styles.img1}

                    source={require('../assets/images/haut.png')}

                />

                <Image
                    style={styles.img2}

                    source={require('../assets/images/notifications.png')}

                />
            </View>
            <view style={styles.box2}>
                <Text style={styles.text1}>My</Text>
            </view>

            <Text style={styles.text2}>Order</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <Image
                    source={require('../assets/photo.jpg')}
                    style={{ width: 50, height: 50, marginRight: 110, }}
                />

                <Text style={{ marginHorizontal: 10,fontSize:15,fontWeight:'bold',color:'black' }}>1X Orange  S10</Text>

                <Image
                    style={{ width: 50, height: 50, marginLeft: 95, }}

                    source={require('../assets/photo.jpg')}

                />

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                <Image
                    source={require('../assets/photo.jpg')}
                    style={{ width: 50, height: 50, marginRight: 110, }}
                />

                <Text style={{ marginHorizontal: 10,fontSize:15,fontWeight:'bold',color:'black' }}>1X Strawberry S12</Text>

                <Image
                    style={{ width: 50, height: 50, marginLeft: 90, }}

                    source={require('../assets/photo.jpg')}

                />

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <Image
                    source={require('../assets/photo.jpg')}
                    style={{ width: 50, height: 50, marginRight: 110, }}
                />

                <Text style={{ marginHorizontal: 10,fontSize:15,fontWeight:'bold',color:'black' }}>1X Green Apple S13</Text>

                <Image
                    style={{ width: 50, height: 50, marginLeft: 95, }}

                    source={require('../assets/photo.jpg')}

                />

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <Image
                    source={require('../assets/photo.jpg')}
                    style={{ width: 50, height: 50, marginRight: 110, }}
                />

                <Text style={{ marginHorizontal: 10,fontSize:15,fontWeight:'bold',color:'black' }}>1X Grape S15</Text>

                <Image
                    style={{ width: 50, height: 50, marginLeft: 95, }}

                    source={require('../assets/photo.jpg')}

                />

            </View>

            <view style={{display:'flex',marginTop:5,}}>
                
                    <Text style={{fontSize:25,fontWeight:'bold',color:'black',marginLeft:8}}>Total Price</Text>
                    <Text style={{fontSize:25,fontWeight:'bold',color:'black',marginLeft:200}}>$50</Text>
               
            </view>

            <View style={styles.box4}>

                <View style={{width:190,height:50,marginTop:30,marginLeft:120,backgroundColor:'violet',justifyContent:'center',alignItems:'center',borderRadius:10,}}>
                    <Text style={{fontSize:25,fontWeight:'bold',color:'white',}}>Payement</Text>
                </View>

            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    containner: {
        flex: 1,
        Width: 350,
        Height: 1000,
        backgroundColor: '#E4AA3D',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius:10,
    },
    box1: {
        flex: 1,
        textAlign: 'center',
        width: 400,
        height: 25,
    },
    img1: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 1,
        left: 0,
        marginLeft: 5,
        marginTop: 5,

    },
    img2: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 1,
        right: 0,
        marginRight: 5,
        marginTop: 5,
    },
    box2: {
        width: 100,
        height: 'auto',
        marginTop: 55,
    },
    text1: {
        marginTop: 5,
        marginLeft: 15,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    text2: {
        marginLeft: 12,
        marginTop: 5,
        fontSize: 25,
        color: '#black',
        fontWeight: 'bold',
    },
    box3: {
        width: 350,
        height: 350,
        marginTop: 25,
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    ligne: {
        width: 300,
        height: 100,
        flexDirection: 'row',
    },


    img3: {
        width: 40,
        height: 40,

    },
  





});

export default HomeScreem;