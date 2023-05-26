import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions, Keyboard, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import theme from '../CustomProperties/Theme';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config'
import Styling from '../CustomProperties/Theme2';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';



const Login = () => {
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const navigation = useNavigation() 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const changePassword = () =>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
      alert("Password reset email sent")
    }).catch((error) => {
      alert("Please don't leave field blank")
    })
}



const loginUser = async(email,password)=>{
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password)
  }catch(error) {
       alert("email or password does not exist")
}
}


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



  return (

            <View style={{ margin: 0, backgroundColor: "#f8c8dc", width: "100%", flex: 1 }}>
              <View
                style={{
                  width: "100%",
                  height: height * 0.25,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: "9%",
                  backgroundColor:'orange'
                }}
              >
                <Image
                  source={require("../images/Signup.png")}
                  style={{
                    width:width*1.05,
                    aspectRatio:1.7,
                    transform:[{scaleY:1.5}],
                    resizeMode: 'contain',
                  }}
                />
              </View>
                <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{marginTop:isKeyboardVisible?0:height*0.050}}>
                    <Styling
                      title="MEOWCOME BACK"
                      style={{ fontSize: 50, alignSelf: "center", color: "#A6599E" }}
                    />
                  </View>

                  <View
                    style={{
                      width: "100%",
                      height: height * 0.15,
                      alignItems: "center",
                      marginTop: height*0.05,
                    }}
                  >
                    <TextInput
                      style={{
                        borderBottomColor: "violet",
                        borderBottomWidth: 1,
                        width: width * 0.5,
                      }}
                      placeholder="Email Address"
                      onChangeText={(email) => setEmail(email)}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <TextInput
                      style={{
                        borderBottomColor: "violet",
                        borderBottomWidth: 0.9,
                        width: width * 0.5,
                        marginTop:height*0.05
                      }}
                      placeholder="Password"
                      onChangeText={(password) => setPassword(password)}
                      secureTextEntry={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  <TouchableOpacity
                    style={{ alignItems: "center",  marginTop: height*0.02,justifyContent:'center' }}
                    onPress={() => {
                      changePassword();
                    }}
                  >
                    <Styling
                      style={{ color: "#A6599E", fontSize: 12 }}
                      title="Forget Password?"
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: height * 0.08,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 40,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#ff85a2",
                        width: width * 0.5,
                        height: height * 0.05,
                        borderRadius: 20,
                        justifyContent: "center",
                      }}
                      onPress={() => loginUser(email, password)}
                    >
                      <Styling
                        title="Login"
                        style={{ alignSelf: "center", color: "white" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: height * 0.08,
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Styling title="Don't have an Account?" />
                    <TouchableOpacity onPress={() => navigation.navigate("Login2")}>
                      <Styling
                        style={{
                          alignSelf: "center",
                          alignItems: "center",
                          alignContent: "center",
                          color: "#A6599E",
                          marginLeft: 3,
                        }}
                        title="Sign In"
                      />
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
                </View>
            </View>
          )
        }

export default Login

const styles = StyleSheet.create({
    

})