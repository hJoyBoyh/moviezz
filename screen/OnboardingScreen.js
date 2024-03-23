/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';

import {
	Image,
	SafeAreaView,
	StyleSheet,
	View,
} from 'react-native';
import { CustomButton} from '../components/CustomButton';

export function OnboardingScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Image source={require('../assets/logoColor.png')} style={styles.logo}></Image>
			</View>
			<View>
				<Image source={require('../assets/onboardImg.png')} style={styles.onboardImg}></Image>
			</View>
			<CustomButton title="Let's begin" onPress={() => navigation.navigate('Login')}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#292928'
	},
	logo: {
		height: 145,
		width: 350,
		marginTop: 20,
	},
	onboardImg: {
		height: 280,
		width: 350,
	},
});