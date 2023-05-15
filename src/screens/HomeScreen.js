import { Button, Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2';
const HomeScreen = ( {navigation} ) => {
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  return (
    <View style={{backgroundColor:'#f8c8dc',width:'100%',flex:1}}>
      <View style={styles.chunk}> 
        <Styling title='Welcome' style={{fontSize: 35}}/>
        <Styling title='To' style={{fontSize:35}}/>
        <Styling title='Catstronomy' style={{fontSize:35, color: '#A6599E'}}/>
        </View>
        <View style={{width:'100%', height:height*0.50}}>
        <Image source={require('../images/HomeScreenCat.png')} style={{width: width*0.7,
        height:height*0.4, marginTop:'25 %',marginLeft:'40%'}}/>
        </View>
        <TouchableOpacity style={{backgroundColor:'#ff85a2', width:'80%', alignSelf:'center', flexDirection:'row',
        justifyContent:'center',
      height:height*0.06,borderRadius:20, marginTop:height*0.015}} onPress={()=>navigation.navigate('Login')}>
          <Styling title='Signin' style={{fontSize: 18,alignSelf:'center', color:'white', flexDirection:'row'}}/>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    chunk: {
      width: wp(46),
      height: hp(18),
      flexDirection: 'column',
      marginLeft: 10,
      justifyContent: 'space-evenly',
      marginTop:20
    }

    
    
})