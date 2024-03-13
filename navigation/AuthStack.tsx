/* eslint-disable prettier/prettier */
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingScreen } from '../screen/OnboardingScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';


const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Onboarding"  component={OnboardingScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>

        </Stack.Navigator>
    );
}