/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';


export function CustomButton(props) {
	return (
		<View>
			<Pressable style={styles.button} onPress={props.onPress}>
				<Text style={styles.buttonText}>{props.title}</Text>
			</Pressable>
		</View>
	);
}


const styles = StyleSheet.create({
	button: {
		height: 60,
		width: 310,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#d1c800',
		borderRadius: 20,
		marginBottom:10

	},
	buttonText: {
		fontSize: 24,
		color: '#ffffff',
		fontWeight: 'bold',
		textAlign: 'center'
	}
});