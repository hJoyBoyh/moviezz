/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';

import {
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { AppContext } from '../context/AppContext';


export function SettingsScreen({ navigation }) {
	const { user } = useContext(AppContext)

	return (
		<SafeAreaView style={styles.container}>
			<SubTitle firstWord='Settings' hideSeeAll={true}></SubTitle>
			<Title title={`Hi, ${user.displayName}`} />
			<Form
				input01={<InputText placeholder={`Username - ${user.displayName}`} editable={false} onPress={() => navigation.navigate('ChangeUserName')} />}
				input02={<InputText placeholder='Password - ' editable={false} onPress={() => navigation.navigate('ChangePassword')} />}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#292928'
	},

});