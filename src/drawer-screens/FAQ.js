import {Image, ImageBackground, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Styling from '../CustomProperties/Theme2'
import GetFAQ from '../components/FetchFAQ'
import { TouchableOpacity } from 'react-native-gesture-handler'


const FAQ = ({navigation}) => {


const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

  
  return (
    <View style={{height:hp(100), width:wp(100), backgroundColor:'black'}}>
      <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:hp(100), width:wp(100), justifyContent:'center'}}>
     <View style={{height: hp(5), width: wp(90), alignSelf: 'center', marginTop: hp(-10)}}>
          <Styling title="Choose a Category" style={{color: 'purple', textAlign:'center', fontSize:25}}/>
        </View>
      <View style={{height: hp(75), width: wp(90), alignSelf: 'center',marginTop: hp(2)}}>
        <View style={{height:'33.33%', width:wp(90), flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Health')}
        style={{backgroundColor:'white', height:'90%', width:wp(40), marginTop:hp(1.5),  paddingHorizontal:20,
      borderTopLeftRadius:30,borderTopRightRadius:30,
      borderBottomLeftRadius:30, borderBottomRightRadius:30,alignItems:'center'}}>
                         <Image source={require('../images/Health.png')} style={{alignSelf:'center',height:hp(20),width:wp(30),resizeMode:'contain'}}/>
                <Styling title='Health and Wellness' style={{color:'purple', fontSize:height*0.018, marginTop:hp(-2.5)}}/>


</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Behave')}
 style={{backgroundColor:'white', height:'90%', width:wp(40), marginTop:hp(1.5),
      borderTopLeftRadius:30,borderTopRightRadius:30,  paddingHorizontal:20,
      borderBottomLeftRadius:30, borderBottomRightRadius:30, alignItems:'center'}}>
<Image source={require('../images/Behavior.png')} style={{alignSelf:'center',height:hp(17),width:wp(40),marginTop:10,resizeMode:'contain'}}/>
                <Styling title='Behavior' style={{color:'purple', fontSize:height*0.018,marginTop:-6.5}}/>

</TouchableOpacity>

        </View>
        <View style={{height:'33.33%', width:wp(90)}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Nutrition')}
        style={{backgroundColor:'white', height:'90%', width:wp(40), marginTop:hp(1.5),
        paddingHorizontal:20,
      borderTopLeftRadius:30,borderTopRightRadius:30,
      borderBottomLeftRadius:30, borderBottomRightRadius:30, alignSelf:'center',alignItems:'center'}}>
               <Image source={require('../images/Nutrition.png')} style={{alignSelf:'center',height:hp(20),width:wp(30),resizeMode:'contain'}}/>
                <Styling title='Nutrition' style={{color:'purple', fontSize:height*0.018, marginTop:hp(-3)}}/>

</TouchableOpacity>
        </View>
        
        <View style={{height:'33.33%', width:wp(90), flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Safety')}
        style={{backgroundColor:'white', height:'90%', width:wp(40), marginTop:hp(1.5),
      borderTopLeftRadius:30,borderTopRightRadius:30,  paddingHorizontal:20,
      borderBottomLeftRadius:30, borderBottomRightRadius:30,alignItems:'center'}}>
                <Image source={require('../images/Safety.png')} style={{alignSelf:'center',height:hp(20),width:wp(30),resizeMode:'contain'}}/>
                <Styling title='Safety' style={{color:'purple', fontSize:height*0.018, marginTop:hp(-2)}}/>

</TouchableOpacity>
<TouchableOpacity 
onPress={()=>navigation.navigate('Grooming')}
style={{backgroundColor:'white', height:'90%', width:wp(40), marginTop:hp(1.5),
      borderTopLeftRadius:30,borderTopRightRadius:30,
      paddingHorizontal:20,
      borderBottomLeftRadius:30, borderBottomRightRadius:30, alignItems:'center'}}>
                <Image source={require('../images/grooming.png')} style={{alignSelf:'center',height:hp(20),width:wp(30)}}/>
                <Styling title='Grooming' style={{color:'purple', fontSize:height*0.018, marginTop:hp(-2)}}/>

</TouchableOpacity>
          
          </View>

      </View>
       {/*
      <TouchableOpacity onPress={()=>navigation.navigate('Behave')}>
          <Text> Click me </Text>
        </TouchableOpacity>
*/}
        </ImageBackground>
    </View>
  )
}

export default FAQ

const styles = StyleSheet.create({})