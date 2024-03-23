import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubTitle } from './SubTitle';
import { CardMovie } from './CardMovie';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';
import { AppContext } from '../context/AppContext';


export function MovieListCarousel({ data, firstWord, restWord, handleSeeAll, navigation }) {
	const {handleCardRedirection } = useContext(AppContext);

	

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
						<CardMovie source={{ uri: `${API_BASE_URL_IMG}${item.poster_path}` }} year={item.release_date.split('-')[0]} onPress={() => { handleCardRedirection(item,navigation) }} />
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
});
