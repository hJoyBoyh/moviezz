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
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function SelectedMovieScreen({ navigation }) {
	const { trendingMovies, topMovies, discoverMovies, videoSelectedMovie, selectedMovie } = useContext(AppContext)
	const suggestionMovie = discoverMovies[0]
	console.log(selectedMovie)

	return (

		<SafeAreaView style={styles.container}>
			<View>
				<Video videoKey={videoSelectedMovie}></Video>
				<SubTitle firstWord={selectedMovie.title} hideSeeAll={true}></SubTitle>
				{/* {selectedMovie.genre_ids.map((genre) =>{
           typeMovies.map((type) =>{
            if(type.id == genre){
                return <Text>{type.id}</Text>
            }
           })
        })} */}
				<Text style={styles.text}>Synopsis: {selectedMovie.overview}</Text>
				<Text style={styles.text}>Rating: {selectedMovie.vote_average}</Text>

				<Text style={styles.text}>Rating: {selectedMovie.release_date}</Text>

				<TouchableOpacity style={styles.btn} onPress={() => { navigation.goBack() }}>
					<Text style={styles.btnText}>Quit</Text>
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
		color: '#ffffff',
		fontSize: 18,
		paddingLeft: 12,
		paddingBottom: 10
	},
	textNavigation: {
		color: '#d1c901'
	},
	btn: {
		height: 50,
		width: 100,
		marginLeft: 12,
		paddingBottom: 10,
		backgroundColor: 'gold',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		color: 'black',
		fontSize: 18,
	}
});