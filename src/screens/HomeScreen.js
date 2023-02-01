import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2';
const HomeScreen = ( {navigation} ) => {
  return (
    <View style={{backgroundColor:'#f8c8dc', width:wp(100)
    , height: hp(100)}}>
      <View style={styles.chunk}> 
        <Styling title='Welcome' style={{fontSize: 35}}/>
        <Styling title='To' style={{fontSize:35}}/>
        <Styling title='Catstronomy' style={{fontSize:35, color: '#A6599E'}}/>
        </View>
        <View style={{width:wp(100), height:hp(50)}}>
        <Image source={require('../images/HomeScreenCat.png')} style={{width: wp(70),
        height:hp(40), marginTop:80,marginLeft:180}}/>
        </View>
        <TouchableOpacity style={{backgroundColor:'#ff85a2', width:wp(80), alignSelf:'center', flexDirection:'row',
      height:hp(6),borderRadius:20, marginTop:15}} onPress={()=>navigation.navigate('Login')}>
          <Styling title='Signin' style={{fontSize: 18,alignSelf:'center', color:'white', flexDirection:'row', marginLeft:140}}/>
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