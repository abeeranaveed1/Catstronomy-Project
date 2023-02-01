import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import theme from '../CustomProperties/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Navbar = (props) => {
  return (
    <View>
     <View style={{backgroundColor: theme.colors.primary, width: wp(100), height: hp(6), flexDirection: 'row', justifyContent: 'space-between'}}> 
     <Avatar.Icon size={25} icon="menu" style={{backgroundColor:'transparent',alignSelf: 'center'}}/>
       <Text style={{alignSelf: 'center', color: 'white'}}> Welcome {props.name} </Text>
     
       <Avatar.Icon size={25} icon="logout" style={{backgroundColor:'transparent',alignSelf: 'center'}}></Avatar.Icon>
     
       </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})