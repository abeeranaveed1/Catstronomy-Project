import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Safe from '../GetFAQ/Safe'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const height=Dimensions.get('screen').height;
const Weight=Dimensions.get('screen').width;

const Safety = () => {
  return (
   <View style={{flex:1}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',flex:1, opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <Safe/>
    </ImageBackground>
    </View>
  )
}

export default Safety

const styles = StyleSheet.create({})