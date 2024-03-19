/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

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
import { NavigationContainer } from '@react-navigation/native';
import { CardMovie } from '../components/CardMovie';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SubTitle } from '../components/SubTitle';

export function CinemaNearMeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<SubTitle firstWord='Cinema' hideSeeAll={false}></SubTitle>
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
		color: '#ffffff'
	},
	textNavigation: {
		color: '#d1c901'
	},
});