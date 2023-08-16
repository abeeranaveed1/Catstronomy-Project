import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Image, Linking } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Afraid = ({ navigation }) => {
  const handleVetsNearYou = () => {
    Linking.openURL('https://www.google.com/maps/search/vets+near+me/');
  };

  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the ScrollView when the component mounts
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
        <Styling title="Signs that show your cat is Afraid" style={{fontSize:20,textAlign:'center'}}/>

          <View style={{marginTop:height*.02,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Body posture and stance" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'45%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="A fearful cat will typically display a defensive body posture. They may crouch low to the ground with their tail tucked, flatten their ears against their head, and attempt to make themselves appear smaller."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/scare.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Dilated pupils" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row-reverse',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%',marginRight:width*.025, marginTop:height*.04}}>
<Styling title="When a cat is afraid, their pupils often dilate to allow more light in, making their eyes appear larger than usual. Dilated pupils can be a clear indication of fear or anxiety in cats."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/cute.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Hiding or seeking shelter" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="If your cat is afraid, they may seek hiding places or try to find a safe retreat. They may hide under furniture, in closets, or in other enclosed spaces to minimize exposure and feel more secure."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/hide.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Aggressive or defensive behavior" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row-reverse',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%',marginRight:width*.025, marginTop:height*.04}}>
<Styling title="Fear can sometimes manifest as aggression in cats. If they feel threatened or frightened, they may hiss, growl, swat, or even try to scratch or bite in an attempt to protect themselves."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/hulk.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Excessive grooming or self-soothing behaviors" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'60%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="Some cats engage in excessive grooming as a self-soothing mechanism when they are afraid or stressed. If your cat is constantly grooming themselves, to the point where it causes skin irritation or hair loss, it could be a sign of fear or anxiety."/>
</View>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/soothe.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
  
          <Styling title="NOTE: IF YOUR CAT IS DISPLAYING SEVERE SYMPTOMS OF STRESS, SEEK PROFESSIONAL HELP FROM THE NEAREST VET" style={{fontSize:15,textAlign:'center', marginTop:height*.02}}/>
<TouchableOpacity
onPress={handleVetsNearYou} style={{display:'flex',alignSelf:'center',height:height*.05, width:width*.9, backgroundColor:'pink', marginTop:height*.03, borderRadius:35}}>
  <Styling title="Vets Near You" style={{color:'purple', fontSize:15, textAlign:'center', marginTop:height*.01}}/>
</TouchableOpacity>

<View style={{alignSelf:'center', width:width*.6, height:height*.35}}>
<Image source={require('../images/thinking.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
<Styling title="Your cat's behavior does not match the ones displayed on this page? Look up our Mood Chart or Try again!" style={{fontSize:15,textAlign:'center', marginTop:height*.02}}/>
<View style={{display:'flex', flexDirection:'row', width:width*.9, justifyContent:'space-between', alignSelf:'center'}}>
<TouchableOpacity
onPress={()=>navigation.navigate('Chart')}

 style={{display:'flex',alignSelf:'center',height:height*.05, width:width*.4, backgroundColor:'pink', marginTop:height*.03, borderRadius:35}}>
  <Styling title="Mood Chart" style={{color:'purple', fontSize:15, textAlign:'center', marginTop:height*.01}}/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>navigation.navigate('Mood')}
style={{display:'flex',alignSelf:'center',height:height*.05, width:width*.4, backgroundColor:'pink', marginTop:height*.03, borderRadius:35}}>
  <Styling title="Mood Detection" style={{color:'purple', fontSize:15, textAlign:'center', marginTop:height*.01}}/>
</TouchableOpacity>
</View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    opacity:.75
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
});

export default Afraid;