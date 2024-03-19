import React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function IconSearch(props) {
	return (
		<TouchableOpacity onPress={() => { props.navigation }}>
			<Ionicons name='search' color='white' size={25} style={{ marginRight: 10 }} />
		</TouchableOpacity>
	);
}
