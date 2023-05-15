import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Wellness from '../GetFAQ/Wellness'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const Health = () => {
  return (
   <View style={{flex:1}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',flex:1, opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <Wellness/>
      </ImageBackground>
    </View>
  )
}

export default Health

const styles = StyleSheet.create({})