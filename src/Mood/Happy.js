import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Image, Linking } from 'react-native'
import React from 'react'
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';


const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Happy = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Styling title="Good Job!" style={{textAlign:'center',  fontSize:30}}/>
        <View style={{marginTop:height*.01,height:height*.72, width:width*.95, backgroundColor:'white',borderRadius:35, alignSelf:'center'}}>
<View style={{height:'35%', width:'100%'}}>
<Image source={require('../images/happy.png')} style={{height:'100%', width:'100%', resizeMode:'contain'}}/>

</View>
<View style={{height:'60%', width:'95%', alignSelf:'center', borderRadius:35,
borderColor:'purple', borderWidth:.9}}>
<Styling title="1. A content and happy cat will have a relaxed body posture" style={{marginLeft:width*.06, marginTop:height*.02}}/>

<Styling title="2. Purring is often a sign of contentment and happiness in cats." style={{marginLeft:width*.06}}/>

<Styling title= "3. A happy cat will often engage in play behavior." style={{marginLeft:width*.06}}/>

<Styling title="4. Cats that are happy and well will typically have a good appetite."style={{marginLeft:width*.06}}/>

<Styling title="5. A content cat will have bright, clear eyes without any signs of squinting or discharge." style={{marginLeft:width*.06}}/>
<Styling title="6. Kneading - often associated with contentment, as it mimics the kneading motion they used during nursing as kittens." style={{marginLeft:width*.06}}/>
<Styling title="7. If your cat is relaxed and spends time grooming their fur, it indicates they feel secure and at ease in their environment." style={{marginLeft:width*.06}}/>
<Styling title="8. Rubbing against you, head-butt you gently, or curl up in your lap, indicating their trust and contentment." style={{marginLeft:width*.06}}/>
<Styling title="9. If your cat makes vocalizations during play or when they see you, it can be a sign of their positive mood." style={{marginLeft:width*.06}}/>
<Styling title="10. A well-adjusted cat will consistently use their litter box." style={{marginLeft:width*.06}}/>
</View>
        </View>

<Styling title="IF YOUR CAT'S BEHAVIOR MATCHES THESE CONDITIONS THEN REMAIN CONSISTENT. YOU'RE DOING AN AMAZING JOB TREATING IT RIGHT" style={{marginTop:height*.02, textAlign:'center', fontSize:15}}/>
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

export default Happy