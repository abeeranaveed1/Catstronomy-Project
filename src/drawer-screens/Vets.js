import React, { useEffect } from 'react';
import { View, Text, Alert, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import { firebase } from '../../config';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2';
const LocationPage = () => {
    useEffect(() => {
        askForLocationPermission();
    }, []);

    const askForLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Please enable location', 'To use this feature, please enable location in your device settings');
    }
  };

    const getCurrentLocation = async () => {
        try {
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            saveLocationToFirestore(location);
        } catch (error) {
            console.log("Could not fetch data, please enable location");
        }
    };
    const saveLocationToFirestore = async (location) => {
      const { latitude, longitude } = location.coords;
      let uid = firebase.auth().currentUser.uid;
      // add the location data to the 'users' collection in Firestore
      firebase.firestore().collection('users').doc(uid).update({
          location: {
              latitude,
              longitude
          }
      });
  }

    return (
        <View>
            <ImageBackground style={{height:hp(100), width:wp(100)}} source={require('../images/background.png')}>
            <TouchableOpacity onPress={getCurrentLocation} style={{alignSelf:'center', height:hp(10),
          width:wp(80), backgroundColor:'pink',marginTop:'60%', borderBottomLeftRadius:20,
          borderBottomRightRadius:20,borderTopLeftRadius:20, borderTopRightRadius:20,
          shadowColor: '#ff0026',  
        shadowOpacity: 0.1,  
        shadowRadius: 1, elevation: 15}}> 
            
            <Styling title="Click me to save your location" style={{color:'purple', alignSelf:'center', marginTop:30, fontSize:20}}/>

             </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default LocationPage;
