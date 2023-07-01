import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styling from '../CustomProperties/Theme2';
import { firebase } from '../../config';

const { width } = Dimensions.get('screen');

const CatView = ({ navigation, route }) => {
  const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
  const { params = {} } = route;
  const { catId } = params;

  const [name, setName] = useState({ profilePictureURL: '' });

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        if (catId) {
          const user = firebase.auth().currentUser;
          const catRef = firebase.firestore().collection(`users/${user.uid}/cats`).doc(catId);
          const doc = await catRef.get();
          if (doc.exists) {
            const catData = doc.data();
            setName(catData);

            // Fetch and set the profile picture
            if (catData.profilePicture) {
              const url = await firebase.storage().refFromURL(catData.profilePicture).getDownloadURL();
              setName((prevName) => ({
                ...prevName,
                profilePictureURL: url,
              }));
            }
          }
        }
      } catch (error) {
        console.log('Error fetching cat data:', error);
      }
    };

    fetchCatData();
  }, [catId]);

  const [update, setUpdate] = useState(false);
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


    if (catName) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catName: catName,
        });
    }
    if (catBreed) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catBreed: catBreed,
        });
    }
    if (catAgeYears) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catAgeYears: catAgeYears,
        });
    }
    if (catAgeMonths) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catAgeMonths: catAgeMonths,
        });
    }
    if (catGender) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catGender: catGender,
        });
    }
    if (catState) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catState: catState,
        });
    }
    if (catColor) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catColor: catColor,
        });
    }
    if (catWeight) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catWeight: catWeight,
        });
    }
    if (catNature) {
      firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).collection('cats').doc(catId)
        .update({
          catNature: catNature,
        });
    }

  }
  
  
  
  
  
  

  
  return (
    <View style={{backgroundColor:'pink',height:hp(85), width:wp(100)}}>
      <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(111), overflow:'hidden', opacity:.75, alignItems:'center', backgroundColor:'orange',marginTop:'-20%'}}>
      <View style={[styles.circle, { width: width / 2, height: width / 2, borderRadius: width / 4, marginTop: '21%' }]}>
        {name.profilePictureURL ? (
          <Image source={{ uri: name.profilePictureURL }} style={{ width: '100%', height: '100%', borderRadius: width / 4 }} resizeMode="contain" />
        ) : (
          <View style={[styles.circle, { width: width / 2, height: width / 2, borderRadius: width / 4}]} resizeMode="contain">
          </View>
        )}
      </View>
        <View style={{marginTop:10,width:wp(95), height:hp(47), backgroundColor:'white', alignSelf:'center', alignItems:'center', justifyContent:'space-evenly',
      borderTopLeftRadius:25, borderTopRightRadius:25,borderBottomLeftRadius:25, borderBottomRightRadius:25,
      shadowOffset: {width: -40, height: 1},  
      shadowColor: '#ff0026',  
      shadowOpacity: 0.1,  
      shadowRadius: 1, elevation: 15}}>
          <View style={{width:wp(90), height:hp(10), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20, alignItems:'center'}}>
  <Styling title="Full Name" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catName} style={{color:'purple', textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(25), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Breed" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catBreed} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Color" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catColor} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
          </View>
          <View style={{width:wp(90), height:hp(10), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Age" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row',marginTop:5}}>
  <Styling title={name.catAgeYears} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(5)}}/>
    <Styling title="Year(s)" style={{color:'purple'}}/>
  <Styling title={name.catAgeMonths} style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(6),textAlign:'center'}}/>
  <Styling title="Month(s)" style={{color:'purple'}}/>
  </View>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Weight" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row'}}>
  <Styling title={name.catWeight} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
    <Styling title="Kg" style={{color:'purple'}}/>
  </View>
</View>
          </View>
          <View style={{height:hp(10), width:wp(90), flexDirection:'row', justifyContent:'space-between'}}>
  <View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Gender" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catGender} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(30)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Nature" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catNature} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(30)}}/>
</View>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(90), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="State" style={{color:'purple', marginTop:5}}/>
  <Styling title={name.catState} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(75)}}/>
</View>
          
        </View>
        <View style={{opacity:.95,marginTop:10,flexDirection:'row', width:wp(90), justifyContent:'space-between'}}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('CatEdit',{ catId: catId })}
      
      style={{shadowOffset: {width: -40, height: 1},  
      shadowColor: '#ff0026',  
      shadowOpacity: 0.1,  
      shadowRadius: 1, elevation: 15,backgroundColor:'pink',height:hp(5), width:wp(90), borderRadius:10}}>
        <Styling title="Edit Profile" style={{color: 'purple',textAlign:'center', marginTop:6}}/>
      </TouchableOpacity>
      </View>
        </ImageBackground>
    </View>
  )
}

export default CatView

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
    opacity:.5,
  },
})