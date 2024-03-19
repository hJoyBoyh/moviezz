import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubTitle } from './SubTitle';
import { CardMovie } from './CardMovie';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';
import { AppContext } from '../context/AppContext';

const Item = ({ title }) => (
	<View>
		<Text>{title}</Text>
	</View>
);

export function MovieListCarousel({ data, firstWord, restWord, handleSeeAll, navigation }) {
	const { videoSelectedMovie, setVideoSelectedMovie, setSelectedMovie, selectedMovie, getVideoSelectedMovies } = useContext(AppContext);

	const handleCardRedirection = (item) => {
		setSelectedMovie(item);
		getVideoSelectedMovies();
		navigation.navigate('SelectedMovie');
		console.log(selectedMovie.id);
		console.log(videoSelectedMovie);
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
			<View>
				<SubTitle firstWord={firstWord} restWord={restWord} hideSeeAll={false} onPress={handleSeeAll}></SubTitle>
				<FlatList
					data={data.slice(0, 21)}
					horizontal
					snapToInterval={300}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardMovie source={{ uri: `${API_BASE_URL_IMG}${item.poster_path}` }} year={item.release_date.split('-')[0]} onPress={() => { handleCardRedirection(item) }} />
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollViewContainer: {
		marginTop: 20,
		paddingBottom: 10,
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		width: 300,
		fontSize: 16,
	},
});
