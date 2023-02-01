import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {firebase} from './config'
import { createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Login2 from './src/screens/Login2'
import HomeScreen from './src/screens/HomeScreen';
import Dashboard from './src/screens/Dashboard';
import FAQ from './src/drawer-screens/FAQ';
import CatProfile from './src/drawer-screens/CatProfileManagement'
import Vets from './src/drawer-screens/Vets'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Sidebar from './src/Navigation/Sidebar';
import { Provider } from 'react-native-paper';
import UserProfile from './src/drawer-screens/UserProfile'
import CatEdit from './src/drawer-screens/CatEdit';
import Name from './src/Cat/Name'
import Age from './src/Cat/Age'
import Breed from './src/Cat/Breed'
import Gender from './src/Cat/Gender'
import Weight from './src/Cat/Weight'
import State from './src/Cat/State'
import Color from './src/Cat/Color'
import New from './src/components/New'
import Create from './src/drawer-screens/CreateProfile'
import GetFAQ from './src/components/FetchFAQ';
import CatView from './src/drawer-screens/CatView'
import Trying from './src/components/Trying';
import Catpicture from './src/components/Catpicture'



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();




function App(){
const [initialiiazing, setInitializing] = useState(true);
const [user, setUser] = useState();



//handle state change
function onAuthStateChanged(user){
  setUser(user);
  if (initialiiazing) setInitializing(false);
}


useEffect(()=>{
  const person = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return person;
}, []);

if (initialiiazing) return null;


 if (!user){
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
      name='Login'
      component={Login}
      />
      <Stack.Screen
      name='Login2'
      component={Login2}/>
    </Stack.Navigator>
  );
 }

 return(
  <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>} initialRouteName='Dashboard'>
        <Drawer.Screen name="Dashboard" component={Dashboard}/>
        <Drawer.Screen name='Cat Profile' component={CatProfile}/>
        <Drawer.Screen 
   name='FAQ' 
   component={FAQ}
   />
   <Drawer.Screen 
   name='Locate Vets' 
   component={Vets}
   />
           <Drawer.Screen name='Profile' component={UserProfile}/>
           <Drawer.Screen name='CatEdit' component={CatEdit}/>
           <Drawer.Screen name='Color' component={Color}/>
           <Drawer.Screen name='Name' component={Name}/>
           <Drawer.Screen name='Weight' component={Weight}/>
           <Drawer.Screen name='Age' component={Age}/>
           <Drawer.Screen name='Breed' component={Breed}/>
           <Drawer.Screen name='State' component={State}/>
           <Drawer.Screen name='Gender' component={Gender}/>
           <Drawer.Screen name='Create' component={Create}/>
           <Drawer.Screen name="New" component={New}/>
           <Drawer.Screen name="GetFAQ" component={GetFAQ}/>
           <Drawer.Screen name="CatView" component={CatView}/>
           <Drawer.Screen name="Trying" component={Trying}/>
           <Drawer.Screen name="CatPicture" component={Catpicture}/>

      </Drawer.Navigator>);}

export default ()=>{
  return(
    <Provider>
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    </Provider>
  )
}