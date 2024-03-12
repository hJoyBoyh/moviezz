import React from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export function LoginScreen({navigation}){
    return(
      <SafeAreaView style={styles.container}>
  
       <View>
       <Image source={require('../assets/loginImg.png')} style={styles.loginImg}></Image>
       </View>
       <View>
        <Text style={styles.title}> Login</Text>
       </View>
       <View style={styles.form}>
        <TextInput placeholder="Email"  placeholderTextColor="white"  style={styles.input}/>
        <TextInput placeholder="Password"  placeholderTextColor="white"  style={styles.input}/>
       </View>
       <View>
          <Pressable style={styles.button} onPress={ () => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
  
      </SafeAreaView>
    )
  }


  
  const styles = StyleSheet.create({
    container:{
      display:'flex',
      flex:1,
      justifyContent:'space-around',
      alignItems: 'center',
      backgroundColor:'#292928'
    },
   form:{
    height:200,
    display:'flex',
    justifyContent:'space-evenly',
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
     input:{
      color:'white',
      width:350,
      borderBottomColor:'#ffffff',
      borderBottomWidth:1,
     },
     button:{
      height:60,
      width:310,
      
      display:'flex',
      justifyContent:'center',
      backgroundColor:'#d1c800',
      borderRadius:20
      
     },
     buttonText:{
      fontSize:24,
      color:'#ffffff',
      fontWeight:'bold',
      
      textAlign:'center'
     }
     
    
  });