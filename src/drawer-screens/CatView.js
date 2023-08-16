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

  const [catData, setCatData] = useState({
    profilePicture: '',
  });

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        if (catId) {
          const user = firebase.auth().currentUser;
          const catRef = firebase.firestore().collection(`users/${user.uid}/cats`).doc(catId);
          const doc = await catRef.get();
          if (doc.exists) {
            const catData = doc.data();
            let profilePicture = '';
            if (catData.profilePicture) {
              profilePicture = await firebase.storage().refFromURL(catData.profilePicture).getDownloadURL();
            }
            setCatData((prevData) => ({
              ...prevData,
              ...catData,
              profilePicture: profilePicture,
            }));
          }
        }
      } catch (error) {
        console.log('Error fetching cat data:', error);
      }
    };
  
    fetchCatData();
  }, [catId]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const unsubscribe = firebase
      .firestore()
      .collection(`users/${user.uid}/cats`)
      .doc(catId)
      .onSnapshot((doc) => {
        setCatData((prevData) => ({
          ...prevData,
          ...doc.data(),
        }));
      });

    return () => unsubscribe();
  }, [catId]);

  function updateCatProfile() {
    const user = firebase.auth().currentUser;
    const catRef = firebase.firestore().collection(`users/${user.uid}/cats`).doc(catId);
    const updatedData = {};

    if (catName) {
      updatedData.catName = catName;
    }
    if (catBreed) {
      updatedData.catBreed = catBreed;
    }
    if (catAgeYears) {
      updatedData.catAgeYears = catAgeYears;
    }
    if (catAgeMonths) {
      updatedData.catAgeMonths = catAgeMonths;
    }
    if (catGender) {
      updatedData.catGender = catGender;
    }
    if (catState) {
      updatedData.catState = catState;
    }
    if (catColor) {
      updatedData.catColor = catColor;
    }
    if (catWeight) {
      updatedData.catWeight = catWeight;
    }
    if (catNature) {
      updatedData.catNature = catNature;
    }

    catRef.update(updatedData).then(() => {
      console.log('Cat profile updated successfully!');
    }).catch((error) => {
      console.log('Error updating cat profile:', error);
    });
  }

  
  
  
  
  

  
  return (
    <View style={{backgroundColor:'pink',height:hp(85), width:wp(100)}}>
      <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(111), overflow:'hidden', opacity:.75, alignItems:'center', backgroundColor:'orange',marginTop:'-20%'}}>
      <View style={[styles.circle, { width: width / 2, height: width / 2, borderRadius: width / 4, marginTop: '21%' }]}>
        {catData.profilePicture ? (
          <Image source={{ uri: catData.profilePicture }} style={{ width: '100%', height: '100%', borderRadius: width / 4 }} resizeMode="contain" />
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
  <Styling title={catData.catName} style={{color:'purple', textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(25), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Breed" style={{color:'purple', marginTop:5}}/>
  <Styling title={catData.catBreed} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Color" style={{color:'purple', marginTop:5}}/>
  <Styling title={catData.catColor} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
</View>
          </View>
          <View style={{width:wp(90), height:hp(10), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Age" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row',marginTop:5}}>
  <Styling title={catData.catAgeYears} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(5)}}/>
    <Styling title="Year(s)" style={{color:'purple'}}/>
  <Styling title={catData.catAgeMonths} style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(6),textAlign:'center'}}/>
  <Styling title="Month(s)" style={{color:'purple'}}/>
  </View>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Weight" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row'}}>
  <Styling title={catData.catWeight} style={{color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(20)}}/>
    <Styling title="Kg" style={{color:'purple'}}/>
  </View>
</View>
          </View>
          <View style={{height:hp(10), width:wp(90), flexDirection:'row', justifyContent:'space-between'}}>
  <View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Gender" style={{color:'purple', marginTop:5}}/>
  <Styling title={catData.catGender} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(30)}}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Nature" style={{color:'purple', marginTop:5}}/>
  <Styling title={catData.catNature} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(30)}}/>
</View>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(90), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="State" style={{color:'purple', marginTop:5}}/>
  <Styling title={catData.catState} style={{marginTop:10,color:'purple',textAlign:'center',borderColor:'purple',borderBottomWidth:.5,width:wp(75)}}/>
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