/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { SubTitle } from './SubTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';

// props: source(img)- title(title of the movie)- year(year of the realest of the movie)
export function SuggestionMovieCard(props) {

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<SubTitle firstWord='Suggestion' restWord=' of the day' hideSeeAll={true}></SubTitle>

			<View style={styles.card}>

				<Image source={props.source} style={styles.image}></Image>

				<Text style={styles.text}>{props.title}</Text>
				<Text style={styles.text}>{props.year}</Text>

				<View style={styles.suggestionBox}>
					<Text style={styles.suggestionBoxText}>Info</Text>
					<Ionicons name='heart-outline' color='black' size={25} style={styles.heart} />
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