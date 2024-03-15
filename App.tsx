/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import { AppStack } from './navigation/AppStack';
import AppNav from './navigation/AppNav';
import { AppProvider } from './context/AppContext';



function App(): React.JSX.Element {

  return (
    <AppProvider>
    <AppNav></AppNav>
    </AppProvider>

  );
}



export default App;
