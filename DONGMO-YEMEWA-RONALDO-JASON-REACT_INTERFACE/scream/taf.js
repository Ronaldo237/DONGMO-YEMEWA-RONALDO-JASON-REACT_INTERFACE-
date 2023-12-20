import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity , TextInput} from 'react-native';

const HomeScreem = () => {
    return (
        <View style={{backgroundColor:'#333', alignItems:'center'}}>

     <view style = {{width:350,height:580,backgroundColor:'#aaa',borderRadius:25}}>

<view style = {{flex:1}}>
    <Text style = {{flexDirection:'column',marginHorizontal:5,position:'absolute',top:2,marginTop:18,marginLeft:15}}>Your location</Text>
    <Text style = {{flexDirection:'column',margin:5,position:'absolute',top:9,marginTop:25,marginLeft:15,fontSize:15,fontWeight:'bold',color:'black'}}>3892 Olen Thomas Driver,Ny ^</Text>
    <Image 
          
              source={(require('../assets/photo.jpg'))}
              style = {{width:30,height:30,borderRadius:50,position:'absolute',top:9,right:480,marginTop:25,marginRight:15}}
              />

<Image 
          
          source={(require('../assets/Images/notifications.png'))}
          style = {{width:50,height:30,borderRadius:35,position:'absolute',top:55,right:480,marginTop:25,marginRight:15,backgroundColor:'#048815'}}
          />


</view>

<View style={{ width:250,height:30, flexDirection: 'row', alignItems: 'center', backgroundColor:'white',marginTop:75,marginleft:50,borderRadius:50 }}>
                <Image
                    source={require('../assets/photo.jpg')}
                    style={{ width: 20, height: 20, borderRadius:50,marginLeft: 5, }}
                />

                <Text style={{ marginHorizontal: 10,fontSize:12,fontWeight:'bold',color:'black' }}>Search foods,groceries</Text>

                <Image
                    style={{  width: 20, height: 20, borderRadius:50, marginLeft: 35, }}

                    source={require('../assets/photo.jpg')}

                />

            </View>

<view style = {{marginTop:25,display:'flex'}}>
                   <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:8,}}>Categories</Text>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#06E122',marginLeft:200,}}>See all</Text>
</view>

<view style = {{ flexDirection: 'row', alignItems: 'center',display:'flex',marginTop:45,}}>

<Image
                    style={{  width: 40, height: 40, borderRadius:50, marginLeft: 25, }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{  width: 40, height: 40, borderRadius:50, marginLeft: 25, }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{ width: 40, height: 40, borderRadius:50, marginLeft: 25, }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{  width: 40, height: 40, borderRadius:50, marginLeft: 25, }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{ width: 40, height: 40, borderRadius:50, marginLeft: 25, }}

                    source={require('../assets/photo.jpg')}

                />

</view>

<view style = {{display:'flex',flexDirection:'row',marginLeft:15,}}>

<TouchableOpacity style={{ }}>
    <Text style={{marginLeft: 8,fontWeight:'bold',color:'black',fontSize:15}}>Vegetables </Text>
</TouchableOpacity>

<TouchableOpacity style={{ }}>
    <Text style={{marginLeft: 6,fontWeight:'bold',color:'black',fontSize:15}}>Dairies </Text>
</TouchableOpacity>

<TouchableOpacity style={{ }}>
    <Text style={{marginLeft: 10,fontWeight:'bold',color:'black',fontSize:15}}>Meats </Text>
</TouchableOpacity>

<TouchableOpacity style={{ }}>
    <Text style={{marginLeft: 10,fontWeight:'bold',color:'black',fontSize:15}}>Fish </Text>
</TouchableOpacity>

<TouchableOpacity style={{ }}>
    <Text style={{marginLeft: 10,fontWeight:'bold',color:'black',fontSize:15}}>Ananas </Text>
</TouchableOpacity>

</view>

<view style = {{marginTop:25,display:'flex'}}>
                   <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:8,}}>Deals</Text>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#06E122',marginLeft:230,}}>See all</Text>
</view>

<view style = {{width:300,height:100,margin:20,backgroundColor:'green',borderRadius:15,display:'flex',alignContent:'center',paddingLeft:15}}>

<Text style={{fontSize:15,fontWeight:'bold',color:'black',marginTop:5,marginLeft:8,}}>50%OFF</Text>
                    <Text style={{fontSize:10,color:'black',marginTop:25,}}>on Grocery Combo packs</Text>

 <TouchableOpacity style={{display:'flex',position:'absolute',bottom:182,letf:0,marginleft:15,backgroundColor:'white',width:100,height:30,alignItems:'center',justifyContent:'center',borderRadius:10 }}>
    <Text style={{fontWeight:'bold',color:'#06E122',fontSize:15}}>Ananas </Text>
</TouchableOpacity>

<Image
                    style={{ width: 100, height: 90, borderRadius:50, marginLeft: 50,marginTop:6,backgroundColor:'transparant' }}

                    source={require('../assets/photo.jpg')}

                />

</view>

<view style = {{marginTop:25,display:'flex',flexDirection:'row'}}>
                   <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:8,}}>Popular items</Text>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#06E122',marginLeft:200,}}>See all</Text>
</view>

<view style = {{width:350,height:110,margin:20,borderRadius:15,display:'flex',alignContent:'center',bottom:-25,position:'absolute',flexDirection:'row',}}>

<view style = {{width:150,height:100,margin:20,backgroundColor:'violet',top:9,left:1,position:'absolute',borderRadius:15,display:'flex',alignContent:'center',}}>

<Image
                    style={{ width: 20, height: 20, borderRadius:50, position:'absolute',top:5,right:1,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{ width: 80, height: 30, borderRadius:50, marginLeft: 15,marginTop:25,backgroundColor:'transparant' }}

                    source={require('../assets/photo.jpg')}

                />
                <view style = {{width:150,height:2,alignItems:'center',backgroundColor:'white',position:'absolute',bottom:35}}/>

<Image
                    style={{ width: 20, height: 20, borderRadius:50,position:'absolute',bottom:8,right:2,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<view style = {{marginTop:25,display:'flex',flexDirection:'column',bottom:2,left:2,position:'absolute',}}>
                   <Text style={{fontSize:13,fontWeight:'bold',color:'black',}}>Bitroot </Text>
                    <Text style={{fontSize:13,color:'black',}}>$1.25</Text>
</view> 

</view>

<view style = {{width:150,height:100,margin:20,backgroundColor:'green',bottom:-25,position:'absolute',borderRadius:15,alignContent:'center',marginBottom:25,}}>

<Image
                    style={{ width: 20, height: 20, borderRadius:50, position:'absolute',top:5,right:1,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{ width: 80, height: 30, borderRadius:50, marginLeft: 15,marginTop:25,backgroundColor:'transparant' }}

                    source={require('../assets/photo.jpg')}

                />
                <view style = {{width:150,height:2,alignItems:'center',backgroundColor:'white',position:'absolute',bottom:35}}/>

<Image
                    style={{ width: 20, height: 20, borderRadius:50,position:'absolute',bottom:8,right:2,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<view style = {{marginTop:25,display:'flex',flexDirection:'column',bottom:2,left:2,position:'absolute',}}>
                   <Text style={{fontSize:13,fontWeight:'bold',color:'black',}}>Bitroot </Text>
                    <Text style={{fontSize:13,color:'black',}}>$1.25</Text>
</view> 

</view>

<view style = {{width:150,height:100,margin:20,backgroundColor:'yellow',bottom:-25,position:'absolute',borderRadius:15,display:'flex',alignContent:'center',marginBottom:25}}>

<Image
                    style={{ width: 20, height: 20, borderRadius:50, position:'absolute',top:5,right:1,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<Image
                    style={{ width: 80, height: 30, borderRadius:50, marginLeft: 15,marginTop:25,backgroundColor:'transparant' }}

                    source={require('../assets/photo.jpg')}

                />
                <view style = {{width:150,height:2,alignItems:'center',backgroundColor:'white',position:'absolute',bottom:35}}/>

<Image
                    style={{ width: 20, height: 20, borderRadius:50,position:'absolute',bottom:8,right:2,marginRight:15 }}

                    source={require('../assets/photo.jpg')}

                />

<view style = {{marginTop:25,display:'flex',flexDirection:'column',bottom:2,left:2,position:'absolute',}}>
                   <Text style={{fontSize:13,fontWeight:'bold',color:'black',}}>Bitroot </Text>
                    <Text style={{fontSize:13,color:'black',}}>$1.25</Text>
</view> 

</view>

</view>


     </view>

        </View>
    );
}


const styles = StyleSheet.create({
    





});

export default HomeScreem;