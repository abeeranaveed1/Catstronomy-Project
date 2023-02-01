import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {firebase} from '../../config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styling from '../CustomProperties/Theme2'


const Dashboard = ({navigation}) => {
   const [name , setName] = useState('')

   useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log("User does not exist")
      }
    })
   }, [])


  return (
    <View style={{backgroundColor:'black'}}>
      <ImageBackground source={require('../images/background.png')} style={{opacity:.9}}>
      <View style={{height:hp(10), alignContent:'center', justifyContent:'center'}}>
        <Styling title="Catstronomy" style={{color:'purple',fontSize:40, textAlign:'center'}}/></View>
     
     <View style={{ height:hp(35), flexDirection:'row', justifyContent:'space-evenly'}}>
     <TouchableOpacity
     onPress={()=>navigation.navigate('Cat Profile')}
     style={{backgroundColor:'#99bbff', height:hp(30), width:wp(45), alignSelf:'center'
    ,borderRadius:35, marginLeft:4,
    shadowOffset: {width: -50, height: 3},  
    shadowColor: 'blue',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 25}}> 
      
         <Image source={require('../logos/CatProfile.png')} style={{alignSelf:'center',height:hp(20),width:wp(30)}}/>
         <Styling title="Cat Profile" style={{textAlign:'center',fontSize:20, color:'#001a4d'}}/> 
         
      </TouchableOpacity>
      <View style={{ height:hp(30), width:wp(50),alignSelf:'center',justifyContent:'space-evenly'}}>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Locate Vets')}
      style={{backgroundColor:'#ffe6e9', height:hp(12), width:wp(50),borderRadius:35,flexDirection:'row',alignContent:'center'
    ,justifyContent:'center',shadowOffset: {width: -50, height: 3},  
    shadowColor: '#ff0026',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 25}}>
      <Image source={require('../logos/location.png')} style={{width:wp(10), height:hp(10), alignSelf:'center'}}/>
      <Styling title="Locate Vets" style={{ alignSelf:'center', color:'#ff8093', fontSize:20,marginLeft:5}}/>
      
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('FAQ')}
      style={{backgroundColor:'#ffaa80',height:hp(12), width:wp(50),borderRadius:35,flexDirection:'row',alignContent:'center',justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: '#802b00',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
      <Image source={require('../logos/faq-icon.png')} style={{width:wp(13), height:hp(8), alignSelf:'center'}}/>
      <Styling title="FAQ" style={{alignSelf:'center',marginLeft:12, color:'#802b00', fontSize:20}}/>
  
      
      </TouchableOpacity>
      </View>
     </View>
     <View style={{width:wp(100), height:hp(44), justifyContent:'space-evenly', alignContent:'center'}}> 
     <TouchableOpacity style={{backgroundColor:'#66CDAA',width:wp(90), height:hp(15), alignSelf:'center',borderRadius:35,flexDirection:'row', justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: 'green',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
      
     <Image source={require('../logos/breed1.png')} style={{width:wp(30), height:hp(15), alignSelf:'center'}}/>
     <Styling title="Breed Detection" style={{alignSelf:'center', fontSize:24,color:'#194d3c'}}/>

     
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor:'#e6dd7f',width:wp(90), height:hp(15),alignSelf:'center',borderRadius:35,flexDirection:'row', justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: 'orange',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
     
     <Image source={require('../logos/breed.png')} style={{width:wp(30), height:hp(15), alignSelf:'center'}}/>
     <Styling title="Mood Detection" style={{alignSelf:'center', fontSize:24,color:'#6a6315'}}/>
   
     </TouchableOpacity>

     </View>
     </ImageBackground>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})