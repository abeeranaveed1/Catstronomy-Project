import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity,RadioButton } from 'react-native'
import React,{useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';
import {firebase} from '../../config'
import Styling from '../CustomProperties/Theme2';
import {FontAwesome} from 'react-native-vector-icons'
import {collection, doc, setDoc, addDoc,updateDoc, Firestore} from 'firebase/firestore'
import DateTimePicker from '@react-native-community/datetimepicker'




const UserProfile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [age,setAge] = useState('');

  const handleViewPress = () => {
    setShow(true);
  }

  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (event?.type === 'dismissed') {
        setDate(date);
    }else{
        setDate(selectedDate);
    }
    setShow(false);
};

  const calculateAge = () => {
    if (date) {
      const today = new Date();
      const birthdate = new Date(date);
      let age = today.getFullYear() - birthdate.getFullYear();
      const month = today.getMonth() - birthdate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
        console.log(date)
      }
      return age;
    }
  }

  const [fName, setFName] = useState('');
const [lastName, setLastName] = useState('');
const [phoneNumbers, setPhoneNumbers] = useState('');
const [name , setName] = useState('')



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





useEffect(()=>{
firebase.firestore().collection('users')
.doc(firebase.auth().currentUser.uid).get()
.then((snapshot)=>{
if(snapshot.exists){
setName(snapshot.data())
}
else{
console.log("User does not exist")
}
})
}, [])

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
if (phoneNumbers) {
firebase.firestore().collection('users')
.doc(firebase.auth().currentUser.uid)
.update({
phoneNumber: phoneNumbers
});
}
//refresh data after update
firebase.firestore().collection('users')
.doc(firebase.auth().currentUser.uid).get()
.then((snapshot)=>{
if(snapshot.exists){
setName(snapshot.data())
alert("Changes made Successfully!")
}
else{
console.log("User does not exist")
}
})
};

  



 

  return (
    <View style={{height:hp(200), width:wp(100),backgroundColor:'#F3E1DD'}}>
      <View style={{backgroundColor:'#E4959E',height:hp(25),width:wp(100)}}>
        <Image source={require('../images/Userprofile.png')} style={{height:hp(25),width:wp(25),position:'relative',top:49}}/>
        <Image source={require('../images/Userprofile2.png')} style={{height:hp(25),width:wp(28),position:'relative',left:300,top:-124}}/>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Trying')}
        
        style={{backgroundColor:'#FFFFF0',height:hp(30),width:wp(49),borderRadius:210 / 2,position:'absolute',left:103,top:70, alignItems:'center'}}>
        <Image source={{uri: name.profilePicture}} style={{height:'100%',width:'100%',borderRadius:200 / 2,borderColor:'#564256',borderWidth:2}}/>
        </TouchableOpacity>
      </View>
      <View style={{height:hp(17),width:wp(100)}}></View>
      <View style={{height:hp(46.3),width:wp(100),alignItems:'center',backgroundColor:'#F3E1DD'}}>
        <ScrollView style={{width:wp(80),height:hp(60)}}>
        <Styling title="Primary Details" style={{color:'#564256',marginBottom:7,fontSize:15}}/>
          <Styling title="First Name" style={{color:'#564256'}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:wp(70),alignSelf:'center',color:'#564256'}}
        placeholder={name.firstName}
        placeholderTextColor='#564256'
        onChangeText={(fName)=>setFName(fName)}/>
        </View>
        <Styling title="Last Name" style={{color:'#564256',marginTop:10}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:wp(70),alignSelf:'center',color:'#564256'}}
        placeholder={name.lastName}
        placeholderTextColor='#564256'
        onChangeText={(lastName)=> setLastName(lastName)}/>
        </View>

      
        
        <Styling title="Contact Information" style={{color:'#564256',marginBottom:7,fontSize:15,marginTop:20}}/>
        <View style={{flexDirection:'row'}}>
        <FontAwesome name='lock' color='#564256' size={18} style={{marginRight:5}}/>
        <Styling title="Email Address" style={{color:'#564256'}}/>
        </View>
        <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:wp(70),alignSelf:'center',color:'#564256'}}
        placeholder={name.email}
        placeholderTextColor='#564256'
        editable={false}
             selectTextOnFocus={false}/>
        </View>
        <Styling title="Phone Number" style={{color:'#564256',marginTop:10}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:wp(70),alignSelf:'center',color:'#564256'}}
        placeholder={name.phoneNumber}
        placeholderTextColor='#564256'
        keyboardType={'number-pad'}
        onChangeText={(phoneNumbers)=> setPhoneNumbers(phoneNumbers)}/>
        </View>
        <View style={{marginTop:10}}>
        <Styling title="Date of Birth" style={{color:'#564256'}}/>
      </View>
       {show &&  <DateTimePicker
        value={date}
        mode='date'
        format='YYYY-MM-DD'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        onChange={handleDateChange}
        maximumDate={new Date()}
      />}
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={handleViewPress} style={{width:wp(70),height:hp(4.5),borderRadius:7,borderColor:'#96939B',borderBottomWidth:0.7,marginTop:5,alignItems:'flex-start'}}>
      {date && <Styling title={calculateAge()} style={{color:'#564256', marginTop:5,marginLeft:20}}/>}
      </TouchableOpacity>
      <Styling title="Years" style={{alignSelf:'center', marginLeft:5, marginTop:5, color:'#564256'}}/>
      </View>
        <View style={{height:hp(1)}}></View>
        </ScrollView>
<View style={{height:hp(10),width:wp(80)}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
        <TouchableOpacity style={{backgroundColor:'#D496A7',height:hp(5),marginTop:10,borderRadius:15,width:wp(25),alignItems:'center'}}
        onPress={()=>navigation.navigate('Dashboard')}>
          <Styling title='Discard' style={{marginTop:7,color:'#564256'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#D496A7',height:hp(5),marginTop:10,borderRadius:15,width:wp(53),alignItems:'center'}}
        onPress={()=> {
          Update();
          }}>
        <Styling title='Update Changes' style={{marginTop:7,color:'#564256'}}/>
        </TouchableOpacity>
        </View>
</View>
      </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})