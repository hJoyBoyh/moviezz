import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SubTitle } from '../components/SubTitle';
import { AppContext } from '../context/AppContext';
import { Video } from '../components/Video';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function SelectedMovieScreen({ navigation }) {
	const { videoSelectedMovie, selectedMovie, addToFavorites, removeFromFavorites, favorites } = useContext(AppContext);
	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = () => {
		if (isFavorite) {
			removeFromFavorites(selectedMovie.id);
		} else {
			addToFavorites(selectedMovie);
		}
		setIsFavorite(!isFavorite);
	};

	useState(() => {
		const isFav = favorites.find(movie => movie.id === selectedMovie.id);
		setIsFavorite(!!isFav);
	}, [favorites]);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Video videoKey={videoSelectedMovie}></Video>
				<SubTitle firstWord={selectedMovie.title} hideSeeAll={true}></SubTitle>
				<Text style={styles.text}>Synopsis: {selectedMovie.overview}</Text>
				<Text style={styles.text}>Rating: {selectedMovie.vote_average}</Text>
				<Text style={styles.text}>Release date: {selectedMovie.release_date}</Text>
				<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Quit</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
					<Ionicons name={isFavorite ? 'heart' : 'heart-outline'} color='white' size={25} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		gap: 10,
		backgroundColor: '#292928'
	},
	text: {
		color: '#ffffff',
		fontSize: 18,
		paddingLeft: 12,
		paddingBottom: 10
	},
	button: {
		height: 50,
		width: 100,
		marginLeft: 12,
		paddingBottom: 10,
		backgroundColor: 'gold',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'black',
		fontSize: 18,
	},
	favoriteButton: {
		height: 50,
		width: 100,
		marginLeft: 12,
		paddingBottom: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
