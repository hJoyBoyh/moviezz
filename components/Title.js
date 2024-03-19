/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
	StyleSheet,
	Text,
	View,
} from 'react-native';


export function Title(props) {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.title}>{props.stitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		display: 'flex',
		width: 370,
	},
	title: {
		fontSize: 50,
		color: 'white',
		textAlign: 'center',
	},
});