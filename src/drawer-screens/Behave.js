import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GetBehave from '../components/FetchBehavior'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const Behave = () => {
  return (
    <View style={{flex:1}}>
            <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(100), opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <GetBehave/>
      </ImageBackground>
    </View>
  )
}

export default Behave

const styles = StyleSheet.create({})