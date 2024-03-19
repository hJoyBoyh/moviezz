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

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',

	},
	{
		id: '586s94a0f-3da1-471f-bd96-145571e29d72',

	},
	{
		id: '58694a0fa-3da1-471f-bd96-145571e29d72',

	},
	{
		id: '5869A4a0fa-3da1-471f-bd96-145571e29d72',

	},
	{
		id: '58694a0faQW-3da1-471f-bd96-145571e29d72',

	},
	{
		id: '58694a0fa-3da1SFD-471f-bd96-145571e29d72',

	},

];
import auth from '@react-native-firebase/auth';
import { AppContext } from '../context/AppContext';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';

export function HomeScreen({ navigation }) {
	const { trendingMovies, topMovies, discoverMovies } = useContext(AppContext)
	const suggestionMovie = discoverMovies[0]

	return (

		<SafeAreaView style={styles.container}>
			<ScrollView>
				<SuggestionMovieCard source={{ uri: `${API_BASE_URL_IMG}${suggestionMovie.poster_path}` }} title={suggestionMovie.original_title} year={suggestionMovie.release_date.split('-')[0]}></SuggestionMovieCard>
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