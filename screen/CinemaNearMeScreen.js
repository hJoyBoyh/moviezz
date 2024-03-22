import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export function CinemaNearMeScreen({ navigation }) {
	const [cinemas, setCinemas] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (Platform.OS === 'android') {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						{
							title: 'Location Permission',
							message: 'This app needs access to your location to find cinemas nearby.',
							buttonNeutral: 'Ask Me Later',
							buttonNegative: 'Cancel',
							buttonPositive: 'OK',
						}
					);
					if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
						setError(new Error('Location permission denied'));
						return;
					}
				}

				Geolocation.getCurrentPosition(
					position => {
						const { latitude, longitude } = position.coords;
						const geolocation = `${latitude};${longitude}`;
						console.log(geolocation);

						fetchCinemas(geolocation);
					},
					error => {
						setError(error);
					},
					{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
				);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	const fetchCinemas = async (geolocation) => {
		try {
			const apiKey = 'dDsazJJnj36IntF2ELV6S7FSm4gQuIDr6rJVK0Nn';
			const client = 'SCHO_61';
			const authorization = 'Basic U0NIT182MTo4VnNrVmpNUHZ3ME8=';
			const territory = 'CA';
			const apiVersion = '200';

			const response = await fetch(
				`https://api-gate2.movieglu.com/cinemasNearby/?n=2&geolocation=${geolocation}`,
				{
					headers: {
						'x-api-key': apiKey,
						'client': client,
						'authorization': authorization,
						'territory': territory,
						'api-version': apiVersion,
					},
				}
			);

			const data = await response.json();
			console.log(data);
			setCinemas(data);
		} catch (error) {
			setError(error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			{error ? (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>Error: {error.message}</Text>
				</View>
			) : (
				<View style={styles.content}>
					{/* Display cinemas here */}
					{cinemas.map(cinema => (
						<Text key={cinema.id}>{cinema.name}</Text>
					))}
				</View>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#292928',
	},
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontSize: 16,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});