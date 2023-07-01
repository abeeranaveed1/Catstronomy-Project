import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {firebase} from '../../config';
import Styling from '../CustomProperties/Theme2';

const GetBehave = ({navigation}) => {
  const [Behave, setBehave] = useState([]);

  useEffect(() => {
    const FAQRef = firebase.firestore().collection(`Behavior`);
    FAQRef.onSnapshot((querySnapshot) => {
      const newBehave = [];
      querySnapshot.forEach((doc) => {
        newBehave.push({ id: doc.id, ...doc.data() });
      });
      setBehave(newBehave);
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
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList 
          data={Behave}
          renderItem={renderFAQ}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    paddingBottom: 100,
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
  },
});

export default GetBehave;
