/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardMovie } from '../components/CardMovie';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SubTitle } from '../components/SubTitle';
import { FavoriteMovieCardList } from '../components/FavoriteMovieCardList';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
   
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    
  },
  {
    id: '586s94a0f-3da1-471f-bd96-145571e29d72',
    
  },
  {
    id: '58694a0fa-3da1-471f-bd96-145571e29d72',
    
  },
  {
    id: '5869A4a0fa-3da1-471f-bd96-145571e29d72',
   
  },
  {
    id: '58694a0faQW-3da1-471f-bd96-145571e29d72',
    
  },
  {
    id: '58694a0fa-3da1SFD-471f-bd96-145571e29d72',
   
  },
  
];

export function FavoriteScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <FavoriteMovieCardList data={DATA} firstWord='My Favorite' restWord='' handleSeeAll={()=>{}}/>


      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({


  container: {
    display: 'flex',
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    gap:15,
    alignItems: 'center',
    backgroundColor: '#292928'
  },
  content: {
    display: 'flex',
    gap: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#292928'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  text: {
    color: '#ffffff'
  },
  textNavigation: {
    color: '#d1c901'
  },


});