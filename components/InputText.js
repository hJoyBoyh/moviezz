/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {

	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function InputText(props) {
	return (
		<View style={styles.inputTextContainer}>
			<TextInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} value={props.value} editable={props.editable} placeholderTextColor="#9F9F95" onChangeText={props.onChangeText} style={styles.input} />
			<FontAwesome5 name='angle-right' color='#9F9F95' size={25} onPress={props.onPress} style={props.hideRedirectionIcon ? styles.hideRedirectionIcon : styles.redirectionIcon} />

		</View>
	)
}


const styles = StyleSheet.create({
	inputTextContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		color: 'white',
		width: 350,
		borderBottomColor: '#ffffff',
		borderBottomWidth: 1,
	},
	redirectionIcon: {
		marginTop: 0,
	},
	hideRedirectionIcon: {
		width: 0
	}



});