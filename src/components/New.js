import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
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
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
   
  const renderCat = ({ item} ) => {
    return (
      <TouchableOpacity
      onPress={() => handleCatPress(item.id)}
      style={styles.itemContainer}>
        <View>
        <View style={{flexDirection:'row',zIndex:1}}>
          <Styling title="Name: " style={{color:'purple'}}/>
          <Styling title={item.catName} style={{color:'purple'}}/>
        </View>
        <View style={{flexDirection:'row',zIndex:1}}>
          <Styling title="Breed: " style={{color:'purple'}}/>
          <Styling title={item.catBreed} style={{color:'purple'}}/>
        </View>
        <View style={{flexDirection:'row',zIndex:1}}>
          <Styling title="Age: " style={{color:'purple'}}/>
          <Styling title={item.catAgeYears} style={{color:'purple',marginLeft: 3, marginRight:2}}/>
          <Styling title="Year(s)" style={{color:'purple'}}/>
          <Styling title={item.catAgeMonths} style={{color:'purple',marginLeft: 3, marginRight:2}}/>
          <Styling title="Month(s)" style={{color:'purple'}}/>
        </View>
        </View>
        <TouchableOpacity style={{ backgroundColor:'#D496A7', width:width*0.20, height:height*0.045, borderBottomLeftRadius:10,alignItems:'center', justifyContent:'center',
      borderBottomRightRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10}} onPress={() => handleDelete(item.id)}>
          <Styling title="Delete" style={{color:'#564256', textAlign:'center'}}/>
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
    padding: 5,
    zIndex:1
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