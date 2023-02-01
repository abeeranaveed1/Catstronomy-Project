import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import GetFAQ from '../components/FetchFAQ'


const FAQ = () => {




  
  return (
    <View style={{height:hp(100), width:wp(100), backgroundColor:'black'}}>
      <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:hp(100), width:wp(100), justifyContent:'center'}}>
        <View style={{backgroundColor:'white',height:hp(70), width:wp(95), alignSelf:'center', marginBottom:'20%',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20, opacity:.8}}>
        <View style={{height:hp(67), width:wp(90), alignSelf:'center'}}>
        <GetFAQ/>
        </View>
        </View>
        </ImageBackground>
    </View>
  )
}

export default FAQ

const styles = StyleSheet.create({})