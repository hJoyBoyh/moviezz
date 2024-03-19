import React, { useContext, useEffect, useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import { fetchSearchMovies } from '../moviezz-api/model';

type SearchBarComponentProps = {};

const SearchBarComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const {setSearchTerm,searchTerm,resultSearch,setResultSearch,getSearchMovies} = useContext(AppContext)


const updateSearch = (e) => {
  getSearchMovies()
  setSearchTerm(e)
  
  
  console.log('haha')
 // console.log(resultSearch)
 // console.log(searchTerm)
 
};



return (
  
  <View style={styles.view}>
    <SearchBar
    containerStyle={styles.container}
    inputContainerStyle={styles.inputContainer}
      placeholder="What do you want to watch ?"
      onChangeText={text =>updateSearch(text)}
      value={searchTerm}
    />
  </View>
  
);
};

const styles = StyleSheet.create({
  flex:{
display: 'flex',
flexDirection: 'row',
alignItems: 'center'
},
view: {
  margin: 10,
  width:320
 
},
container:{
  backgroundColor:'#292928',
  borderBottomColor:'#292928',
  borderTopColor:'#292928',
  
 
},
inputContainer:{
  backgroundColor:'#3D3D3A',
  borderRadius:30
},
text:{
  color:'white',
  
}
});

export default SearchBarComponent;