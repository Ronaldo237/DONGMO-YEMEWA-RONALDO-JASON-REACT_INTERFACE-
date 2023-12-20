import react from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity ,ScrollView } from "react-native";

const forms = () => {
    return (


        <View style={styles.containner}>


            <Image
                style={styles.img1}

                source={require('../assets/images/haut.png')}

            />
            <Image
                style={styles.img2}

                source={require('../assets/images/notifications.png')}

            />

            <View style={styles.box1}>
                <Text style={styles.text1}>Discorver Seasonal Fruits and Vegetables</Text>
            </View>

            <View style={styles.box2}>


                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Oranges </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Grape </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Pineapple </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Strave </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.box3}>

                <View style={styles.box4}>

                    <Image
                        style={styles.img2}

                        source={require('../assets/images/notifications.png')}

                    />
                    <Text style={styles.text2}>bonjour</Text>
                    <TouchableOpacity style={styles.btnOrange}>
                        <Text style={styles.btntext}>Oranges </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.box5}>

                    <Image
                        style={styles.img2}

                        source={require('../assets/images/notifications.png')}

                    />
                    <Text style={styles.text2}>bonjour</Text>
                    <TouchableOpacity style={styles.btnOrange}>
                        <Text style={styles.btntext}>Oranges </Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.box6}>
                <Text style={styles.text3}> Nearby Shop</Text>

          <View style ={styles.b}>

                <View style={styles.boxreduit}>

                    <Image
                        style={styles.imgreduit}

                        source={require('../assets/images/notifications.png')}

                    />
                    <Text style={styles.textreduit}>Xenter Shop  2356 Toltricon Street  9A_M - 7 P_M</Text>

                </View>

                <View style={styles.boxreduit1}>

                    <Image
                        style={styles.imgreduit}

                        source={require('../assets/images/notifications.png')}

                    />
                    <Text style={styles.textreduit}>Xenter Shop  2356 Toltricon Street  9A_M - 7 P_M</Text>

                </View>

                </View>

            </View>







        </View>
        
    );
}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        Width: 400,
        maxHeight: 800,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
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
    box1: {
        width: 300,
        height: 'auto',
        marginTop:45,
        marginLeft:8,

    },
    text1: {
        display: 'flex',
        color: '#000',
        fontSize: 20,
        marginBottom: 15,
        flexDirection: 'row',
    },
    box2: {
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        width: 50,
        height: 40,
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginLeft: 15,
        borderRadius: 25,
    },
    btntext: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    box3: {
        Width: 300,
        Height: 250,
        flexDirection: 'row',
    },
    box4: {
        margin: 15,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AE4F8A',
        borderRadius: 15,

    },
    box5: {
        margin: 15,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7C55A8',
        borderRadius: 15,

    },
    text2: {

    },
    btnOrange: {
        position: 'absolute',
        bottom: 1,
        margin: 15,
        backgroundColor: '#EA8C0F',
        width: 'auto',
        height: 'auto',
        borderRadius: 5,
    },
    box6: {
        width: 350,
        height: 120,
        backgroundColor: '#fff',
        flex: 1,
       
    },
    text3:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft:5,
        marginTop:8,
    },
    b:{
       width:350,
       height:110,
       backgroundColor:'white',
       flexDirection:'row',
       margin:15,
    },
    boxreduit: {
        justifyContent: 'center',
        margin: 15,
        width: 250,
        height: 70,
        backgroundColor: 'green',
        borderRadius: 15,
        flexDirection: 'row',

    },
    boxreduit1: {
        justifyContent: 'center',
        margin: 15,
        width: 250,
        height: 70,
        backgroundColor: 'green',
        borderRadius: 15,
        flexDirection: 'row',
        

    },
    imgreduit: {

        width: 40,
        height: 40,
        backgroundColor: '#E6B0BE',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 5,
        borderRadius: 5,

    },
    textreduit: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 2,
        marginTop: 8,
        color: 'black',
    },


});

export default forms;