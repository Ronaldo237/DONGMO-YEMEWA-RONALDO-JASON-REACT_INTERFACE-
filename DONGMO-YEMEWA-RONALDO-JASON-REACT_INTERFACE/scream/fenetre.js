import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


const fenetre = () => {
    return (
        <View style={{ backgroundColor: '#85BC98', alignItems: 'center' }}>

            <view style={{ width: 350, height: 580, backgroundColor: 'white', borderRadius: 25 }}>

                <view style={{}}>
                    <Image

                        source={(require('../assets/photo.jpg'))}
                        style={{ width: 20, height: 20, borderRadius: 50, position: 'absolute', top: 9, right: 480, marginTop: 25, marginRight: 15 }}
                    />

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 20, height: 20, borderRadius: 35, position: 'absolute', top: 9, right: 520, marginTop: 25, marginRight: 15, backgroundColor: 'white' }}
                    />

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 20, height: 20, borderRadius: 35, position: 'absolute', top: 9, marginTop: 25, marginLeft: 15, backgroundColor: 'white' }}
                    />



                </view>

                <view style={{ width: 290, marginTop: 50, display: 'flex', height: 150, backgroundColor: '#85BC98', top: 20, right: 505, position: 'absolute', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 130, height: 130, borderRadius: 5, backgroundColor: 'white', marginRight: 15 }}
                    />

                </view>
                <view style={{ marginTop: 50, position: 'absolute', top: 190, right: 505, width: 290 }}>


                    <view style={{ display: 'flex', flexDirection: 'row' }}>

                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <view style={{ width: 100, height: 30, borderStyle: 1, borderColor: 'green' }}>
                                <TouchableOpacity style={{ display: 'flex', marginleft: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                    <Text style={{ fontWeight: 'bold', color: '#06E122', fontSize: 15 }}>Vegetables </Text>
                                </TouchableOpacity>
                            </view>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Broccoli</Text>
                            <Text style={{}}>approx 100 gm</Text>
                        </view>
                        <view style={{ display: 'flex', flexDirection: 'row', marginTop: 30, marginLeft: 110 }}>
                            <Image

                                source={(require('../assets/Images/notifications.png'))}
                                style={{ width: 20, height: 20, borderRadius: 35, backgroundColor: 'white', }}
                            />
                            <Text style={{ fontSize: 15, marginHorizontal: 5, fontWeight: 'bold', color: 'black' }}>1</Text>
                            <Image

                                source={(require('../assets/Images/notifications.png'))}
                                style={{ width: 20, height: 20, borderRadius: 35, backgroundColor: 'white', }}
                            />
                        </view>

                    </view>

                </view>

                <view style={{ backgroundColor: 'black', width: 290, height: 1, position: 'absolute', top: 318, right: 505 }} />
                <view style={{ position: 'absolute', top: 320, right: 505, width: 290, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 40, marginBottom: 8, height: 40, borderRadius: 5, backgroundColor: '#048815', }}
                    />

                    <view style={{ display: 'flex', flexDirection: 'column', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', }}>Agrifarm Inc</Text>
                        <Text style={{}}>F5RJ+FJF, Chairtakol</Text>
                    </view>

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 20, height: 20, borderRadius: 35, backgroundColor: '#048815', marginleft: 90 }}
                    />
                    <Text style={{}}>F5RJ+FJF</Text>

                </view>
                <view style={{ backgroundColor: 'black', width: 290, height: 1, position: 'absolute', top: 380, right: 505 }} />

                <view style={{ position: 'absolute', top: 370, marginTop: 35, right: 505, width: 299, height: 100, display: 'flex', flexDirection: 'column', }}>

                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', }}>Description</Text>
                    <Text style={{}}>Broccoli is an edible green plant in the cabbage</Text>
                    <Text style={{}}>family whose large flowering head, stalk and</Text>
                    <view style={{ display: 'flex', flexDirection: 'row' }}>
                        
                        <Text style={{}}>Small associated leaves are  </Text>
                        <Text style={{ color: 'green', fontWeight: 'bold' }}>Read more</Text>
                    </view>

                </view>



                <view style={{ position: 'absolute', bottom: 10, margintop: 95, right: 505, width: 300, height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <Image

                        source={(require('../assets/Images/notifications.png'))}
                        style={{ width: 40, marginRight: 50, height: 40, borderRadius: 5, backgroundColor: 'white', }}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('Interfacce')} style={{ display: 'flex', marginRight: 35, backgroundColor: 'white', width: 190, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderBlockColor: 'black', borderStyle: 2 }}>
                        <Text style={{ fontWeight: 'bold', color: '#06E122', fontSize: 15 }}>Add to cart $ 1.50</Text>
                    </TouchableOpacity>

     

                </view>


            </view>

        </View>
    );
}


const styles = StyleSheet.create({


});

export default fenetre;