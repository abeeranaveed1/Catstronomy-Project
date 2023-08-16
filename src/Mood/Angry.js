import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Angry = ({navigation}) => {
  const handleVetsNearYou = () => {
    Linking.openURL('https://www.google.com/maps/search/vets+near+me/')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Styling title="Possible Causes of Behavior" style={{fontSize:20,textAlign:'center'}}/>

          <View style={{marginTop:height*.02,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <View style={{marginTop:height*.03, height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'45%', marginLeft:width*.025}}>
<Styling title="1. Play Aggression"/>
<Styling title="2. Excessive unwarranted petting"/>
<Styling title="3. Breach of territory by another creature"/>
<Styling title="4. Maternal Aggression"/>
<Styling title="5. Breach of personal space"/>
<Styling title="6. Inter-Cat Aggression"/>

<Styling title="7. It is experiencing pain"/>
<Styling title="8. Stress and Anxiety"/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/angry.png')} style={{height:'100%', width:'100%'}}/>
</View>
          </View>

          </View>
          <Styling title="Signs your cat has an underlying Disease" style={{fontSize:20,textAlign:'center', marginTop:height*.02}}/>
          <View style={{marginTop:height*.02,backgroundColor:'white', height:height*.6, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
<View style={{ height:'50%', width:'100%'}}>
<Image source={require('../images/sick.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
<View style={{height:'48%', width:'90%', alignSelf:'center',borderRadius:35, borderColor:'purple', borderWidth:.5}}>
<Styling title="1. Inappropriate Elimination Behavior" style={{marginLeft:width*.05, marginTop:height*.015}}/>
<Styling title="2. Changes in Interaction" style={{marginLeft:width*.05}}/>
<Styling title="3. Changes in Activity" style={{marginLeft:width*.05}}/>
<Styling title="4. Changes in Sleeping Habits" style={{marginLeft:width*.05}}/>
<Styling title="5. Changes in Food and Water Consumption" style={{marginLeft:width*.05}}/>
<Styling title="6. Unexplained Weight Loss or Gain" style={{marginLeft:width*.05}}/>
<Styling title="7. Changes in Grooming" style={{marginLeft:width*.05}}/>
<Styling title="8. Signs of Stress" style={{marginLeft:width*.05}}/>
<Styling title="9. Changes in Vocalization" style={{marginLeft:width*.05}}/>
<Styling title="10. Bad Breath" style={{marginLeft:width*.045}}/>

</View>
        </View>
        <Styling title="Symptoms that may show Stress" style={{fontSize:20,textAlign:'center', marginTop:height*.02}}/>

        <View style={{marginTop:height*.02,backgroundColor:'white', height:height*2, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <View style={{ height:'100%', width:'100%', display:'flex', justifyContent:'space-evenly'}}>
<View style={{ height:'33%', width:'97%', borderBottomColor:'purple', borderBottomWidth:.2, alignSelf:'center'}}>
<Styling title="Physical Symptoms" style={{textAlign:'center', fontSize:20, marginTop:height*.01}}/>
<View style={{height:height*.635, width:'100%'}}>
  <View style={{height:'50%', width:'100%',display:'flex', flexDirection:'row'}}>
  <View style={{height:'100%', width:'50%', marginLeft:width*.02}}>
  <Styling title="1. Diarrhoea"/>
  <Styling title="2. Vomiting"/>
  <Styling title="3. Large bald patches or sores on the coat caused by over grooming"/>
  <Styling title="4. Runny nose and eyes (e.g. cat flu)"/>
  <Styling title="5. Symptoms get worse in cats with chronic health conditions or recovery from illness is slow (stress can affect a cat`s immune system and ability to fight disease)"/>
  <Styling title="6. Eating non-food items such as plastic or wool (this is called pica)"/>
</View>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/stressed1.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
  </View>
  <View style={{height:'50%', width:'100%',display:'flex', flexDirection:'row'}}>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/Stressed2.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
<View style={{height:'100%', width:'50%', marginLeft:width*.02}}>
<Styling title="7. Poor appetite or eating less than normal"/>
  <Styling title="8. Not going to the toilet as often as usual (faeces and/or urine)"/>
  <Styling title="9. Looking lethargic and sleeping more than usual"/>
  <Styling title="10. Excessive eating and/or drinking"/>
  <Styling title="11. Sudden weight loss or weight gain"/>
  <Styling title="12. A poor coat condition"/>
  <Styling title="13. Frequent squatting, painful urination with blood in it"/>
</View>
  </View>
</View>
</View>
<View style={{ height:'50%', width:'98%', borderBottomColor:'purple', borderBottomWidth:.2, alignSelf:'center', marginTop:height*.01}}>
<Styling title="Behavioral Symptoms" style={{textAlign:'center',fontSize:20}}/>
<View style={{height:height*.96, width:'100%'}}>
  <View style={{height:'33%', width:'100%',display:'flex', flexDirection:'row'}}>
  <View style={{height:'100%', width:'50%', marginLeft:width*.02, marginTop:height*.01}}>
  <Styling title="1. Any noticeable change in your cat's usual patterns of behaviour and routines"/>
  <Styling title="2. Toileting outside of the litter tray (e.g. behind the sofa, under the bed, on the bed etc.)"/>
  <Styling title="3. Spraying urine on furniture and other items around the home"/>
  <Styling title="4. Scratching excessively on the furniture"/>
  <Styling title="5. Aggressive behaviour directed towards you, your family or visitors"/>
  </View>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/anger.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
  </View>
  <View style={{height:'33%', width:'100%',display:'flex', flexDirection:'row'}}>
<View style={{height:'80%', width:'40%'}}>
<Image source={require('../images/anger1.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
<View style={{height:'100%', width:'58%', marginLeft:width*.02,marginTop:height*.015}}>
<Styling title="6. Aggressive behaviour directed towards other pets in the home"/>
  <Styling title="7. Excessive meowing"/>
  <Styling title="8. An increased dependency on you or your family, constantly wanting to interact"/>
  <Styling title="9. Withdrawal from you and the family, no longer interested in interacting with you"/>
  <Styling title="10. Unresponsiveness to things going on around them (they don't jump or get startled by loud noises or quick movements)"/>
  <Styling title="11. Constant vigilance and jumps at every sudden sound or movement"/>
</View>
  </View>
  <View style={{height:'33%', width:'100%',display:'flex', flexDirection:'row'}}>
  <View style={{height:'100%', width:'50%', marginLeft:width*.02, marginTop:height*.02}}>
  <Styling title="12. Frequent hiding when in the home (e.g. under a sofa or bed, on top of a wardrobe)"/>
  <Styling title="13. Reluctance to play - having previously been very playful"/>
  <Styling title="14. Reluctance to come into the home"/>
  <Styling title="15. Reluctance to go outside"/>
  <Styling title="16. Excessive grooming"/>
  <Styling title="17. Repeated pacing when in the home, often accompanied by loud meowing."/>
</View>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/angry2.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>
</View>
  </View>
</View>
</View>

<View style={{height:'17%', width:'98%', alignSelf:'center'}}>
<Styling title="Other Symptoms" style={{textAlign:'center',fontSize:20, marginTop:height*.01}}/>
<View style={{height:height*.27, marginTop:height*.01, flexDirection:'row'}}>
<View style={{ height:'100%', width:'40%'}}>
<Image source={require('../images/stressed3.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

</View>
<View style={{height:'100%', width:'60%', marginLeft:width*.01}}>
<Styling title="1. Often crouching and looking tense indoors"/>
  <Styling title="2. Ears rotate backwards frequently or flatten downwards"/>
  <Styling title="3. Wide open eyes with very dilated pupils which makes their eyes look black"/>
  <Styling title="4. Staring at the floor with a fixed, glazed expression"/>
  <Styling title="5. Rapid frequent grooming that usually lasts around five seconds"/>
  <Styling title="6. Frequent head shaking"/>
</View>

</View>
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

export default Angry;