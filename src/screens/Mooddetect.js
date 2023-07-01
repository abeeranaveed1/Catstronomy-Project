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
      // Open the image picker or camera to select/capture an image
      // Use a library or component of your choice to handle this step
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!image.canceled) {
        // Once the user has selected/captured an image, get its URI
        const imageURI = image.uri;

        // Create a unique file name for the uploaded image
        const fileName = `${Date.now()}.jpg`; // Example: 1626375912345.jpg

        // Reference to the firebase storage bucket
        const storageRef = firebase.storage().ref();

        // Upload the image to the "Breed" folder in the storage bucket
        const uploadTask = storageRef.child(`Mood/${fileName}`).put(imageURI); // Use `put` instead of `putFile`

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Handle progress (optional)
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% complete`);
          },
          (error) => {
            // Handle error
            console.log('Image upload error:', error);
          },
          async () => {
            // Handle successful upload
            const imageUrl = await uploadTask.snapshot.ref.getDownloadURL();
            setUploadedImageUrl(imageUrl);
            console.log('Image upload success. URL:', imageUrl);
          }
        );
      }
    } catch (error) {
      console.log('Image upload error:', error);
    }
  };
  return (
    <View style={{backgroundColor:'black'}}>
        <ImageBackground source={require('../images/background.png')} style={{opacity:.9,height:'100%'}}>
<View style={{height:height*.08, marginTop:height*.01}}>
<Styling title="Upload an Image" style={{textAlign:'center', fontSize:30, color:'purple'}}/>
</View>
<View style={{backgroundColor:'white', height:height*.4,width:width*.9, opacity:.95, display:'flex',
 alignSelf:'center',
borderRadius:40}}>
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