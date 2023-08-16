import { StyleSheet, Image, Text, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ResultsPage({route, navigation}) {
  const { breed, imageUrl } = route.params;
    const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
console.log(imageUrl);

const handleWhatToDoPress = () => {
  // Determine the result (e.g., "Sad", "Happy", "Angry", "Afraid") and navigate accordingly
  const result = breed; // Replace this with your actual result

  if (result === 'sad') {
    navigation.navigate('Sad');
  } else if (result === 'Happy') {
    navigation.navigate('happy');
  } else if (result === 'angry') {
    navigation.navigate('Angry');
  } else if (result === 'scared') {
    navigation.navigate('Afraid');
  }
};

  return (
    <View style={{backgroundColor:'black'}}>
        <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:'100%'}}>
            <View style={{height:height*.02, width:width*1}}>
            </View>
            <View style={{opacity:.9,backgroundColor:'white', height:height*.55, width:width*.85,
        display:'flex', alignSelf:'center', borderRadius:35}}>
<View style={{ height:height*.2, display:'flex'}}>
<Styling title="Result" style={{color: 'purple',textAlign:'center', alignSelf:'center', fontSize:30, marginTop:height*.02}}/>
</View>
<View style={{backgroundColor:'pink', height:height*.3, width:width*.75,
alignSelf:'center', borderRadius:30}}>
          <Image source= {{ uri: imageUrl }} style={{opacity:.9,height:'100%', width:'100%', borderRadius: 30}} />

<Styling title={breed} style={{textAlign:'center',fontSize:25, color:'purple'}}/>
</View>

            </View>
            <View style={{display:'flex',marginTop:height*.035, justifyContent:'space-evenly', height:height*.2, width:width*.85, alignSelf:'center'}}>
            <TouchableOpacity
            onPress={handleWhatToDoPress}
            style={{height:height*.06, width:'100%', backgroundColor:'pink', display:'flex', alignSelf:'center',
          borderRadius:35}}>
            <Styling title="What should I do?" style={{textAlign:'center', marginTop:height*.01, fontSize:20, color:'purple'}}/>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Chart')}
            style={{height:height*.06, width:'100%', backgroundColor:'pink', display:'flex', alignSelf:'center',
          borderRadius:35}}>
            <Styling title="Mood Chart" style={{textAlign:'center', marginTop:height*.01, fontSize:20, color:'purple'}}/>

            </TouchableOpacity>
            </View>
            </ImageBackground>
         </View>
  )
}

const styles = StyleSheet.create({})