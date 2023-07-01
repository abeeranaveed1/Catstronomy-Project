import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../config';

const App = () => {
  const [imageUri, setImageUri] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    const fetchImage = async () => {
      const userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
      const user = await userRef.get();
      setImageUrl(user.data().profilePicture);
    };
    fetchImage();
  }, [firebase.auth().currentUser.uid]);



  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`images/${imageName}`);
    const snapshot = await ref.put(blob);

    return await snapshot.ref.getDownloadURL();
  };

  const saveImage = async () => {
    const imageUrl = await uploadImage(imageUri, 'profilePicture');
    const userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
    await userRef.update({ profilePicture: imageUrl }).then(alert("Profile picture updated"));
    setImageUrl(imageUrl);
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
    <View>
    <TouchableOpacity onPress={pickImage}>
      <Text>Pick an Image</Text>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity onPress={saveImage}>
        <Text>Save Image</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    <View>
      {imageUrl && (
        <Image
        
        key={new Date().getTime()}
        
        source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      )}
    </View>
    </View>
  );
};

export default App;

