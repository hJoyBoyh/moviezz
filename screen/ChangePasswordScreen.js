/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import {
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	View,
} from 'react-native';


import { Title } from '../components/Title';
import { CustomButton } from '../components/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AppContext } from '../context/AppContext';


export function ChangePasswordScreen({ navigation }) {
	const { user,updatePassword ,signOut } = useContext(AppContext)
	const userEmail = user.email
	const handleUpdatePassword =()=>{
		updatePassword(userEmail)
		signOut()
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView behavior={'height'}>
				<FontAwesome5 name='angle-left' color='#9F9F95' size={35} onPress={() => navigation.navigate('Settings')} style={styles.redirectionIcon} />
				<View style={styles.content}>
					<Title title="Change Password" />
					
					<CustomButton title="Send link to your email" onPress={() => handleUpdatePassword()}/>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#292928'
	},
	redirectionIcon: {
		marginTop: 20
	},
	content: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: 20,
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