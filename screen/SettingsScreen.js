/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React,{useContext} from 'react';

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
import { Title } from '../components/Title';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { AppContext } from '../context/AppContext';


export function SettingsScreen({ navigation }) {
	const { user} = useContext(AppContext)

	let username = user.email.split('@')[0]
	let userEmail = user.email
	return (
		<SafeAreaView style={styles.container}>
			<SubTitle firstWord='Settings' hideSeeAll={true}></SubTitle>
			<Title title={`Hi,${username}`} />
			<Form
				input01={<InputText placeholder={`Email - ${userEmail}`} editable={false} onPress={() => navigation.navigate('ChangeEmail')} />}
				input02={<InputText placeholder='Password - ' editable={false} onPress={() => navigation.navigate('ChangePassword')} />}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
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