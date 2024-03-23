/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import { SubTitle } from '../components/SubTitle';

export function ShowMoviezzScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<SubTitle firstWord='Selected Moviezz' hideSeeAll={false}></SubTitle>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		gap: 15,
		alignItems: 'center',
		backgroundColor: '#292928'
	},
});