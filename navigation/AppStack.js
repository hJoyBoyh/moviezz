/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/HomeScreen';
import { ChangeUserNameScreen } from '../screen/ChangeUserNameScreen';
import { ChangePasswordScreen } from '../screen/ChangePasswordScreen';
import { MoviezzForYouScreen } from '../screen/MoviezzForYouScreen';
import { TopMoviezzScreen } from '../screen/TopMoviezzScreen';
import { CinemaNearMeScreen } from '../screen/CinemaNearMeScreen';
import { SettingsScreen } from '../screen/SettingsScreen';
import { SearchScreen } from '../screen/SearchScreen';
import { FavoriteScreen } from '../screen/FavoriteScreen';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { LogoMini } from '../components/LogoMini';
import { SelectedMovieScreen } from '../screen/SelectedMovieScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

export function AppStack({ }) {
	return (
		<Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#292928'
				},
				headerTitleAlign: 'center'
			}}>

			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={({ navigation }) => ({
					headerRight: () => (
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={() => navigation.navigate('Search')}>
							<Ionicons name="search-outline" size={22} color='white' />
						</TouchableOpacity>
					),
					headerTitle: () => <LogoMini />,
					drawerActiveBackgroundColor: 'gold',
					drawerActiveTintColor: '#000',
					drawerInactiveTintColor: 'white',
					drawerLabelStyle: {
						fontFamily: 'Roboto-Medium',
						fontSize: 15,
					},
					drawerIcon: ({ color }) => (
						<Ionicons name="home-outline" size={22} color={color} />
					),
				})}
			/>

			<Drawer.Screen name="Favorite" component={FavoriteScreen}
				options={({ navigation }) => ({
					headerRight: () => (
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={() => navigation.navigate('Search')}>
							<Ionicons name="search-outline" size={22} color='white' />
						</TouchableOpacity>
					),
					headerTitle: () => <LogoMini />,
					drawerActiveBackgroundColor: 'gold',
					drawerActiveTintColor: '#000',
					drawerInactiveTintColor: 'white',
					drawerLabelStyle: {
						fontFamily: 'Roboto-Medium',
						fontSize: 15,
					},

					drawerIcon: ({ color }) => (
						<Ionicons name="bookmark-outline" size={22} color={color} />
					),
				})}
			/>
			<Drawer.Screen name="Cinema" component={CinemaNearMeScreen}
				options={({ navigation }) => ({
					headerRight: () => (
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={() => navigation.navigate('Search')}>
							<Ionicons name="search-outline" size={22} color='white' />
						</TouchableOpacity>
					),
					headerTitle: () => <LogoMini />,
					drawerActiveBackgroundColor: 'gold',
					drawerActiveTintColor: '#000',
					drawerInactiveTintColor: 'white',
					drawerLabelStyle: {
						fontFamily: 'Roboto-Medium',
						fontSize: 15,
					},

					drawerIcon: ({ color }) => (
						<MaterialCommunityIcons name="movie-outline" size={22} color={color} />
					),
				})}


			/>
			<Drawer.Screen name="Settings" component={SettingsScreen}
				options={({ navigation }) => ({
					headerRight: () => (
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={() => navigation.navigate('Search')}>
							<Ionicons name="search-outline" size={22} color='white' />
						</TouchableOpacity>
					),
					headerTitle: () => <LogoMini />,
					drawerActiveBackgroundColor: 'gold',
					drawerActiveTintColor: '#000',
					drawerInactiveTintColor: 'white',
					drawerLabelStyle: {
						fontFamily: 'Roboto-Medium',
						fontSize: 15,
					},

					drawerIcon: ({ color }) => (
						<Ionicons name="settings-outline" size={22} color={color} />
					),
				})}


			/>


			{/* not show the search menu */}
			<Drawer.Screen name="Search" options={{
				headerShown: false,

				drawerLabel: () => null,
				title: undefined,
				drawerIcon: () => null,
			}} component={SearchScreen} />
			<Drawer.Screen name="MoviezzForYou" options={{
				headerShown: false,

				drawerLabel: () => null,
				title: undefined,
				drawerIcon: () => null,
			}} component={MoviezzForYouScreen} />
			<Drawer.Screen name="TopMoviezz" options={{
				headerShown: false,

				drawerLabel: () => null,
				title: undefined,
				drawerIcon: () => null,
			}} component={TopMoviezzScreen} />
			<Drawer.Screen name="ChangeUserName" options={{
				headerShown: false,
				drawerLabel: () => null,
				title: undefined,
				drawerIcon: () => null,
			}} component={ChangeUserNameScreen} />
			<Drawer.Screen name="ChangePassword" options={{
				headerShown: false,
				drawerLabel: () => null,
				title: undefined,
				drawerIcon: () => null,
			}} component={ChangePasswordScreen} />
			{/* <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen}/> */}
			<Drawer.Screen
				name="SelectedMovie"
				component={SelectedMovieScreen}
				options={{
					headerShown: false,
					drawerLabel: () => null,
					title: undefined,
					drawerIcon: () => null,
				}}
			/>
		</Drawer.Navigator>
	);
}
const styles = StyleSheet.create({

	buttonStyle: {
		padding: 5,
		paddingRight: 14,
		paddingLeft: 14,
		borderRadius: 5,
	},

})