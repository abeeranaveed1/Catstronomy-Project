import { StyleSheet, Text, View, ScrollView,ImageBackground,Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2'
import {Ionicons, Entypo,MaterialCommunityIcons,Feather} from 'react-native-vector-icons'
import New from '../components/New'
import { useNavigation } from '@react-navigation/native';
const CatProfileManagement = () => {

  const [loading, setLoading] = useState(false);



  const navigation = useNavigation();
  return (
    <View style={{height:hp(100),width:wp(100), backgroundColor:'black'}}>
  <ImageBackground source={require('../images/background.png')} resizeMode="cover" style={{alignItems:'center',opacity:.95,height:'100%', width:'100%'}}>
  <ImageBackground source={require('../images/window.png')} resizeMode="cover" style={{height:'75%', width:'105%',marginRight:'9%',marginTop:50,
shadowOffset: {width: -40, height: 1},  
shadowColor: '#ff0026',  
shadowOpacity: 0.1,  
shadowRadius: 1, elevation: 15}}>
  
    
    <View style={{ height:'61%', width:'90%', alignSelf:'center', marginTop:'7.5%',overflow:'hidden',marginLeft:33,
  borderTopLeftRadius:15,borderBottomLeftRadius:15,borderTopRightRadius:15,borderBottomRightRadius:15}}>
<View style={{height:'100%', width:'100%', opacity:.85,backgroundColor:'pink'}}>
    <New />
  
  

</View>
    </View>

  </ImageBackground>
  <View style={{height:hp(50),width:wp(50),marginTop:'-105.5%'}}>
  <Image source={require('../images/catwindow.png')} style={{height:'100%',width:'100%',opacity:.8}}/>
  </View>
  <View style={{backgroundColor:'pink', height:'10%', width:'100%',marginTop:'16%', opacity:0.7, borderTopWidth:.1,
borderTopLeftRadius:20,borderTopRightRadius:20,
shadowOffset: {width: -40, height: 1},  
        shadowColor: '#ff0026',  
        shadowOpacity: 0.1,  
        shadowRadius: 1, elevation: 15}}>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Create')}
    style={{backgroundColor:'white', height:'130%', width:'20%', borderRadius:1000/2, alignSelf:'center',marginTop:-35}}>
    <MaterialCommunityIcons name='plus' color='black' size={70} style={{alignSelf:'center'}}/>
    </TouchableOpacity>
    <Styling title="Tap to add a Cat Profile" style={{alignSelf:'center', color:'purple', fontSize:16,marginTop:-15}}/>
  </View>
  </ImageBackground>
    </View>
  )
}

export default CatProfileManagement

const styles = StyleSheet.create({})