import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image
                    style={styles.img1}

                    source={require('../assets/images/haut.png')}

                />
                <Text style={styles.text}>Product Detail </Text>
                <Image
                    style={styles.img2}

                    source={require('../assets/images/notifications.png')}

                />
            </View>
            <view style={styles.box2}>
                <Text style={styles.text1}>Juicy Orange</Text>
            </view>

            <Text style={styles.text2}>Swoet and Juicy</Text>

            <view style={styles.box3}>
                <Text style={styles.text3}>Lorem Ipsum is simply text of the printing and typesetting industry.Lorem Ipsum hos been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and </Text>
            </view>

            <View style={styles.box4}>

                <View style={styles.box5}>

                    <Image
                        style={styles.img1}

                        source={require('../assets/images/graphe.png')}

                    />

                </View>

                <View style={styles.box6}>
                    <Text style={styles.text4}>Find Nearest Store</Text>
                </View>

            </View>

            <View style={styles.box7}>

                <View style={styles.box8}>

                    <Image
                        style={styles.img3}

                        source={require('../assets/photo.jpg')}

                    />

                </View>

                <View style={styles.box9}>
                    <Text style={styles.text5}>Nutrition Facts </Text>
           
                    <Image
                        style={styles.img4}

                        source={require('../assets/images/graphe.png')}

                    />
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    containner: {
        flex: 1,
        Width: 400,
        Height: 1000,
        backgroundColor: '#E4AA3D',
        justifyContent: 'center',
        textAlign: 'center',
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
    text: {

        marginTop: 15,
        marginLeft: 90,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    box2: {
        width: 300,
        height: 'fitcontent',
        marginTop: 35,

    },
    text1: {
        marginTop: 35,
        marginLeft: 15,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    text2: {
        marginLeft: 12,
        marginTop: 5,
        fontSize: 15,
        color: '#E6B0BE',

    },
    box3: {
        width: 350,
        height: 100,
        marginTop: 15,
        marginLeft: 5,
    },
    text3: {
        marginLeft: 12,
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    box4: {
        marginTop: 25,
        marginLeft: 15,
        flex: 1,
        flexDirection: 'row',
        width: 300,
        height: 150,


    },
    box5: {
        width: 60,
        height: 60,
        borderColor: '#B73959',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 15,
    },
    img1: {
        width: 40,
        height: 40,
        borderColor: '#E6B0BE',
        marginTop: 8,
        marginLeft: 8,

    },
    box6: {
        marginLeft: 15,
        width: 190,
        height: 60,
        backgroundColor: '#B73959',
        borderRadius: 5,
        justifyContent: 'center',

    },
    text4: {
        justifyContent: 'center',
        marginLeft: 35,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    box7:{
       width:350,
       height:200,
       marginTop:15,
       backgroundColor:'white',
       marginLeft:5,
       borderRadius:15,
    },
    box8:{
        width:100,
        height:50,
        marginLeft:95,
        
    },
    img3:{
        width: 50,
        height: 50,
        position: 'absolute',
        top: 0,
        right: 0,
        marginRight: 5,
        marginBottom:25,  
    },
    box9:{
        flex:1,
        flexDirection:'column',
        width:350,
        height:90,
        
    },
    img4:{
        width:350,
        height:70,
    },
    text5:{
        
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:8,
        
    },
 

});

export default ProfileScreem;