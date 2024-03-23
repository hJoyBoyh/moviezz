/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React ,{useState , useContext}from 'react';

import {
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	View,
} from 'react-native';
import { Title } from '../components/Title';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { CustomButton} from '../components/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AppContext } from '../context/AppContext';

export function ChangeUserNameScreen({ navigation }) {
	const [newUserName, setNewUserName] = useState("")
	const {user, updateUserName} = useContext(AppContext)

	return (

		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView behavior={'height'}>
				<FontAwesome5 name='angle-left' color='#9F9F95' size={35} onPress={() => navigation.navigate('Settings')} style={styles.redirectionIcon} />
				<View style={styles.content}>
					<Title title="Change Username" />
					<Form input01={
						<InputText placeholder={`Current Username : ${user.displayName}`} editable={false} hideRedirectionIcon={true} />
					}
					
						input02={
							<InputText placeholder="New Username " hideRedirectionIcon={true} value={newUserName} onChangeText={(text)=> setNewUserName(text)} />
						}
						
					/>
					<CustomButton title="Confirm" onPress={() => updateUserName(newUserName)}/>
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