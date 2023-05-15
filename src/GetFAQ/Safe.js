import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {firebase} from '../../config';
import Styling from '../CustomProperties/Theme2';




const Safe = ({navigation}) => {
  const [Safety, setSafety] = useState([]);

  useEffect(() => {
    const FAQRef = firebase.firestore().collection(`Safety`);
    FAQRef.onSnapshot((querySnapshot) => {
      const newSafety = [];
      querySnapshot.forEach((doc) => {
        newSafety.push({ id: doc.id, ...doc.data() });
      });
      setSafety(newSafety);
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
       showsVerticalScrollIndicator={false}
        data={Safety}
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

  export default Safe