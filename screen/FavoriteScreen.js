import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import { FavoriteMovieCardList } from '../components/FavoriteMovieCardList';

export function FavoriteScreen({ navigation }) {
	const { favorites } = useContext(AppContext);

	return (
		<SafeAreaView style={styles.container}>
			<FavoriteMovieCardList data={favorites} firstWord='My Favorite' restWord='' handleSeeAll={() => { }} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		gap: 15,
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