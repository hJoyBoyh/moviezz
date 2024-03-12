import React from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export function LoginScreen({}){
    return(
      <SafeAreaView style={styles.container}>
  
       <View>
       <Image source={require('../assets/loginImg.png')} style={styles.loginImg}></Image>
       </View>
       <View>
        <Text style={styles.title}> Login</Text>
       </View>
  
      </SafeAreaView>
    )
  }


  
  const styles = StyleSheet.create({
    container:{
      display:'flex',
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#292928'
    },
   
     loginImg:{
      height:200,
      width:200,
      marginTop:20
     
     },
     title:{
      fontSize:50,
      color:'white'
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