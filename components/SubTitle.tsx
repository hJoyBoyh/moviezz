/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
 

  StyleSheet,
  Text,
  View,
} from 'react-native';


export function SubTitle(props){
    return(
<View style={styles.subTitleContainer}>
        <Text style={styles.firstWord}>{props.firstWord}</Text>
        <Text style={styles.restWord}>{props.restWord}</Text>
        {props.hideSeeAll ?
        <View></View>
        :  <View style={styles.seeAllContainer}>
        <Text style={styles.seeAll} onPress={props.onPress}>See all</Text>
        </View>
        }
       


</View>
    );
  }


  const styles = StyleSheet.create({
    subTitleContainer: {
        width:380,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    
    firstWord:{
        fontSize:24,
        color:'#d1c800'
       },
       restWord:{
        fontSize:24,
        color:'white'
       },
       seeAllContainer:{
        display: 'flex',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        flexBasis:150,
       },
       seeAll:{
        fontSize:24,
        color:'white'
       }
  });