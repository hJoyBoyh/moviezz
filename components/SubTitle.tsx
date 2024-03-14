/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
 

  StyleSheet,
  Text,
  View,
} from 'react-native';

//props : hideSeeAll(hide the see all text)- firstWord(first word is the first word of the title in gold color) - restWord( the rest of the word of the title in white) 
export function SubTitle(props){
  

    return(
<View style={styles.container}>
  <View style={styles.subTitleContainer}>
        <Text style={styles.firstWord}>{props.firstWord}</Text>
        <Text style={styles.restWord}>{props.restWord}</Text>
    </View>
        
        
          <View>
        <Text style={ props.hideSeeAll ?  styles.seeAll:styles.hideSeeAll} onPress={props.onPress}>See all</Text>
        </View>
        
       


</View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      width:380,
      
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      
  },
    subTitleContainer: {
        
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:14
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
        
       },
       seeAll:{
        fontSize:24,
        color:'white'
       },
       hideSeeAll:{
        fontSize:24,
        color:'#292928'
       }
  });