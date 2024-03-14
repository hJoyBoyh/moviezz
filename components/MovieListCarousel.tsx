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
import { CardMovie } from './CardMovie';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View >
    <Text>{title}</Text>
  </View>
);

export function MovieListCarousel({data, firstWord, restWord, handleSeeAll}){
  
    return(

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
        <View >
            <SubTitle firstWord={firstWord} restWord={restWord} hideSeeAll={true} onPress={handleSeeAll}></SubTitle>
           <FlatList
            data={data.slice(0, 7)}
            horizontal
            snapToInterval={300}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <CardMovie source={require('../assets/CardImg.png')} title="Movie" year='2024' />}
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