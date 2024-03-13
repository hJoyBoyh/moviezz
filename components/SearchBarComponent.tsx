import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const SearchBarComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  
  <View style={styles.view}>
    <SearchBar
    containerStyle={styles.container}
    inputContainerStyle={styles.inputContainer}
      placeholder="What do you want to watch ?"
      onChangeText={updateSearch}
      value={search}
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