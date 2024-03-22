/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { SubTitle } from '../components/SubTitle';
import { AppContext } from '../context/AppContext';
import { Video } from '../components/Video';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function SelectedMovieScreen({ navigation }) {
	const { videoSelectedMovie, selectedMovie } = useContext(AppContext)

	console.log(selectedMovie)

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Video videoKey={videoSelectedMovie}></Video>
				<SubTitle firstWord={selectedMovie.title} hideSeeAll={true}></SubTitle>
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

	text: {
		color: '#ffffff',
		fontSize: 18,
		paddingLeft: 12,
		paddingBottom: 10
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