import { StyleSheet, Text, View, ScrollView,ImageBackground,Image, FlatList, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2'
import {Ionicons, Entypo,MaterialCommunityIcons,Feather} from 'react-native-vector-icons'
import New from '../components/New'
import { useNavigation } from '@react-navigation/native';

const CatProfileManagement = () => {
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  const [loading, setLoading] = useState(false);



  const navigation = useNavigation();
  return (
    <View style={{flex:1,width:'100%', backgroundColor:'black',justifyContent:'center'}}>
  <ImageBackground source={require('../images/background.png')} resizeMode="cover" style={{alignItems:'center',opacity:.95,height:'100%', width:'100%'}}>
  <ImageBackground source={require('../images/window.png')} resizeMode="cover" style={{height:height*0.5, width:width*1,marginTop:height*0.05,
shadowOffset: { height: 1},  
shadowColor: '#ff0026',  
shadowOpacity: 0.1,  
shadowRadius: 1, elevation: 15}}>
    <View style={{ height:height*0.405, width:width*1, alignSelf:'center', marginTop:height*0.042,paddingHorizontal:width*0.001,
borderRadius:100}}>
<View style={{flex:1, opacity:.85,backgroundColor:'pink',zIndex:1}}>
    <New />
</View>
    </View>

  </ImageBackground>
  <View style={{height:height*0.48,width:width*0.48,position:'absolute',top:height*0.30}}>
  <Image source={require('../images/catwindow.png')} style={{height:200,width:200,opacity:.8,resizeMode:'cover'}}/>
  </View>
  <View style={{backgroundColor:'pink', height:'10%', width:'100%',marginTop:height*0.235, opacity:0.7, borderTopWidth:.1,
borderTopLeftRadius:20,borderTopRightRadius:20,
shadowOffset: {width: -40, height: 1},  
        shadowColor: '#ff0026',  
        shadowOpacity: 0.1,  
        shadowRadius: 1, elevation: 15}}>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Create')}
    style={{backgroundColor:'white', height:70,width:70, borderRadius:500, alignSelf:'center',marginTop:-height*0.0405}}>
    <MaterialCommunityIcons name='plus' color='black' size={70} style={{alignSelf:'center'}}/>
    </TouchableOpacity>
    <Styling title="Tap to add a Cat Profile" style={{alignSelf:'center', color:'purple', fontSize:16}}/>
  </View>
  </ImageBackground>
    </View>
  )
}

export default CatProfileManagement

const styles = StyleSheet.create({})