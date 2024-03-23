/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
} from 'react-native';

import { SuggestionMovieCard } from '../components/SuggestionMovieCard';
import { MovieListCarousel } from '../components/MovieListCarousel';
import { AppContext } from '../context/AppContext';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';

export function HomeScreen({ navigation }) {
	const { trendingMovies, topMovies, discoverMovies } = useContext(AppContext)
	// SUGGESTION MOVIE
	const suggestionMovie = discoverMovies[0]

	return (

		<SafeAreaView style={styles.container}>
			<ScrollView>
			{ suggestionMovie === undefined ? <Text style={styles.textWait}>Wait</Text>	:<SuggestionMovieCard source={{ uri: `${API_BASE_URL_IMG}${suggestionMovie.poster_path}` }} title={suggestionMovie.title} year={suggestionMovie.release_date.split('-')[0]} discoverMovie={suggestionMovie} navigation={navigation} ></SuggestionMovieCard>}
				<MovieListCarousel data={trendingMovies} firstWord='Moviezz' restWord=' for you' handleSeeAll={() => navigation.navigate("MoviezzForYou")} navigation={navigation}></MovieListCarousel>
				<MovieListCarousel data={topMovies} firstWord='Top' restWord=' moviezz' handleSeeAll={() => navigation.navigate("TopMoviezz")} navigation={navigation}></MovieListCarousel>
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
	textWait: {
		color: '#ffffff',
		fontSize:24,
		textAlign:'center'
	},
	
});