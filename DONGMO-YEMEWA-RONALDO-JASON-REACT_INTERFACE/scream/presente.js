import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity , TextInput} from 'react-native';

const presente = () => {
    return (
        <View style={{backgroundColor:'#333', alignItems:'center'}}>

     <view style = {{width:350,height:580,backgroundColor:'#85BC98',borderRadius:25,alignItems:'center'}}>
<view style = {{}}>
     <Image
                style={{width:200,height:200,marginLeft:80,marginTop:55,backgroundColor:'#85BC98'}}

                source={(require('../assets/photo.jpg'))}

            />

<view style = {{width:350,height:300,backgroundColor:'white',position:'absolute',bottom:1,borderRadius:25,display:'flex',flexDirection:'column'}}>
  <view style = {{marginTop:80,marginLeft:110,display:'flex',flexDirection:'column'}}>  
<Text style = {{fontWeight: 'bold', color: 'black', fontSize: 15}}> Order Groceries </Text>
<Text style = {{fontWeight: 'bold', color: 'black', fontSize: 15}}> and Get delivered </Text>
<Text style = {{fontWeight: 'bold', color: 'black', fontSize: 15}}> in few minutes </Text>
</view>
<view style = {{marginLeft:110,marginTop:15,alignItems:'center',justifyContent:'center',width:100,height:'auto', borderRadius: 10,borderStyle:'solid',borderColor:'#06E122'}}>
<TouchableOpacity style={{marginTop:5, display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10,borderStyle:'solid',borderColor:'##06E122' }}>
                    <Text style={{ fontWeight: 'bold', color: '#06E122', fontSize: 15,marginBottom:3 }}>Ananas </Text>
                </TouchableOpacity>
                </view>
</view>
</view>


     </view>

        </View>
    );
}


const styles = StyleSheet.create({
    





});

export default presente;