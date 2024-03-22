import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';

export function FavoriteMovieCard(props) {
	const { removeFromFavorites, favorites } = useContext(AppContext);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const isFav = favorites.find(movie => movie.id === props.id);
		setIsFavorite(!!isFav);
	}, [favorites]);

	const toggleFavorite = () => {
		if (isFavorite) {
			removeFromFavorites(props.id);
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<TouchableOpacity onPress={toggleFavorite}>
			<View style={styles.card}>
				<View>
					<Image source={props.source} style={styles.image} />
				</View>
				<View style={styles.viewInfo}>
					<Text style={styles.text}>{props.title}</Text>
					<Text style={styles.text}>{props.year}</Text>
					<Text style={styles.description}>{props.description}</Text>
					<Ionicons name={isFavorite ? 'heart' : 'heart-outline'} color='white' size={25} />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 10,
		marginTop: 20,
		width: 340,
	},
	image: {
		height: 150,
		width: 100,
		borderRadius: 10,
		marginBottom: 10,
	},
	viewInfo: {
		gap: 7,
	},
	text: {
		color: 'white',
	},
	description: {
		color: 'white',
		width: 200,
		height: 69,
		overflow: 'hidden',
	},
});
