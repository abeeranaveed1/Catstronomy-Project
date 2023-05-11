import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {firebase} from '../../config';
import Styling from '../CustomProperties/Theme2';




const NutritionFAQ = ({navigation}) => {
  const [Nutrition, setNutrition] = useState([]);

  useEffect(() => {
    const FAQRef = firebase.firestore().collection(`Nutrition`);
    FAQRef.onSnapshot((querySnapshot) => {
      const newNutrition = [];
      querySnapshot.forEach((doc) => {
        newNutrition.push({ id: doc.id, ...doc.data() });
      });
      setNutrition(newNutrition);
    });
  }, []);

  const renderFAQ = ({ item} ) => {
    return (
      <View
      style={styles.itemContainer}>
        <View>
        <View style={{flexDirection:'row'}}>
          
          <Styling title={item.Question} style={{color:'purple', marginBottom:5}}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Styling title={item.Answer} style={{color:'purple', marginTop:5}}/>
        </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={Nutrition}
        renderItem={renderFAQ}
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
    
  },
  itemContent: {
    flex: 1,
  },})

  export default NutritionFAQ