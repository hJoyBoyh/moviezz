import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen } from '../screen/OnboardingScreen';
import { LoginScreen } from '../screen/LoginScreen';


const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Onboarding"  component={OnboardingScreen}/> */}
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
}