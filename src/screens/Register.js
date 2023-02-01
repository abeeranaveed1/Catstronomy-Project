import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import 'react-native-gesture-handler';

const Register = (navigation) => {
  return (
    <View style={styles.container}>
    <View style={styles.smallcontainer}>
      <View>
        <Text style={styles.bodytext}> Welcome </Text>
      </View>
      <View style={styles.InputBox}>
    <TextInput style={styles.Input}
     placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"/>
    </View>
    <View style={styles.InputBox}>
    <TextInput
     placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"/>
    </View>
    <View style={styles.InputBox}>
    <TextInput
     placeholder="Re-enter Password"
                placeholderTextColor="#8b9cb5"/>
    </View>
    <View style={styles.button}>
    <Button title='Register Now' color="brown"/>
    </View>
    </View>
    </View>
  
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e99b94',
    width: wp(100),
    height: hp(100),
    justifyContent: 'space-around',
    flex: 1
  },
  bodytext: {
    flexDirection: 'row',
    fontSize: 40,
    textAlign: 'center'
  },
  smallcontainer: {
    height: hp(30),
    width: wp(50),
    marginLeft: 100,
    marginBottom: 200
  },
  Input: {
  

  },
  InputBox: {
    height: hp(5),
        width: wp(50),
        backgroundColor: 'brown',
        borderRadius: 4,
        marginBottom: 5,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
        
  },
  
  button:{
    borderRadius: 12,
    width: wp(30),
    alignSelf: 'center',
    marginTop: 10

  }

})