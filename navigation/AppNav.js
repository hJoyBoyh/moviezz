import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export function AppNav() {
	// const {isLoading, userToken} = useContext(AppContext)
	// if(isLoading) {
	// return(
	// <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
	// <ActivityIndicator size={'large'}/>
	// </View>
	// )
	// }

	const { initializing, user } = useContext(AppContext)
	if (initializing) return null;
	return (
		<NavigationContainer>
			{/* {userToken !== '' ? <AppStack></AppStack>: <AuthStack></AuthStack> } */}
			{/* <AppStack></AppStack> */}
			{!user ? <AuthStack></AuthStack> : <AppStack></AppStack>}
		</NavigationContainer>
	);
};

export default AppNav;
