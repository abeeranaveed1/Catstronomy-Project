import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { RumRaisin_400Regular } from '@expo-google-fonts/rum-raisin';

const Styling = ({ title, style }) => {
  let [fontsLoaded] = useFonts({
    'Rum': RumRaisin_400Regular,
  });
  if (!fontsLoaded) return null;
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rum',
  },
});

export default Styling;