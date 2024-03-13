/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
  
    Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export function NoResultSearch(props){
    return(

        <View style={styles.container}>
            <Image source={require('../assets/searchImg.png')}></Image>
            <Text style={styles.text}>NAH UH!!! We don’t have the moviezz that you are searching. Please make a other search</Text>
        </View>
    )
  }


  const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
  
    text:{
      color:'white',
      textAlign:'center',
      width:300,
      fontSize:16,
      
    
     },
    
     
    
  });