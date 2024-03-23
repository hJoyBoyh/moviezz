/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';

import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CardMovie } from '../components/CardMovie';
import { AppContext } from '../context/AppContext';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';
import { LogBox } from 'react-native';
import { SubTitle } from '../components/SubTitle';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function TopMoviezzScreen({ navigation }) {
	const { setTopMoviesPage, topMoviesPage, topMovies, getTopMovies, handleCardRedirection } = useContext(AppContext)

	const handleSwitchPageRight = () => {
		const MAX_PAGES_TOPMOVIES = 463
		let currentNumber = topMoviesPage
		let nextNumber = currentNumber + 1

		if (topMoviesPage !== MAX_PAGES_TOPMOVIES) {
			setTopMoviesPage(nextNumber)
		}
	}
	const handleSwitchPageleft = () => {
		const MIN_PAGES_TOPMOVIES = 1
		let currentNumber = topMoviesPage
		let nextNumber = currentNumber - 1

		if (topMoviesPage !== MIN_PAGES_TOPMOVIES) {
			setTopMoviesPage(nextNumber)
		}
	}
	useEffect(() => {
		getTopMovies(topMoviesPage)

	}, [topMoviesPage]);


	return (
		<SafeAreaView style={styles.background}>
			<FontAwesome5 name='angle-left' color='#9F9F95' size={35} onPress={() => navigation.goBack()} style={styles.redirectionIcon} />

			<SubTitle firstWord='Top moviezz' hideSeeAll={true}></SubTitle>

			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
				<View style={styles.content}>

					{topMovies.map((movie) => {
						return <CardMovie source={{ uri: `${API_BASE_URL_IMG}${movie.poster_path}` }} title={movie.original_title} year={movie.release_date.split('-')[0]} onPress={() => { handleCardRedirection(movie, navigation) }} />

					})}

				</View>
			</ScrollView>
			<View style={styles.buttonSwitchContainer}>
				<FontAwesome5 name='angle-left' color='#9F9F95' size={35} onPress={() => handleSwitchPageleft()} />
				<Text style={styles.textPage}>{topMoviesPage}</Text>
				<FontAwesome5 name='angle-right' color='#9F9F95' size={35} onPress={() => handleSwitchPageRight()} />

			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({

	background: {
		backgroundColor: '#292928',
		display: 'flex',
		flex: 1,

	},
	redirectionIcon: {
		marginTop: 10,
		marginLeft: 20
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1,
		backgroundColor: '#292928'
	},

	textPage: {
		color: '#ffffff',
		fontSize: 24
	},
	buttonSwitchContainer: {
		backgroundColor: '#3D3D3A',
		margin: 10,
		display: "flex",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

	}
});