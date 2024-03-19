import React, { useContext } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import { fetchSearchMovies } from '../moviezz-api/model';

const SearchBarComponent = () => {
	const { setSearchTerm, searchTerm, resultSearch, setResultSearch, getSearchMovies } = useContext(AppContext);

	const updateSearch = (text) => {
		getSearchMovies();
		setSearchTerm(text);
		console.log('haha');
	};

	return (
		<View style={styles.view}>
			<SearchBar
				containerStyle={styles.container}
				inputContainerStyle={styles.inputContainer}
				placeholder="What do you want to watch ?"
				onChangeText={(text) => updateSearch(text)}
				value={searchTerm}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	flex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	view: {
		margin: 10,
		width: 320,
	},
	container: {
		backgroundColor: '#292928',
		borderBottomColor: '#292928',
		borderTopColor: '#292928',
	},
	inputContainer: {
		backgroundColor: '#3D3D3A',
		borderRadius: 30,
	},
	text: {
		color: 'white',
	},
});

export default SearchBarComponent;
