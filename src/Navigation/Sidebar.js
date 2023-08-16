import { View, Text,Image, Dimensions, useWindowDimensions, ScrollView, Linking } from 'react-native'
import React, {useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UploadImage from '../components/Avatar';
import {firebase} from '../../config'
import {Ionicons, MaterialIcons,FontAwesome5,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import Styling from '../CustomProperties/Theme2';


const Sidebar = ({navigation}) => {
  const handleVetsNearYou = () => {
    Linking.openURL('https://www.google.com/maps/search/vets+near+me/')
  }

  const height=useWindowDimensions('screen').height;
  const width=useWindowDimensions('screen').width;  
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

    const category = [
      { title: 'Home', icon: 'ios-home', nav: 'Dashboard' },
      { title: 'Cat Profile', icon: 'pets', nav: 'Cat Profile' },
      { title: 'FAQ', icon: 'hands-helping', nav: 'FAQ' },
      { title: 'Locate Vets', icon: 'location-pin', handler: handleVetsNearYou }
    ];

    const category2 = [
      { title: 'Breed Detection', nav: 'Breeding' },
      { title: 'Mood Detection', nav: 'Mood' }
    ];
    
  const category3=[{title:'User Profile',icon:'user',nav:'Profile'},
  {title:'Logout',icon:'logout',nav:null
}];
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#ffccd5',height:height*0.30, alignItems:'center',justifyContent:'center'}}>
      <Image source={{uri: name.profilePicture}} style={{height:145,width:145,borderRadius:500,borderWidth:2}}/>
        <View style={{flexDirection:'row',marginTop:2}}>
        <Styling title={name.firstName} style={{marginRight:2.5, color:'purple'}}/>
        <Styling title={name.lastName} style={{color:'purple'}}/>
</View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor:'pink',height:'100%'}}>
        <View style={{justifyContent:'space-evenly',borderBottomColor:'purple',paddingVertical:height*0.02}}>
        <Styling title="Menu" style={{color:'#bd5dd5',marginLeft:width*0.02}}/>
        {category.map((item,index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>navigation.navigate(item.nav)} style={{flexDirection:'row', alignItems:'center',marginTop:height*0.03}}>
              {index==1 || index==3? <MaterialIcons name={item.icon} color="purple" style={{marginLeft:width*0.05,width:width*0.07}} size={24}/>: index==0?  <Ionicons name="ios-home" size={24} color="purple" style={{marginLeft:20,width:width*0.07}}/>: <FontAwesome5 name="hands-helping" color="purple" style={{marginLeft:20,width:width*0.07}} size={24}/>}
        <View style={{width:'100%'}}>
        <Styling title={item.title} style={{fontSize: 20,marginLeft:width*0.05, color:'purple'}}/>
        </View>
        </TouchableOpacity>
          )
        })} 
        </View>
        <View style={{backgroundColor:'pink',height:'25%',paddingVertical:height*0.02}}>
        <Styling title="Other Features" style={{color:'#bd5dd5',marginLeft:width*0.02}}/>
        {category2.map((items,index)=>{
          return(
          <TouchableOpacity key={index} style={{marginTop:height*0.03,marginLeft:width*0.02,}} onPress={()=>navigation.navigate(items.nav)}>
          <Styling title={items.title} style={{fontSize: 20,marginLeft:10, color:'purple'}}/>
          </TouchableOpacity>
          )
        })}
        </View>
         <View style={{backgroundColor:'#ffb3bf',height:height*0.25,paddingVertical:height*0.05}}>
      <Styling title="Settings" style={{color:'#bd5dd5',marginLeft:width*0.02}}/>
      {/* <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{flexDirection:'row', alignItems:'center'}}>
        <FontAwesome name='user' color='purple' style={{marginLeft:20}} size={24}/>
        <Styling title="User Profile" style={{fontSize: 17,marginLeft:10, color:'purple'}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> firebase.auth().signOut()} style={{flexDirection:'row', alignItems:'center'}}>
        <MaterialCommunityIcons name='logout' color='purple' style={{marginLeft:18}} size={24}/>
        <Styling title="Logout" style={{fontSize: 17,marginLeft:6, color:'purple'}}/>
        </TouchableOpacity> */}
        {category3.map((items,index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>{items.nav!=null?navigation.navigate(items.nav):firebase.auth().signOut()}} style={{flexDirection:'row', alignItems:'center',marginTop:height*0.03}}>
            {index==0?<FontAwesome name={items.icon} color='purple' style={{marginLeft:width*0.05,width:width*0.07}} size={24}/>:<MaterialCommunityIcons name={items.icon} color='purple' style={{marginLeft:width*0.05,width:width*0.07}} size={24}/>}
            <Styling title={items.title} style={{fontSize: 17,marginLeft:height*0.01, color:'purple'}}/>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
   
    </ScrollView>
      </View>
  )
}
export default Sidebar;