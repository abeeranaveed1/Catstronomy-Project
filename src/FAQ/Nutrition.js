import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NutritionFAQ from '../GetFAQ/NutritionFAQ'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const height=Dimensions.get('screen').height;
const Weight=Dimensions.get('screen').width;

const Nutrition = () => {
  return (
   <View style={{flex:1}}>
                            <ImageBackground source={require('../images/background.png')} style={{width:'100%',flex:1, opacity:.85, alignItems:'center', backgroundColor:'orange'}}>

      <NutritionFAQ/>
    </ImageBackground>
    </View>
  )
}

export default Nutrition

const styles = StyleSheet.create({})