import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity,RadioButton, Dimensions, Keyboard } from 'react-native'
import React,{useState, useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';
import {firebase} from '../../config'
import Styling from '../CustomProperties/Theme2';
import {FontAwesome} from 'react-native-vector-icons'
import {collection, doc, setDoc, addDoc,updateDoc, Firestore} from 'firebase/firestore'
import DateTimePicker from '@react-native-community/datetimepicker'


const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const UserProfile = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
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
    <View style={{width:'100%',alignItems:'center'}}>
      <View style={{position:'absolute',zIndex:1,height:isKeyboardVisible? 100:150,width:isKeyboardVisible? 100:150,marginTop:isKeyboardVisible? height*0.05:height*0.12}}>
          <TouchableOpacity
        onPress={()=> navigation.navigate('Trying')}
        style={{backgroundColor: 'transparent',height:'100%',width:'100%',alignItems:'center'}}>
        <Image source={{uri: name.profilePicture}} style={{height:'100%',width:'100%',borderRadius:100,borderColor:'#564256',borderWidth:2}}/>
        </TouchableOpacity>
    </View>
      <View style={{backgroundColor:'#E4959E',height:'25%',flexDirection:'row',borderBottomWidth:1.2,justifyContent:'center'}}>
        <View style={{width:'50%',alignItems:'center',paddingRight:width*0.2}}>
            <Image source={require('../images/Userprofile.png')} style={{marginTop:isKeyboardVisible?height*-0.0075:height*0.0616,aspectRatio:1,height:isKeyboardVisible?'150%':'100%',resizeMode:'contain',transform:[{scale:1}]}}/>
          </View>

          <View style={{width:'50%',alignItems:'center',paddingLeft:width*0.2}}>
            <Image source={require('../images/Userprofile2.png')}  style={{marginTop:isKeyboardVisible?height*-0.0075:height*0.0616,aspectRatio:1,height:isKeyboardVisible?'150%':'100%',resizeMode:'contain',transform:[{scale:1}]}}/>
          </View>  
      </View>
      <View style={{backgroundColor:'#F3E1DD',height:'75%',width:'100%',borderWidth:1}}>
        <View style={{marginTop:height*0.10,paddingHorizontal:'10%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Styling title="Primary Details" style={{color:'#564256',marginBottom:7,fontSize:15}}/>
          <Styling title="First Name" style={{color:'#564256'}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
        placeholder={name.firstName}
        placeholderTextColor='#564256'
        onChangeText={(fName)=>setFName(fName)}/>
        </View>
        <Styling title="Last Name" style={{color:'#564256',marginTop:10}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
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
        <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
        placeholder={name.email}
        placeholderTextColor='#564256'
        editable={false}
             selectTextOnFocus={false}/>
        </View>
        <Styling title="Phone Number" style={{color:'#564256',marginTop:10}}/>
          <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
        <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
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
      <TouchableOpacity onPress={handleViewPress} style={{width:width*0.70,height:height*0.045,borderRadius:7,borderColor:'#96939B',borderBottomWidth:0.7,marginTop:5,alignItems:'flex-start'}}>
      {date && <Styling title={calculateAge()} style={{color:'#564256', marginTop:5,marginLeft:20}}/>}
      </TouchableOpacity>
      <Styling title="Years" style={{alignSelf:'center', marginLeft:5, marginTop:5, color:'#564256'}}/>
      </View>
        <View style={{height:height*0.01}}></View>
        </ScrollView>
          </View>
      </View>
    </View>
    
//     <View style={{flex:1, width:'100%',backgroundColor:'#F3E1DD',justifyContent:'center',alignItems:'center'}}>
//       <View style={{backgroundColor:'#E4959E',height:'25%',width:'100%'}}>
        // <View style={{flexDirection:'row',height:'100%',width:'100%',paddingTop:'20.7%',justifyContent:'space-between'}}>
          // <Image source={require('../images/Userprofile.png')} style={{height:130,width:130,marginLeft:'-3%'}}/>
          // <Image source={require('../images/Userprofile2.png')} style={{height:130,width:130,marginRight:'-3%'}}/>
        // </View>
        // <TouchableOpacity
        // onPress={()=> navigation.navigate('Trying')}
        // style={{backgroundColor:'#FFFFF0',height:150,width:150,borderRadius:100,position:'absolute',left:103,top:70, alignItems:'center'}}>
        // <Image source={{uri: name.profilePicture}} style={{height:'100%',width:'100%',borderRadius:100,borderColor:'#564256',borderWidth:2}}/>
        // </TouchableOpacity>
//       </View>
//       <View style={{flex:1,width:'100%'}}></View>
//       <View style={{width:'100%',height:'65%',borderWidth:1,alignItems:'center',backgroundColor:'#F3E1DD'}}>
      //   <ScrollView style={{marginBottom:'20%'}}>
      //   <Styling title="Primary Details" style={{color:'#564256',marginBottom:7,fontSize:15}}/>
      //     <Styling title="First Name" style={{color:'#564256'}}/>
      //     <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
      //   <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
      //   placeholder={name.firstName}
      //   placeholderTextColor='#564256'
      //   onChangeText={(fName)=>setFName(fName)}/>
      //   </View>
      //   <Styling title="Last Name" style={{color:'#564256',marginTop:10}}/>
      //     <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
      //   <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
      //   placeholder={name.lastName}
      //   placeholderTextColor='#564256'
      //   onChangeText={(lastName)=> setLastName(lastName)}/>
      //   </View>  
      //   <Styling title="Contact Information" style={{color:'#564256',marginBottom:7,fontSize:15,marginTop:20}}/>
      //   <View style={{flexDirection:'row'}}>
      //   <FontAwesome name='lock' color='#564256' size={18} style={{marginRight:5}}/>
      //   <Styling title="Email Address" style={{color:'#564256'}}/>
      //   </View>
      //   <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
      //   <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
      //   placeholder={name.email}
      //   placeholderTextColor='#564256'
      //   editable={false}
      //        selectTextOnFocus={false}/>
      //   </View>
      //   <Styling title="Phone Number" style={{color:'#564256',marginTop:10}}/>
      //     <View style={{borderRadius:7,borderColor:'#96939B',borderWidth:0.7,marginTop:5}}>
      //   <TextInput style={{borderBottomColor:'#96939B', width:width*0.70,alignSelf:'center',color:'#564256'}}
      //   placeholder={name.phoneNumber}
      //   placeholderTextColor='#564256'
      //   keyboardType={'number-pad'}
      //   onChangeText={(phoneNumbers)=> setPhoneNumbers(phoneNumbers)}/>
      //   </View>
      //   <View style={{marginTop:10}}>
      //   <Styling title="Date of Birth" style={{color:'#564256'}}/>
      // </View>
      //  {show &&  <DateTimePicker
      //   value={date}
      //   mode='date'
      //   format='YYYY-MM-DD'
      //   confirmBtnText='Confirm'
      //   cancelBtnText='Cancel'
      //   onChange={handleDateChange}
      //   maximumDate={new Date()}
      // />}
      // <View style={{flexDirection:'row'}}>
      // <TouchableOpacity onPress={handleViewPress} style={{width:width*0.70,height:height*0.045,borderRadius:7,borderColor:'#96939B',borderBottomWidth:0.7,marginTop:5,alignItems:'flex-start'}}>
      // {date && <Styling title={calculateAge()} style={{color:'#564256', marginTop:5,marginLeft:20}}/>}
      // </TouchableOpacity>
      // <Styling title="Years" style={{alignSelf:'center', marginLeft:5, marginTop:5, color:'#564256'}}/>
      // </View>
      //   <View style={{height:height*0.01}}></View>
      //   </ScrollView>
// <View style={{height:height*0.10,width:width*0.80}}>
// <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
//         <TouchableOpacity style={{backgroundColor:'#D496A7',height:height*0.05,marginTop:10,borderRadius:15,width:width*0.25,alignItems:'center'}}
//         onPress={()=>navigation.navigate('Dashboard')}>
//           <Styling title='Discard' style={{marginTop:7,color:'#564256'}}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{backgroundColor:'#D496A7',height:height*0.05,marginTop:10,borderRadius:15,width:width*0.53,alignItems:'center'}}
//         onPress={()=> {
//           Update();
//           }}>
//         <Styling title='Update Changes' style={{marginTop:7,color:'#564256'}}/>
//         </TouchableOpacity>
//         </View>
// </View>
//       </View>
//     </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})