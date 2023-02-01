import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {firebase} from '../../config';
import Styling from '../CustomProperties/Theme2';
import { useNavigation } from '@react-navigation/native';



const CatList = () => {
  const [catList, setCatList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const user = firebase.auth().currentUser;
    const catRef = firebase.firestore().collection(`users/${user.uid}/cats`);
    catRef.onSnapshot((querySnapshot) => {
      const newCatList = [];
      querySnapshot.forEach((doc) => {
        newCatList.push({ id: doc.id, ...doc.data() });
      });
      setCatList(newCatList);
    });
  }, []);

  const handleCatPress = (catId) => {
    navigation.navigate('CatView', { catId });
    };

  const renderCat = ({ item} ) => {
    return (
      <TouchableOpacity
      onPress={() => handleCatPress(item.id)}
      style={styles.itemContainer}>
        <View>
        <View style={{flexDirection:'row'}}>
          <Styling title="Name: " style={{color:'purple'}}/>
          <Styling title={item.catName} style={{color:'purple'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Styling title="Breed: " style={{color:'purple'}}/>
          <Styling title={item.catBreed} style={{color:'purple'}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Styling title="Age: " style={{color:'purple'}}/>
          <Styling title={item.catAgeYears} style={{color:'purple',marginLeft: 3, marginRight:2}}/>
          <Styling title="Year(s)" style={{color:'purple'}}/>
          <Styling title={item.catAgeMonths} style={{color:'purple',marginLeft: 3, marginRight:2}}/>
          <Styling title="Month(s)" style={{color:'purple'}}/>
        </View>
        </View>
        <TouchableOpacity style={{ alignSelf:'center',backgroundColor:'#D496A7', width:wp(20), height:hp(5), borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10}} onPress={() => handleDelete(item.id)}>
          <Styling title="Delete" style={{color:'#564256', textAlign:'center', marginTop:6}}/>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  const handleDelete = async (id) => {
    const user = firebase.auth().currentUser;
    const catRef = firebase.firestore().collection(`users/${user.uid}/cats`).doc(id);
    await catRef.delete();
    console.log('Deleted cat with ID: ', id);
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={catList}
        renderItem={renderCat}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    opacity:.9
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: .2,
    borderBottomColor: 'grey',
    
  },
  itemContent: {
    flex: 1,
  },})

  export default CatList