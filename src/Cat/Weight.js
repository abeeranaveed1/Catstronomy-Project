import { StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native'
import React, {useState,useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Styling from '../CustomProperties/Theme2'
import { documentId } from 'firebase/firestore'
import {firebase} from '../../config'

const Weight = ({navigation, route}) => {
  const [catWeight,setCatWeight] = useState('')
  const [Name, setName] = useState('');

  console.log(route)
  const {params = {}} = route;
  const {catId} = params;
  useEffect(() => {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection(`users/${user.uid}/cats`)
      .doc(catId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
          setCatWeight(snapshot.data().catWeight); // set the initial value of catBreed from the database
          console.log(snapshot.data());
          console.log('Data fetched successfully');
        } else {
          console.log('Cat does not exist');
        }
      });
  }, [catId]); // add catId as a dependency to useEffect
  
  const Update = () => {
  
  const user = firebase.auth().currentUser;

  if (catWeight) {
    firebase
  .firestore()
  .collection(`users/${user.uid}/cats`)
  .doc(catId).update({
      catWeight: catWeight,
    });
  }
  //refresh data
  firebase
  .firestore()
  .collection(`users/${user.uid}/cats`)
  .doc(catId).get().then((snapshot) => {
    if (snapshot.exists) {
      setName(snapshot.data());
      console.log(snapshot.data())
      alert('Changes made successfully!');
    } else {
      console.log('Cat does not exist');
    }
  });
  
  };
  
  const height=useWindowDimensions('screen').height;
const width=useWindowDimensions('screen').width;
  return (
    <View style={{height:'100%',  flex:1, alignItems:'center', backgroundColor:'black'}}>
      <Image source={require('../images/background.png')} style={{width:'100%',height:'100%', overflow:'hidden', opacity:0.8}}/>
      <View style={{backgroundColor:'pink',height:'50%',width:'90%',marginTop:-height*0.81,
    borderTopLeftRadius:20,borderTopRightRadius:20, flexDirection:'row',opacity:0.85,justifyContent:'center'}}>
      <Image source={require('../images/Catfish.png')} style={{resizeMode:'contain',height:height*0.2,width:width*0.4,position:'absolute',left:-width*0.12,top:height*0.15}}/>
      <Image source={require('../images/catfish2.png')} style={{resizeMode:'contain',height:height*0.19,width:width*0.4,position:'absolute'}}/>
      <Image source={require('../images/catfish3.png')} style={{resizeMode:'contain',height:height*0.22,width:width*0.4,position:'absolute',left:width*0.61,top:height*0.15}}/>
    </View>
    <View style={{backgroundColor:'white',height:hp(25),width:wp(90),borderBottomLeftRadius:20,borderBottomRightRadius:20
  ,alignItems:'center', justifyContent:'space-evenly', opacity:0.7,
  shadowOffset: {width: -50, height: 3},  
  shadowColor: '#ff0026',  
  shadowOpacity: 0.2,  
  shadowRadius: 1, elevation: 25}}>
    <Styling title="Weight" style={{alignSelf:'flex-start', marginLeft:24, color:'purple',fontSize:16}}/>
    <View style={{flexDirection:'row'}}>
      <View style={{height:hp(3), width:wp(50),borderBottomWidth:0.9, borderColor:'grey'}}>
        <TextInput 
        style={{textAlign:'center'}}
        keyboardType={'numeric'}
        value={catWeight}
        onChangeText={(catWeight)=>setCatWeight(catWeight)}/>
      </View>
      <Styling title="kg" style={{color:'purple', marginLeft:5,fontSize:16}}/>
      </View>
      <View style={{flexDirection:'row', width:wp(80), justifyContent:'space-around'}}>
      <TouchableOpacity style={{backgroundColor:'pink', height:hp(5), 
      width:wp(25),borderRadius:10}}
      onPress={()=>navigation.navigate('Cat Profile')}>
        <Styling title="Discard Changes" style={{color: 'purple',textAlign:'center',marginTop:6}}/>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        if (catWeight >= 0 && catWeight <= 18) {
          Update();
          navigation.navigate('Cat Profile');
        } else {
          alert('Please enter a valid weight between 0 and 18.');
        }
      }}
      
      
      style={{backgroundColor:'pink',height:hp(5), width:wp(25), borderRadius:10}}>
        <Styling title="Save Changes" style={{color: 'purple',textAlign:'center', marginTop:6}}/>
      </TouchableOpacity>
      </View>
    </View>
    
  </View>
  )
}

export default Weight

const styles = StyleSheet.create({})