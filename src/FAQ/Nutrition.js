import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NutritionFAQ from '../GetFAQ/NutritionFAQ'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const Nutrition = () => {
  return (
    <View style={{height:hp(100), width:wp(100)}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(100), opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <NutritionFAQ/>
    </ImageBackground>
    </View>
  )
}

export default Nutrition

const styles = StyleSheet.create({})