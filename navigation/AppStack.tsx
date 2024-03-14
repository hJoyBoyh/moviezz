/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screen/HomeScreen';
import { ChangeEmailScreen } from '../screen/ChangeEmailScreen';
import { ChangePasswordScreen } from '../screen/ChangePasswordScreen';
import { CinemaNearMeScreen } from '../screen/CinemaNearMeScreen';
import {SettingsScreen } from '../screen/SettingsScreen';
import { SearchScreen } from '../screen/SearchScreen';
import { FavoriteScreen } from '../screen/FavoriteScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, TouchableOpacity } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import { LogoMini } from '../components/LogoMini';
import { IconSearch } from '../components/IconSearch';

const Drawer = createDrawerNavigator();






export function AppStack({}) {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerTintColor:'white',
                // search icon pour changer de screen marche par je suggere quon l enleve et qu on y accede a partir du menu drawer
                headerRight: ((props) => <IconSearch />),

                 headerTitle: ((props) => <LogoMini />),
                 headerStyle: {
                    backgroundColor: '#292928'
                  },
                 
                 headerTitleAlign:'center',
                drawerActiveBackgroundColor: 'gold',
                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: 'white',
                drawerLabelStyle: {
                    
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
             
                
            }}>

            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                ), 

            }} />
         
            <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="bookmark-outline" size={22} color={color} />
                ),
             
            }} />
            <Drawer.Screen name="Cinema" component={CinemaNearMeScreen} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="movie-outline" size={22} color={color} />
                ),
                title:'Cinema near me'
             
            }} />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="settings-outline" size={22} color={color} />
                ),
                
                
            }} />

            {/* not show the search menu */}
               <Drawer.Screen name="Search" options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Ionicons name="search-outline" size={22} color={color} />
                ),
                // drawerLabel: () => null,
                // title: undefined,
                // drawerIcon: () => null,
            }} component={SearchScreen} />
            {/* <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen}/> */}


        </Drawer.Navigator>
    );
}