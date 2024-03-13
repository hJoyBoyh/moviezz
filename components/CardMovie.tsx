/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
    Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function CardMovie(props){
    return(
<View style={styles.card}>
<Image source={props.source}style={styles.image}></Image>
<Text style={styles.text}>{props.title}</Text>
<Text style={styles.text}>{props.year}</Text>
</View>
    );
  }


  const styles = StyleSheet.create({
    card:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 100,
        borderRadius: 10,
        marginBottom:10
      },
      text:{
        
        color:'white',
        textAlign:'center',
      }
  });