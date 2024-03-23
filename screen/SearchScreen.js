/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { CardMovie } from '../components/CardMovie';
import { NoResultSearch } from '../components/NoResultSearch';
import SearchBarComponent from '../components/SearchBarComponent';
import { AppContext } from '../context/AppContext';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function SearchScreen({ navigation }) {
	const { resultSearch, handleCardRedirection } = useContext(AppContext)

	return (
		<SafeAreaView style={styles.background}>
			<View style={styles.flex}>
				<SearchBarComponent></SearchBarComponent>
				<Text style={styles.text} onPress={() => navigation.navigate('Home')}>Annuler</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
				<View style={styles.content}>

					{resultSearch.length === 0 ? <NoResultSearch></NoResultSearch> : resultSearch.map((movie) => {
						return <CardMovie source={{ uri: `${API_BASE_URL_IMG}${movie.poster_path}` }} title={movie.original_title} year={movie.release_date.split('-')[0]} onPress={() => { handleCardRedirection(movie, navigation) }} />

					})}

				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#292928',
		display: 'flex',
		flex: 1
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	content: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1,
		backgroundColor: '#292928'
	},
	text:{
		color: '#ffffff'
	}
});