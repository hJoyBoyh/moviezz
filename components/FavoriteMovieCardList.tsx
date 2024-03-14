/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
  
  FlatList,
    Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubTitle } from './SubTitle';
// import Carousel from 'react-native-snap-carousel'
import { FavoriteMovieCard } from './FavoriteMovieCard';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View >
    <Text>{title}</Text>
  </View>
);

export function FavoriteMovieCardList({data, firstWord, restWord, handleSeeAll}){
 
    return(

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
        <View >
            <SubTitle firstWord={firstWord} restWord={restWord} hideSeeAll={false} onPress={handleSeeAll}></SubTitle>
           <FlatList
            data={data}
            
            snapToInterval={100}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <FavoriteMovieCard source={require('../assets/CardImg.png')} title="Movie" year='2024' description="loremloremloremvloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem" />}
            keyExtractor={item => item.id}
           />

        </View>
        </ScrollView>
    )
  }


  const styles = StyleSheet.create({
    scrollViewContainer:{
      marginTop:20,
      paddingBottom:10
    },
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