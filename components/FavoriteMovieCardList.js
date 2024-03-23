import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubTitle } from './SubTitle';
import { FavoriteMovieCard } from './FavoriteMovieCard';
import { API_BASE_URL_IMG } from '../moviezz-api/manager';


export function FavoriteMovieCardList({ data, firstWord, restWord, handleSeeAll }) {
	const [isFavorite, setIsFavorite] = useState(true);

	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
			<View>
				<SubTitle firstWord={firstWord} restWord={restWord} hideSeeAll={true} onPress={handleSeeAll} />
				<FlatList
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<FavoriteMovieCard
							source={{ uri: `${API_BASE_URL_IMG}${item.poster_path}` }}
							title={item.title}
							year={item.release_date}
							description={item.overview}
							id={item.id}
							setIsFavorite={setIsFavorite}
						/>
					)}
					keyExtractor={(item) => item.id.toString()}
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
