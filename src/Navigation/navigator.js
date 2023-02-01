import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Login2 from '../screens/Login2';
import Dashboard from '../screens/Dashboard';
const navigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    
  
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name ='Login2' component={Login2}/>
        <Stack.Screen name="password" component={Forgot_Password}/>
      </Stack.Navigator>
  
   
  )
}

export default navigator

const styles = StyleSheet.create({})