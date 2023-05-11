import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Wellness from '../GetFAQ/Wellness'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const Health = () => {
  return (
    <View style={{height:hp(100), width:wp(100)}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(100), opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <Wellness/>
      </ImageBackground>
    </View>
  )
}

export default Health

const styles = StyleSheet.create({})