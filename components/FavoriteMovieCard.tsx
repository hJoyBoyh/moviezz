/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function FavoriteMovieCard(props) {
  return (
    // <TouchableOpacity >
      <View style={styles.card} onPress={props.onPress}>
        <View>
        <Image source={props.source} style={styles.image}></Image>
        </View>
        
        <View style={styles.viewInfo}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.year}</Text>
        <Text style={styles.description}>{props.description}</Text>
        
        <Ionicons name='heart-outline' color='white' size={25} />
        </View>
        

      </View>
    // </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
    width:340,

  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  viewInfo:{
    
    gap:7,
  },
  text: {

    color: 'white',
    
  },
  description:{
    color: 'white',
    width:200,
    height:69,
    overflow:'hidden'
   
  }
});