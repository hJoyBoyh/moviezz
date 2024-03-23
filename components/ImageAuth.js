/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
	Image,

	StyleSheet,
	View,
} from 'react-native';


export function ImageAuth(props) {
	return (
		<View>
			<Image source={props.source} style={styles.image}></Image>
		</View>
	);
}


const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 200,
		marginTop: 20,
		borderRadius: 15,
	},

});