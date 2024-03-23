import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export function AppNav() {

	const { initializing, user } = useContext(AppContext)
	if (initializing) return null;
	return (
		<NavigationContainer>
			{!user ? <AuthStack></AuthStack> : <AppStack></AppStack>}
		</NavigationContainer>
	);
};

export default AppNav;
