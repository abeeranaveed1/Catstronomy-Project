import { StyleSheet, Image, Text, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Styling from '../CustomProperties/Theme2';

export default function ResultsPage({navigation}) {
    const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

  return (
    <View style={{backgroundColor:'black'}}>
        <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:'100%'}}>
            <View style={{height:height*.02, width:width*1}}>
            </View>
            <View style={{opacity:.9,backgroundColor:'white', height:height*.55, width:width*.85,
        display:'flex', alignSelf:'center', borderRadius:35}}>
<View style={{ height:height*.2, display:'flex'}}>
<Styling title="Result" style={{color: 'purple',textAlign:'center', alignSelf:'center', fontSize:30, marginTop:height*.05}}/>
</View>
<View style={{opacity:.7,backgroundColor:'pink', height:height*.3, width:width*.75,
alignSelf:'center', borderRadius:30}}>
<Styling title="Add Result text Here" style={{textAlign:'center',marginTop:height*.01,fontSize:25}}/>
</View>

            </View>
            <View style={{ height:height*.27, width:width*8}}>
                <Image source={require('../images/BreedDetect.png')} style={{height:'100%', justifyContent:'flex-end'}}/>

</View>
            </ImageBackground>
         </View>
  )
}

const styles = StyleSheet.create({})