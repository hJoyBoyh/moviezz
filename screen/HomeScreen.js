/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';

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
import { SubTitle } from '../components/SubTitle';
import { SuggestionMovieCard } from '../components/SuggestionMovieCard';
import { MovieListCarousel } from '../components/MovieListCarousel';
import { FavoriteMovieCard } from '../components/FavoriteMovieCard';

import auth from '@react-native-firebase/auth';
import { AppContext } from '../context/AppContext';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';

export function HomeScreen({ navigation }) {
	const { trendingMovies, topMovies, discoverMovies } = useContext(AppContext)
	const suggestionMovie = discoverMovies[0]
	console.log(suggestionMovie)

	return (

		<SafeAreaView style={styles.container}>
			<ScrollView>
				<SuggestionMovieCard source={{ uri: `${API_BASE_URL_IMG}${suggestionMovie.poster_path}` }} title={suggestionMovie.title} year={suggestionMovie.release_date.split('-')[0]} discoverMovie={suggestionMovie} navigation={navigation} ></SuggestionMovieCard>
				<MovieListCarousel data={trendingMovies} firstWord='Moviezz' restWord=' for you' handleSeeAll={() => console.log('haha')} navigation={navigation}></MovieListCarousel>
				<MovieListCarousel data={topMovies} firstWord='Top' restWord=' moviezz 250' handleSeeAll={() => console.log('haha')} navigation={navigation}></MovieListCarousel>
			</ScrollView>
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