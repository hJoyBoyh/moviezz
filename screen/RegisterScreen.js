/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { InputText } from '../components/InputText';
import { AppContext } from '../context/AppContext';
import { CustomButton } from '../components/CustomButton';
import { Title } from '../components/Title';

export function RegisterScreen({ navigation }) {
	const { signUp } = useContext(AppContext)
	const [username, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (

		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView behavior={'height'}>
				<View style={styles.content}>
					<View>
						<Image source={require('../assets/RegisterImg.png')} style={styles.registerImg}></Image>
					</View>
					<Title title='Register'></Title>

					<View style={styles.form}>
						{/* <InputText placeholder="Username"></InputText> */}
						<InputText placeholder="Username" value={username} onChangeText={text => setUserName(text)} hideRedirectionIcon={true}></InputText>
						<InputText placeholder="Email" value={email} onChangeText={text => setEmail(text)} hideRedirectionIcon={true}></InputText>
						<InputText placeholder="Password" value={password} onChangeText={password => setPassword(password)} secureTextEntry={true} hideRedirectionIcon={true}></InputText>
					</View>
					<CustomButton title='Register' onPress={() => signUp(email, password, username)} />

					<View style={styles.textContainer}>
						<Text style={styles.text}>Already have an account ?</Text>
						<Text style={styles.textNavigation} onPress={() => navigation.navigate('Login')}>Login</Text>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	keyboard: {
		flex: 1,
	},
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
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
	form: {
		height: 200,
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	registerImg: {
		height: 200,
		width: 200,
		marginTop: 20,
		borderRadius: 15,
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