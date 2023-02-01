import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../../config';

const Catpicture = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [userRef, setUserRef] = useState(null);
  
    useEffect(() => {
      const fetchImage = async () => {
        const user = firebase.auth().currentUser;
        setUserRef(user);
        const catData = await firebase
          .firestore()
          .collection(`users/${user.uid}/cats`)
          .doc(catId)
          .get();
        setImageUrl(catData.data().profilePicture);
      };
      fetchImage();
    }, [catId]);
  console.log(catId)
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
        console.error(error);
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
      const catRef = firebase
        .firestore()
        .collection(`users/${userRef.uid}/cats`)
        .doc(catId);
      await catRef.update({ profilePicture: imageUrl });
      alert('Profile picture updated');
      setImageUrl(imageUrl);
    };
  
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
              source={{ uri: imageUrl }}
              style={{ width: 200, height: 200 }}
            />)}
    </View>
    </View>
  );
};

export default Catpicture;