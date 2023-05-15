import { Dimensions, ImageBackground,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Groom from '../GetFAQ/Groom'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const height=Dimensions.get('screen').height;
const Weight=Dimensions.get('screen').width;

const Grooming = () => {
  return (
    <View style={{flex:1}}>
     <ImageBackground source={require('../images/background.png')} style={{width:'100%',flex:1, opacity:.85, alignItems:'center', backgroundColor:'orange'}}>
      <Groom/>
      </ImageBackground>
    </View>
  )
}

export default Grooming

const styles = StyleSheet.create({})