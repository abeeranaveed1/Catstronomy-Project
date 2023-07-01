import { StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React,{useState, useEffect} from 'react'
import {firebase} from '../../config'
import {collection, doc, setDoc, addDoc,updateDoc, Firestore} from 'firebase/firestore'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2';
import RNPickerSelect from "react-native-picker-select";
import { Title } from 'react-native-paper';
import {MaterialIcons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';


const CatEdit = ({navigation, route}) => {
  const [name,setName] = useState('');

  console.log(route)
  const {params = {}} = route;
  const {catId} = params;
const [update, setUpdate] = useState('');

  useEffect(()=>{
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection(`users/${user.uid}/cats`)
      .doc(catId)
      .onSnapshot(doc => {
        setName(doc.data());
        console.log(doc.data());
      });
  }, [update]);

  function Update() {
    const user = firebase.auth().currentUser;
    const catRef = firebase.firestore().collection(`users/${user.uid}/cats`).doc(catId);
  
    const updates = {};
  
    if (catName) {
      updates.catName = catName;
    }
    if (profilePicture) {
      updates.profilePicture = profilePicture;
    }
    if (catBreed) {
      updates.catBreed = catBreed;
    }
    if (catAgeYears) {
      updates.catAgeYears = catAgeYears;
    }
    if (catAgeMonths) {
      updates.catAgeMonths = catAgeMonths;
    }
    if (catGender) {
      updates.catGender = catGender;
    }
    if (catState) {
      updates.catState = catState;
    }
    if (catColor) {
      updates.catColor = catColor;
    }
    if (catWeight) {
      updates.catWeight = catWeight;
    }
  
    catRef.update(updates)
      .then(() => {
        setUpdate(!update);
      })
      .catch((error) => {
        console.log("Error updating cat:", error);
      });
  }





  useEffect(()=>{
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection(`users/${user.uid}/cats`)
      .doc(catId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
          console.log(snapshot.data())
        } else {
          console.log('Cat does not exist');
        }
      });
  }, [catId]);




  return (
    <View style={{width:wp(100),height:hp(100), alignItems:'center',backgroundColor:'black'}}>
      <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:'100%', overflow:'hidden', opacity:.85, alignItems:'center'}}>
       
        
        <TouchableOpacity
        onPress={() => navigation.navigate('CatPicture', { catId: catId })}

        style={{backgroundColor:'brown',height:hp(35),width:wp(95),borderTopLeftRadius:40,borderTopRightRadius:40,marginTop:10}}>
        <Image source={{uri: name.profilePicture}} style={{width:'100%',height:'100%',borderTopLeftRadius:40,borderTopRightRadius:40, opacity:.9}}/>
        </TouchableOpacity>
        <View style={{height:hp(51),width:wp(95),alignItems:'center', opacity:.93}}>
          <TouchableOpacity style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomWidth:0.3,borderBottomColor:'white',
          marginTop:-50,justifyContent:'space-between', flexDirection:'row',alignItems:'center'}}
          onPress={()=>navigation.navigate('Name',{ catId: catId })}>
            <Styling title="Name" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'pink',height:hp(7),width:wp(90),
        justifyContent:'space-between', flexDirection:'row'
        ,alignItems:'center',
        shadowOffset: {width: -40, height: 1},  
        shadowColor: '#ff0026',  
        shadowOpacity: 0.1,  
        shadowRadius: 1, elevation: 15}}
        onPress={() => navigation.navigate('Age', { catId: catId })}>
          <Styling title="Age" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderBottomLeftRadius:20,borderBottomRightRadius:20,
        justifyContent:'space-between', flexDirection:'row'
        ,alignItems:'center',
        shadowOffset: {width: -40, height: 1},  
        shadowColor: '#ff0026',  
        shadowOpacity: 0.1,  
        shadowRadius: 1, elevation: 15}}
        onPress={() => navigation.navigate('Nature', { catId: catId })}>
          <Styling title="Nature" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>

          <View style={{height:hp(35),width:wp(90), marginTop:10,}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Breed',{ catId: catId })} 
          style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomWidth:0.5,borderBottomColor:'white',
        justifyContent:'space-between', flexDirection:'row',alignItems:'center'}}>
          <Styling title="Breed" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Weight',{ catId: catId })} 
          style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderBottomWidth:0.3,borderBottomColor:'white',
        justifyContent:'space-between', flexDirection:'row',alignItems:'center'}}>
          <Styling title="Weight" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Gender',{ catId: catId })}
          style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderBottomWidth:0.3,borderBottomColor:'white',
        justifyContent:'space-between', flexDirection:'row',alignItems:'center'}}>
          <Styling title="Gender" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('State',{ catId: catId })}
          style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderBottomWidth:0.3,borderBottomColor:'white',
        justifyContent:'space-between', flexDirection:'row',alignItems:'center'}}>
          <Styling title="State" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Color',{ catId: catId })}
          style={{backgroundColor:'pink',height:hp(7),width:wp(90),borderBottomLeftRadius:20,borderBottomRightRadius:20,
        justifyContent:'space-between', flexDirection:'row',alignItems:'center',
        shadowOffset: {width: -40, height: 1},  
    shadowColor: '#ff0026',  
    shadowOpacity: 0.1,  
    shadowRadius: 1, elevation: 15}}>
          <Styling title="Color" style={{marginLeft:16,fontSize:17, color:'white'}}/>
<MaterialIcons name="arrow-forward-ios" size={20} color="white" style={{marginRight:5}}/>
          </TouchableOpacity>
          </View>
        </View>
       </ImageBackground>
    </View>
  )
  }

export default CatEdit

const styles = StyleSheet.create({})
