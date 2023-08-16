import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, Linking, Animated, Dimensions } from 'react-native'
import React, { useRef } from 'react';
import Styling from '../CustomProperties/Theme2';
import { TouchableOpacity } from 'react-native-gesture-handler';
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;


const Chart = ({navigation}) => {
    const scrollViewRef = useRef(null);
    const innerScrollViewRef1 = useRef(null);
    const innerScrollViewRef2 = useRef(null);
    const innerScrollViewRef3 = useRef(null);
    const innerScrollViewRef5 = useRef(null);
    const xOffset = useRef(new Animated.Value(0)).current;
  
    const handleScroll = ({ nativeEvent }) => {
      const { contentOffset, layoutMeasurement } = nativeEvent;
      const contentWidth = layoutMeasurement.width;
      const slideIndex = Math.round(contentOffset.x / contentWidth);
      Animated.spring(xOffset, {
        toValue: slideIndex,
        useNativeDriver: true,
      }).start();
  
      if (slideIndex === 0 && innerScrollViewRef1.current) {
        innerScrollViewRef1.current.scrollTo({ x: 0, y: 0, animated: false });
      } else if (slideIndex === 1 && innerScrollViewRef2.current) {
        innerScrollViewRef2.current.scrollTo({ x: 0, y: 0, animated: false });
      } else if (slideIndex === 2 && innerScrollViewRef3.current) {
        innerScrollViewRef3.current.scrollTo({ x: 0, y: 0, animated: false });
      } else if (slideIndex === 3 && innerScrollViewRef5.current) {
        innerScrollViewRef5.current.scrollTo({ x: 0, y: 0, animated: false });
      }
    };
  
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollViewContent}
          onContentSizeChange={() => scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false })}
        >
            <Animated.View style={[styles.slide, { width }]}>
            <ScrollView
              ref={innerScrollViewRef1} contentContainerStyle={styles.slideContent} nestedScrollEnabled>            
            <Styling style={{ fontSize:20, textAlign:'center'}}/>
                <View style={styles.slideInnerContent}>
                    <Styling title="Happy and Relaxed Body Language Guide" style={{fontSize:20, textAlign:'center', marginTop:height*.01}}/>
                    <View style={{height:'96%', width:'100%', justifyContent:'space-evenly'}}>
                        <View style={{height:'33%', flexDirection:'row', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                            <View style={{ height:'100%', width:'40%'}}>
                                <Image source={require('../images/happyeyes.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                            </View>
                            <View style={{height:'50%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Soft Eyes" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Slow blinking" style={styles.insideText}/>
                                <Styling title="Ears are neutral" style={styles.insideText}/>
                                <Styling title="Body loose and curved" style={styles.insideText}/>

                            </View>

                        </View>
                        <View style={{height:'33%', flexDirection:'row-reverse', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                        <View style={{ height:'100%', width:'40%'}}>
                        <Image source={require('../images/happytail.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                        </View>
                        <View style={{height:'80%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Tail is upright" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Walking toward you with an upturned tail to greet you" style={styles.insideText}/>
                                <Styling title="Upturned tip of the tail" style={styles.insideText}/>
                                <Styling title="Frantic movement of the tail may indicate excitement" style={styles.insideText}/>

                            </View>
                    </View>
                    <View style={{height:'33%', flexDirection:'row', width:'95%', alignSelf:'center'}}>
                        <View style={{height:'100%', width:'40%'}}>
                        <Image source={require('../images/rollover.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                    </View>
                    <View style={{height:'75%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Rolling over" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Shows you their belly (they trust you)" style={styles.insideText}/>
                                <Styling title="Rubs against you to mark you as their own" style={styles.insideText}/>
                                <Styling title="Hops up to greet you" style={styles.insideText}/>
                                <Styling title="Responsive and active" style={styles.insideText}/>



                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Mood')} style={{backgroundColor:'pink', marginTop:height*.02, height:height*.06, width:width*.95, alignSelf:'center', borderRadius:35}}>
                    <Styling title="Detect Mood" style={{textAlign:'center', color:'purple', fontSize:20, marginTop:height*.01}}/>
                </TouchableOpacity>
               <View style={{height:height*.03}}></View>
              </ScrollView>
            </Animated.View>
            <Animated.View style={[styles.slide, { width }]}>
            <ScrollView ref={innerScrollViewRef2} contentContainerStyle={styles.slideContent} nestedScrollEnabled>

                            <Styling style={{ fontSize:20, textAlign:'center'}}/>
                <View style={styles.slideInnerContent}>
                    <Styling title="Sad and Depressed Body Language Guide" style={{fontSize:20, textAlign:'center', marginTop:height*.01}}/>
                    <View style={{height:'96%', width:'100%', justifyContent:'space-evenly'}}>
                        <View style={{height:'33%', flexDirection:'row', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                            <View style={{ height:'100%', width:'40%'}}>
                                <Image source={require('../images/sadcat.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                            </View>
                            <View style={{height:'40%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Ears held back" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Slit eyes, may mean both aggression and fear" style={styles.insideText}/>
                            </View>

                        </View>
                        <View style={{height:'33%', flexDirection:'row-reverse', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                        <View style={{ height:'100%', width:'40%'}}>
                        <Image source={require('../images/sad.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                        </View>
                        <View style={{height:'60%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Tail tucked underneath" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Hesitant to soclailize" style={styles.insideText}/>
                                <Styling title="Does not respond well to activity" style={styles.insideText}/>
                                <Styling title="Purrs more than usual to comfort itself" style={styles.insideText}/>

                            </View>
                    </View>
                    <View style={{height:'33%', flexDirection:'row', width:'95%', alignSelf:'center'}}>
                        <View style={{height:'100%', width:'40%'}}>
                        <Image source={require('../images/asleep.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                    </View>
                    <View style={{height:'75%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Flattened Ears" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Hair standing on end" style={styles.insideText}/>
                                <Styling title="Hides underneath places" style={styles.insideText}/>
                                <Styling title="Sleeps more than usual" style={styles.insideText}/>
                                <Styling title="Poor grooming and loss of appetite" style={styles.insideText}/>



                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Mood')} style={{backgroundColor:'pink', marginTop:height*.02, height:height*.06, width:width*.95, alignSelf:'center', borderRadius:35}}>
                    <Styling title="Detect Mood" style={{textAlign:'center', color:'purple', fontSize:20, marginTop:height*.01}}/>
                </TouchableOpacity>
               <View style={{height:height*.03}}></View>
              </ScrollView>
            </Animated.View>
            <Animated.View style={[styles.slide, { width }]}>
            <ScrollView ref={innerScrollViewRef3} contentContainerStyle={styles.slideContent} nestedScrollEnabled>
                            <Styling style={{ fontSize:20, textAlign:'center'}}/>
                <View style={styles.slideInnerContent}>
                    <Styling title="Angry Body Language Guide" style={{fontSize:20, textAlign:'center', marginTop:height*.01}}/>
                    <View style={{height:'96%', width:'100%', justifyContent:'space-evenly'}}>
                        <View style={{height:'33%', flexDirection:'row', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                            <View style={{ height:'100%', width:'40%'}}>
                                <Image source={require('../images/angryeyes.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                            </View>
                            <View style={{height:'40%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Ears flattened out" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Eyes dilated, wide open" style={styles.insideText}/>
                            </View>

                        </View>
                        <View style={{height:'33%', flexDirection:'row-reverse', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                        <View style={{ height:'100%', width:'40%'}}>
                        <Image source={require('../images/angrycat.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                        </View>
                        <View style={{height:'60%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Tail held out stiff and straight or curled around and under their body" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Mouth open and tensed" style={styles.insideText}/>
                                <Styling title="Whiskers forward and spread" style={styles.insideText}/>
                            </View>
                    </View>
                    <View style={{height:'33%', flexDirection:'row', width:'95%', alignSelf:'center'}}>
                        <View style={{height:'100%', width:'40%'}}>
                        <Image source={require('../images/angrytail.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                    </View>
                    <View style={{height:'75%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Hair standing on end" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Hissing and biting/scratching" style={styles.insideText}/>
                                <Styling title="Growling" style={styles.insideText}/>
                                <Styling title="Tense Posture" style={styles.insideText}/>
                                <Styling title="Frazzled Tail" style={styles.insideText}/>



                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Mood')} style={{backgroundColor:'pink', marginTop:height*.02, height:height*.06, width:width*.95, alignSelf:'center', borderRadius:35}}>
                    <Styling title="Detect Mood" style={{textAlign:'center', color:'purple', fontSize:20, marginTop:height*.01}}/>
                </TouchableOpacity>
               <View style={{height:height*.03}}></View>
              </ScrollView>
            </Animated.View>
            <Animated.View style={[styles.slide, { width }]}>
            <ScrollView ref={innerScrollViewRef5} contentContainerStyle={styles.slideContent} nestedScrollEnabled>
            <Styling style={{ fontSize:20, textAlign:'center'}}/>
                <View style={styles.slideInnerContent}>
                    <Styling title="Scared Body Language Guide" style={{fontSize:20, textAlign:'center', marginTop:height*.01}}/>
                    <View style={{height:'96%', width:'100%', justifyContent:'space-evenly'}}>
                        <View style={{height:'33%', flexDirection:'row', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                            <View style={{ height:'100%', width:'40%'}}>
                                <Image source={require('../images/scaredeyes.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                            </View>
                            <View style={{height:'50%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Wide open dilated pupils" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Whiskers flat against their face." style={styles.insideText}/>
                                <Styling title="They will prefer to hide under spaces" style={styles.insideText}/>
                            </View>

                        </View>
                        <View style={{height:'33%', flexDirection:'row-reverse', borderBottomWidth:.5, borderColor: 'purple', width:'95%', alignSelf:'center'}}>
                        <View style={{ height:'100%', width:'40%'}}>
                        <Image source={require('../images/scared.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                        </View>
                        <View style={{height:'60%', width:'60%', alignSelf:'center'}}>
                                <Styling title="Low Tail" style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Tail tucked underneath" style={styles.insideText}/>
                                <Styling title="Curls itself into a small ball lying on belly" style={styles.insideText}/>
                            </View>
                    </View>
                    <View style={{height:'33%', flexDirection:'row', width:'95%', alignSelf:'center'}}>
                        <View style={{height:'100%', width:'40%'}}>
                        <Image source={require('../images/hude.png')} style={{resizeMode:'contain', height:'100%', width:'100%'}}/>

                    </View>
                    <View style={{height:'85%', width:'60%', alignSelf:'center'}}>
                                <Styling title="They will hold their tail low to the ground and may flick it rapidly back and forth as their anxiety mounts." style={{marginLeft:width*.03, marginTop:height*.02, fontSize:15}}/>
                                <Styling title="Flatten their ears against their head, and point sideways or down" style={styles.insideText}/>
                                <Styling title="When standing, their back will be lower than their front as they slink away from a troubling situation" style={styles.insideText}/>

                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Mood')} style={{backgroundColor:'pink', marginTop:height*.02, height:height*.06, width:width*.95, alignSelf:'center', borderRadius:35}}>
                    <Styling title="Detect Mood" style={{textAlign:'center', color:'purple', fontSize:20, marginTop:height*.01}}/>
                </TouchableOpacity>
               <View style={{height:height*.03}}></View>
              </ScrollView>
 
            </Animated.View>
                      </ScrollView>
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'pink'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      opacity:.9
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    slideContent: {
      flexGrow: 1,
    },
    slideInnerContent: {
      borderRadius: 35,
      opacity: 0.7,
      alignSelf: 'center',
      backgroundColor: 'white',
      height: height *1,
      width: width * 0.95,
      marginTop:height*.02
    },
    text: {
      fontSize: 18,
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },
    insideText: {
        marginLeft:width*.03,
        fontSize: 15,
        marginTop:height*.01
    }
  });
  
export default Chart

