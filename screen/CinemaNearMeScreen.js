import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
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

				console.log("Location permission granted")
				Geolocation.getCurrentPosition(
					position => {
						const { latitude, longitude } = position.coords;
						const geolocation = `${latitude};${longitude}`;
						console.log("GEO1\n" + geolocation);

						fetchCinemas(geolocation);
					},
					error => {
						setError(error);
					},
					{
						enableHighAccuracy: false,
						timeout: 60000,
						maximumAge: 120000
					}
				);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	const fetchCinemas = async (geolocation) => {
		console.log("GELOCATIONNNNNNNNNNNNNNNNNNNNNNNNNNNNN\n" + geolocation)
		try {
			const apiKey = 'dDsazJJnj36IntF2ELV6S7FSm4gQuIDr6rJVK0Nn';
			const client = 'SCHO_61';
			const authorization = 'Basic U0NIT182MTo4VnNrVmpNUHZ3ME8=';
			const territory = 'CA';
			const apiVersion = 'v200';
			const currentDatetime = new Date().toISOString();
			const response = await fetch(
				`https://api-gate2.movieglu.com/cinemasNearby/?n=10`,
				{
					method: 'GET',
					headers: {
						'x-api-key': apiKey,
						'client': client,
						'authorization': authorization,
						'territory': territory,
						'api-version': apiVersion,
						'geolocation': geolocation,
						'device-datetime': currentDatetime,
					},
				}
			);
			console.log(response);
			const data = await response.json();
			console.log(data.cinemas);
			setCinemas(data.cinemas);
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
				<ScrollView>
					<View style={styles.content}>
						{cinemas.map(cinema => (
							<CinemaInfo key={cinema.cinema_id} cinema={cinema} />
						))}
					</View>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}

const CinemaInfo = ({ cinema }) => {
	return (
		<View style={styles.cinemaContainer}>
			<Text style={styles.cinemaName}>{cinema.cinema_name}</Text>
			<Text style={styles.address}>{cinema.address}</Text>
			<Text style={styles.city}>{cinema.city}, {cinema.state} {cinema.postcode}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#141414',
	},
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontSize: 18,
	},
	content: {
		padding: 10,
	},
	cinemaContainer: {
		marginBottom: 20,
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		backgroundColor: '#282828',
	},
	cinemaName: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	address: {
		fontSize: 16,
		marginBottom: 3,
	},
	city: {
		fontSize: 16,
		color: '#888',
	},
});