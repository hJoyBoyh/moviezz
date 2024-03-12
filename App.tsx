/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';



function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      
      <AuthStack></AuthStack>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:'#292928'
  },
  logo:{
    height:145,
    width:350,
    marginTop:20

   },
   loginImg:{
    height:280,
    width:350,
   
   },
   button:{
    height:60,
    width:350,
    marginBottom:20,
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#d1c800',
    borderRadius:20
    
   },
   buttonText:{
    fontSize:24,
    color:'#ffffff',
    fontWeight:'bold',
    marginLeft:15
   }
   
  
});

export default App;
