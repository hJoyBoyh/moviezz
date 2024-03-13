/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function OnboardingScreen({navigation}){
    return(
      <SafeAreaView style={styles.container}>
  
        <View>
        <Image source={require('../assets/logoColor.png')} style={styles.logo}></Image>
        </View>
  
        <View>
        <Image source={require('../assets/onboardImg.png')} style={styles.loginImg}></Image>
        </View>
  
        <View>
          <Pressable style={styles.button} onPress={ () => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Let's begin</Text>
          </Pressable>
        </View>
  
      </SafeAreaView>
    )
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
      marginTop:20,
  
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