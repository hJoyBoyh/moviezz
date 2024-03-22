/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';
import { AppContext } from '../context/AppContext';

export function SuggestionMovieCard(props) {
	const { videoSelectedMovie, setVideoSelectedMovie, setSelectedMovie, selectedMovie, getVideoSelectedMovies, addToFavorites, removeFromFavorites, favorites } = useContext(AppContext);
	const [isFavorite, setIsFavorite] = useState(false);

	const handleCardRedirection = () => {
		setSelectedMovie(props.discoverMovie);
		getVideoSelectedMovies();
		props.navigation.navigate('SelectedMovie');
	};

	const toggleFavorite = () => {
		if (isFavorite) {
			removeFromFavorites(props.discoverMovie.id);
		} else {
			addToFavorites(props.discoverMovie);
		}
		setIsFavorite(!isFavorite);
	};

	useState(() => {
		const isFav = favorites.find(movie => movie.id === props.discoverMovie.id);
		setIsFavorite(!!isFav);
	}, [favorites]);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<SubTitle firstWord='Suggestion' restWord=' of the day' hideSeeAll={true}></SubTitle>

			<View style={styles.card}>

				<Image source={props.source} style={styles.image}></Image>

				<Text style={styles.text}>{props.title}</Text>
				<Text style={styles.text}>{props.year}</Text>

				<View style={styles.suggestionBox}>
					<TouchableOpacity onPress={() => handleCardRedirection()}>
						<Text style={styles.suggestionBoxText}>Info</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={toggleFavorite}>
						<Ionicons name={isFavorite ? 'heart' : 'heart-outline'} color='black' size={25} style={styles.heart} />
					</TouchableOpacity>
				</View>

			</View>
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	safeAreaView: {
		marginTop: 15,
	},
	card: {
		display: 'flex',
		// justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 500,
		width: 352,
		borderRadius: 10,
		marginTop: 20
	},
	text: {
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
	},
	suggestionBox: {
		height: 50,
		width: 150,
		marginTop: 20,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 30,
	},
	suggestionBoxText: {
		height: 50,
		width: 75,
		borderRadius: 30,
		backgroundColor: 'gold',
		paddingTop: 15,
		paddingLeft: 26.5,
		color: 'black'

	},
	heart: {
		marginRight: 26
	}
});