import React, { useContext } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';

function CustomDrawer(props) {
	const { user, signOut } = useContext(AppContext)
	
	const username = user.displayName
	console.log(user)
	return (
		<View style={styles.container}>
			<Text style={styles.username}>{username === null ? "Reload to see username": username }</Text>

			<DrawerContentScrollView
				{...props}
			>


				<View style={styles.drawerListContainer}>
					<DrawerItemList {...props} />
				</View>
			</DrawerContentScrollView>

			<View style={styles.buttomMenuContainer}>
				<TouchableOpacity onPress={() => signOut()} style={styles.signOutTouchable}>
					<View style={styles.signOutContainer}>
						<Ionicons name="exit-outline" size={22} color={'white'} />
						<Text
							style={styles.signOut}>
							Sign Out
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CustomDrawer;



const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#1b1b1b' },
	username: {
		color: 'white',
		textAlign: 'center',
		fontSize: 24,
		marginTop: 10,
	},
	drawerListContainer: {
		flex: 1,
		backgroundColor: '#1b1b1b',
		paddingTop: 10
	},
	buttomMenuContainer: {
		padding: 20,
		borderTopWidth: 1,
		borderTopColor: 'white'
	},
	signOutTouchable: {
		paddingVertical: 15
	},
	signOutContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	signOut: {
		fontSize: 15,
		fontFamily: 'Roboto-Medium',
		marginLeft: 5,
		color: 'white'
	}
});