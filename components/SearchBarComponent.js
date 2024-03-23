import React, { useContext } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const SearchBarComponent = () => {
	const { setSearchTerm, searchTerm} = useContext(AppContext);

	return (
		<View style={styles.searchBarView}>
			<SearchBar
				containerStyle={styles.searchBarContainer}
				inputContainerStyle={styles.searchBarInputContainer}
				placeholder="What do you want to watch ?"
				onChangeText={(text) => setSearchTerm(text)}
				value={searchTerm}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchBarView: {
		margin: 10,
		width: 320,
	},
	searchBarContainer: {
		backgroundColor: '#292928',
		borderBottomColor: '#292928',
		borderTopColor: '#292928',
	},
	searchBarInputContainer: {
		backgroundColor: '#3D3D3A',
		borderRadius: 30,
	},
});

export default SearchBarComponent;
