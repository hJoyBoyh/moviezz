/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
  
  StyleSheet,
  TextInput,
} from 'react-native';

export function InputText(props){
    return(
       <TextInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} value={props.value} editable={props.editable}  placeholderTextColor="white"  style={styles.input}/>
    )
  }


  const styles = StyleSheet.create({
  
     input:{
      color:'white',
      width:350,
      borderBottomColor:'#ffffff',
      borderBottomWidth:1,
     },
    
     
    
  });