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
import { NoResultSearch } from '../components/NoResultSearch';
import SearchBarComponent from '../components/SearchBarComponent';

export function SearchScreen({ navigation }) {
  return (
<SafeAreaView style={styles.background}>
    <View style={styles.flex}>
        <SearchBarComponent></SearchBarComponent>
        <Text style={styles.text} onPress={()=> navigation.navigate('Home')}>Annuler</Text>
    </View>
    {/* <NoResultSearch></NoResultSearch> */}
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10}}>
      <View style={styles.content}>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>

        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>

        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>
        <CardMovie source={require('../assets/CardImg.png')} title="Aquaman" year='2024'/>


        </View>

    </ScrollView>


</SafeAreaView>
  )
}



const styles = StyleSheet.create({
  flex:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
    },

background:{
    backgroundColor:'#292928',
    display:'flex',
    flex:1
},
 
  content: {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    flex:1,
   
  
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