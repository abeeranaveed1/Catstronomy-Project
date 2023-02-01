import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Styling from '../CustomProperties/Theme2'
import {firebase} from '../../config'


  const Breed = ({ navigation,route}) => {
    const [name, setName] = useState('');
  const [catBreed, setCatBreed] = useState('')
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
    console.log(snapshot.data());
    console.log("Data fetched successfully")
    } else {
    console.log('Cat does not exist');
    }
    });
    }, [catId]);
    
    const Update = () => {
      const user = firebase.auth().currentUser;
      firebase
        .firestore()
        .collection(`users/${user.uid}/cats`)
        .doc(catId)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            firebase
              .firestore()
              .collection(`users/${user.uid}/cats`)
              .doc(catId)
              .update({
                catBreed: catBreed,
              });
            // refresh data after update 
            firebase
              .firestore()
              .collection(`users/${user.uid}/cats`)
              .doc(catId)
              .get()
              .then((snapshot) => {
                if (snapshot.exists) {
                  setName(snapshot.data());
                  console.log(snapshot.data());
                  alert('Changes made successfully!');
                } else {
                  console.log('Cat does not exist');
                }
              });
          } else {
            console.log('Cat does not exist');
          }
        });
    };
    
    
    
    


  return (
    <View style={{height:hp(110), width:wp(100), alignItems:'center', backgroundColor:'black'}}>
      <Image source={require('../images/background.png')} style={{width:'100%',height:'100%', overflow:'hidden', opacity:0.8}}/>
      <View style={{backgroundColor:'pink',height:hp(50),width:wp(90),marginTop:'-171%',
    borderTopLeftRadius:20,borderTopRightRadius:20, flexDirection:'row',opacity:0.85}}>
    <Image source={require('../images/Catfish.png')} style={{marginTop:100,marginLeft:-40,width:'40%',height:'50%'}}/>
    <Image source={require('../images/catfish2.png')} style={{marginLeft:-2,width:'40%',height:'50%'}}/>
    <Image source={require('../images/catfish3.png')} style={{marginLeft:-15,marginTop:130,width:'50%',height:'40%'}}/>
  </View>
    <View style={{backgroundColor:'white',height:hp(25),width:wp(90),borderBottomLeftRadius:20,borderBottomRightRadius:20
  ,alignItems:'center', justifyContent:'space-evenly', opacity:0.7,
  shadowOffset: {width: -50, height: 3},  
  shadowColor: '#ff0026',  
  shadowOpacity: 0.2,  
  shadowRadius: 1, elevation: 25}}>
    <Styling title="Breed" style={{fontSize:16,alignSelf:'flex-start', marginLeft:24, color:'purple'}}/>
      <View style={{height:hp(3), width:wp(80),borderBottomWidth:0.9, borderColor:'grey'}}>
        <TextInput style={{textAlign:'center'}}
        value={catBreed}
        onChangeText={(catBreed)=> setCatBreed(catBreed)}
        />
      </View>
      <View style={{flexDirection:'row', width:wp(80), justifyContent:'space-around'}}>
      <TouchableOpacity style={{backgroundColor:'pink', height:hp(5), 
      width:wp(25),borderRadius:10}}
      onPress={()=>navigation.navigate('CatEdit')}>
        <Styling title="Discard Changes" style={{color: 'purple',textAlign:'center',marginTop:6}}/>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => {
        {Update()};
        navigation.navigate('Cat Profile');
    }
        }
      
      style={{backgroundColor:'pink',height:hp(5), width:wp(25), borderRadius:10}}>
        <Styling title="Save Changes" style={{color: 'purple',textAlign:'center', marginTop:6}}/>
      </TouchableOpacity>
      </View>
    </View>
    
  </View>
  )
}

export default Breed

const styles = StyleSheet.create({})