import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground,  Linking, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styling from '../CustomProperties/Theme2';
import {firebase} from '../../config';
import * as ImagePicker from 'expo-image-picker';





export default function Mood({navigation}) {
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // Initialize uploadedImageUrl state

useEffect(() => {
  const unsubscribe = navigation.addListener('blur', () => {
    // Refresh the page when navigating away from it
    setUploadedImageUrl(null);
  });

  return unsubscribe;
}, [navigation]);

const NoImage = ()=>{
    if(!uploadedImageUrl){
    alert("No Image Uploaded")
    }
    else{
        navigation.navigate('ResultsPage')
    }
}

const handleUploadPhoto = async () => {
  try {
    const { uri: imageURI, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (canceled) {
      return; // Exit if image selection/capture is cancelled
    }

    const response = await fetch(imageURI);
    const blob = await response.blob();
    const fileName = `${Date.now()}.jpeg`;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`Mood/${fileName}`).put(blob);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% complete`);
      },
      (error) => {
        console.log('Image upload error:', error);
      },
      async () => {
        const imageUrl = await uploadTask.snapshot.ref.getDownloadURL();
        setUploadedImageUrl(imageUrl);
        console.log('Image upload success. URL:', imageUrl);
      }
    );
  } catch (error) {
    console.log('Image upload error:', error);
  }
};

useEffect(() => {
  // Ignore the deprecated uri warning from ImagePicker
  console.warn = (message) => {
    if (message.includes('uri')) {
      console.log("URI deprecated error");
    } else {
      // Print other warnings as usual
      console.warn(message);
    }
  };
}, []);
  return (
    <View style={{backgroundColor:'black'}}>
        <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:'100%'}}>
<View style={{height:height*.08, marginTop:height*.01}}>
<Styling title="Upload an Image" style={{textAlign:'center', fontSize:30, color:'purple'}}/>
</View>
<View style={{backgroundColor:'white', height:height*.4,width:width*.9, opacity:.95, display:'flex',
 alignSelf:'center',
borderRadius:40,shadowOffset: {width: -50, height: 3},  
shadowColor: '#ff0026',  
shadowOpacity: 0.2,  
shadowRadius: 1, elevation: 25}}>
    <View style={{ height:height*.4, width:width*.8,
alignSelf:'center', justifyContent:'space-evenly'}}>
 <TouchableOpacity
              style={{
                backgroundColor: '#D3D3D3',
                height: height * 0.25,
                width: width * 0.5,
                alignSelf: 'center',
                borderRadius: 20,
              }}
              onPress={handleUploadPhoto}
            >
              {uploadedImageUrl ? (
                <Image
                  source={{ uri: uploadedImageUrl }}
                  style={{ flex: 1, borderRadius: 20 }}
                  resizeMode="contain"
                />
              ) : (
                <Styling title="No Image Uploaded" style={{ textAlign: 'center', marginTop: height * 0.1 }} />
              )}
            </TouchableOpacity>

<TouchableOpacity
              onPress={NoImage}
              style={{backgroundColor:'pink',height:height*.08, width:width*.5,
alignSelf:'center', borderRadius:30}}>
<Styling title="Results" style={{color:'purple',textAlign:'center', marginTop:height*.02, fontSize:20}}/>
</TouchableOpacity>
    </View>
    

</View>
<View style={{ height:height*.3, width:width*.8, display:'flex', alignSelf:'center', marginTop:height*.04}}>
<Image source={require('../images/Mood.png')} style={{height:'100%', width: '100%'}}/>
</View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})