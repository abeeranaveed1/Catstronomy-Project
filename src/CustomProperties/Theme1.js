import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useContext, useState, useEffect } from "react";
import {useFonts,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
  } from '@expo-google-fonts/balsamiq-sans';
  import {Bangers_400Regular } from '@expo-google-fonts/bangers';
  import {MoonDance_400Regular} from '@expo-google-fonts/moon-dance';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Chewy_400Regular } from '@expo-google-fonts/chewy';
import { Chicle_400Regular } from '@expo-google-fonts/chicle';
import { Ranchers_400Regular } from '@expo-google-fonts/ranchers';
import { RumRaisin_400Regular } from '@expo-google-fonts/rum-raisin';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one';

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

const Styling =  ({title,style}) => {
    let [fontsLoaded] = useFonts({
      'Rum': RumRaisin_400Regular,
      'Leckerli': LeckerliOne_400Regular,
      'Balsamiq': BalsamiqSans_400Regular,
      'Balsamiq2': BalsamiqSans_400Regular_Italic,
      'Balsamiq3': BalsamiqSans_700Bold,
      'Balsamiq4':BalsamiqSans_700Bold_Italic,
      'Bangers': Bangers_400Regular,
      'Moon': MoonDance_400Regular,
      'Pacifico': Pacifico_400Regular,
      'Poppins': Poppins_400Regular,
      'Chewy': Chewy_400Regular,
      'Chicle': Chicle_400Regular,
      'Ranchers': Ranchers_400Regular,
      'Lobster': Lobster_400Regular,
    });
    useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return <Text style={[styles.text,style]}>{title}</Text>;
      }
    };

    const styles = StyleSheet.create({
      text:{
          fontFamily: 'Rum',
      },
  
    });
  
  
  export default Styling;

