import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import theme from '../CustomProperties/Theme';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config'
import Styling from '../CustomProperties/Theme2';
import { ScrollView } from 'react-native-gesture-handler';



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



loginUser = async(email,password)=>{
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password)
  }catch(error) {
       alert("email or password does not exist")
}
}




  return (

            <View style={{ margin: 0, backgroundColor: "#f8c8dc", width: "100%", flex: 1 }}>
              <View
                style={{
                  width: "100%",
                  height: height * 0.16,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: "9%"
                }}
              >
                <Image
                  source={require("../images/Signup.png")}
                  style={{ width: "100%", height: height * 0.22,resizeMode:'contain' }}
                />
              </View>
              <ScrollView>
                <View style={{ flex: 1 }}>
                  <View>
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
                      justifyContent: "space-between",
                      marginTop: 20,
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
                      }}
                      placeholder="Password"
                      onChangeText={(password) => setPassword(password)}
                      secureTextEntry={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  <TouchableOpacity
                    style={{ alignItems: "center", width: width * 0.74, marginTop: 5 }}
                    onPress={() => {
                      changePassword();
                    }}
                  >
                    <Styling
                      style={{ marginRight: 17, color: "#A6599E", fontSize: 12 }}
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
                </View>
              </ScrollView>
            </View>
          )
        }

export default Login

const styles = StyleSheet.create({
    

})