import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Safe from '../GetFAQ/Safe'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const Safety = () => {
  return (
    <View style={{height:hp(100), width:wp(100)}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(100), opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <Safe/>
    </ImageBackground>
    </View>
  )
}

export default Safety

const styles = StyleSheet.create({})