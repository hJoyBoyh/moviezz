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

import { SubTitle } from '../components/SubTitle';


import { AppContext } from '../context/AppContext';

import { Video } from '../components/Video';

import { TouchableOpacity } from 'react-native-gesture-handler';


export function SelectedMovieScreen({ navigation }) {
	const { trendingMovies, topMovies, discoverMovies, videoSelectedMovie, selectedMovie } = useContext(AppContext)
	
	console.log(selectedMovie)

	return (

		<SafeAreaView style={styles.container}>
			<View>
				<Video videoKey={videoSelectedMovie}></Video>
				<SubTitle firstWord={selectedMovie.title}  hideSeeAll={true}></SubTitle>
				{/* {selectedMovie.genre_ids.map((genre) =>{
           typeMovies.map((type) =>{
            if(type.id == genre){
                return <Text>{type.id}</Text>
            }
           })
        })} */}
				<Text style={styles.text}>Synopsis: {selectedMovie.overview}</Text>
				<Text style={styles.text}>Rating: {selectedMovie.vote_average}</Text>

				<Text style={styles.text}>Release date: {selectedMovie.release_date}</Text>

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