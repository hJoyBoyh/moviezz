/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useCallback, useState } from 'react';

import {
  
    Button,
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
import YoutubeIframe from 'react-native-youtube-iframe';



export function Video({videoKey}){
    const [playing, setPlaying] = useState(false)
    const onStateChange = useCallback(state => {
        if (state === 'ended'){
            setPlaying(false)
        }
    },[])
    const togglePlaying = useCallback(() =>{
setPlaying(prev => !prev)
    },[])
    
    return(

    
        <View >
           <YoutubeIframe
           height={300}
           width={410}
           play={playing}
           videoId={videoKey}
           onChangeState={onStateChange}
           />
        </View>
       
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