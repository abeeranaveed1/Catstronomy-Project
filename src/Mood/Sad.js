import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Sad = ({navigation}) => {
  const handleVetsNearYou = () => {
    Linking.openURL('https://www.google.com/maps/search/vets+near+me/')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Styling title="Signs that show your cat is Sad" style={{fontSize:20,textAlign:'center'}}/>

          <View style={{marginTop:height*.02,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Decreased Appetite" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'45%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="Loss of interest in food or a significant decrease in appetite can be a sign of unhappiness or depression in cats. If your cat is consistently not eating as much as usual or skipping meals, it could be an indication of a low mood."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/appetite.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Lethargy and reduced activity" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row-reverse',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%',marginRight:width*.025, marginTop:height*.04}}>
<Styling title="Cats that are feeling sad or depressed may exhibit lethargic behavior and decreased interest in play or physical activity. They may spend more time sleeping or show a lack of enthusiasm in their usual activities."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/lazy.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Withdrawal and hiding" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="If your cat starts to isolate themselves and spends excessive time hiding in secluded areas, such as under furniture or in closets, it could be a sign of sadness or depression. They may prefer to avoid social interaction and seek solitude."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/hide.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Changes in grooming habits" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row-reverse',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'50%',marginRight:width*.025, marginTop:height*.04}}>
<Styling title="A sad or depressed cat may show a decline in their grooming habits. They may have a disheveled or unkempt appearance, with a lack of self-grooming that leads to a dull or matted coat."/>
</View>
<View style={{height:'100%', width:'50%'}}>
<Image source={require('../images/grooming1.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
</View>
          </View>

          </View>
          <View style={{marginTop:height*.04,backgroundColor:'white', height:height*.3, width:width*.95, display:'flex', alignSelf:'center',
        borderRadius:35}}>
          <Styling title="Vocalization changes" style={{textAlign:'center', fontSize:15, marginTop:height*.02}}/>
                    <View style={{height:'85%', width:'100%', display:'flex', flexDirection:'row',
        justifyContent:'space-between'}}>
          <View style={{ height:'100%', width:'60%', marginLeft:width*.025, marginTop:height*.04}}>
<Styling title="While some cats may become more vocal when distressed, others may become unusually quiet when they are sad or depressed. If your normally chatty cat becomes unusually silent or exhibits changes in the tone or frequency of their vocalizations, it could be an indication of their emotional state."/>
</View>
<View style={{height:'100%', width:'40%'}}>
<Image source={require('../images/vocal.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>
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

export default Sad;