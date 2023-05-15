import { View, Text,Image, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UploadImage from '../components/Avatar';
import {firebase} from '../../config'
import {Ionicons, MaterialIcons,FontAwesome5,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import Styling from '../CustomProperties/Theme2';

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Sidebar = ({navigation}) => {
  const [name , setName] = useState('');
  const [update, setUpdate] = useState(false);
  
  useEffect(()=>{
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((snapshot)=>{
        if(snapshot.exists){
          setName(snapshot.data())
        }
        else{
          console.log("User does not exist")
        }
      });
    }, [update])
  
  function Update() {
      if (fName) {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .update({
            firstName: fName
          });
      }
      if (lastName) {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .update({
            lastName: lastName
          });
      }
      setUpdate(!update);
    }

  return (
    <View>
      <View style={{backgroundColor:'#ffccd5',height:height*0.25, alignItems:'center'}}>
      <Image source={{uri: name.profilePicture}} style={{height:145,width:145,borderRadius:500,borderWidth:2, marginTop:5}}/>
        <View style={{flexDirection:'row',marginTop:2}}>
        <Styling title={name.firstName} style={{marginRight:2.5, color:'purple'}}/>
        <Styling title={name.lastName} style={{color:'purple'}}/>
</View>
      </View>
      <View style={{backgroundColor:'pink', height:'60%',justifyContent:'space-evenly'}}>
        <Styling title="Menu" style={{color:'#bd5dd5',marginBottom:'-20%',marginLeft:3}}/>
        <View style={{justifyContent:'space-evenly',height:'60%',borderBottomColor:'purple'}}>
      <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Dashboard')}>
        <Ionicons name="ios-home" size={24} color="purple" style={{marginLeft:20}}/>
          <Styling title="Home" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=>navigation.navigate('Cat Profile')}>
          <MaterialIcons name='pets' color="purple" style={{marginLeft:20}} size={24}/>
          <Styling title="Cat Profile" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('FAQ')} style={{flexDirection:'row', alignItems:'center'}}>
          <FontAwesome5 name="hands-helping" color="purple" style={{marginLeft:20}} size={24}/>
          <Styling title="FAQ" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Locate Vets')} style={{flexDirection:'row', alignItems:'center'}}>
        <MaterialIcons name='location-pin' color="purple" style={{marginLeft:20}} size={24}/>
        <Styling title="Locate Vets" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        </View>
        <Styling title="Other Features" style={{color:'#bd5dd5',marginLeft:3}}/>
        <View style={{backgroundColor:'pink',height:'20%',justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Locate Vets')}>
        <Styling title="Breed Detection" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Locate Vets')}>
        <Styling title="Mood Detection" style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:'#ffb3bf',height:'15%', justifyContent:'space-evenly',paddingVertical:'5%'}}>
      <Styling title="Settings" style={{color:'#bd5dd5',marginLeft:3,marginTop:'-4%'}}/>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{flexDirection:'row', alignItems:'center'}}>
        <FontAwesome name='user' color='purple' style={{marginLeft:20}} size={24}/>
        <Styling title="User Profile" style={{fontSize: 17,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> firebase.auth().signOut()} style={{flexDirection:'row', alignItems:'center'}}>
        <MaterialCommunityIcons name='logout' color='purple' style={{marginLeft:18}} size={24}/>
        <Styling title="Logout" style={{fontSize: 17,marginLeft:6, color:'purple'}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Sidebar;