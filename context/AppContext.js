import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import signInWithEmailAndPassword from '@react-native-firebase/auth';
import { fetchDiscoverMovies, fetchSearchMovies, fetchTopMovies, fetchTrendingMovies, fetchTypeMovies, fetchVideoSelectedMovies } from "../moviezz-api/model";
import { Alert } from "react-native";
import PushNotification from 'react-native-push-notification';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// auth variables
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	// movies variables
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [topMovies, setTopMovies] = useState([]);
	const [discoverMovies, setDiscoverMovies] = useState([]);
	const [typeMovies, setTypeMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [resultSearch, setResultSearch] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState('')
	const [videoSelectedMovie, setVideoSelectedMovie] = useState('')
	const [favorites, setFavorites] = useState([]);

	// auth functions----------------------
	function isEmpty(value) {
		return (value == null || (typeof value === "string" && value.trim().length === 0));
	}

	const login = (email, password) => {

		if (isEmpty(email) === true) {
			Alert.alert('The email is empty. Enter your email')
		}
		else if (isEmpty(password) === true) {
			Alert.alert('The password is empty. Enter your email')
		}
		else if (isEmpty(password) === false && isEmpty(email) === false) {
			auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					console.log('User & login!');
				})
				.catch(error => {
					if (error.code === "auth/invalid-email") {
						Alert.alert("The email is invalid. Please try again")
					}
					if (error.code === "auth/invalid-credential") {
						Alert.alert("The email or the password is invalid. Please try again")
					}
					if (error.code === "auth/too-many-requests") {
						Alert.alert
							("We have blocked all requests from this device due to unusual activity. Reload the app")
					}
				});
		}
	}

	const signUp = (email, password) => {
		if (isEmpty(email) === true) {
			Alert.alert('The email is empty. Enter your email')
		}
		else if (isEmpty(password) === true) {
			Alert.alert('The password is empty. Enter your email')
		}
		else if (isEmpty(password) === false && isEmpty(email) === false) {

			auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					console.log('User account created & signed in!');
				})
				.catch(error => {
					if (error.code === 'auth/email-already-in-use') {
						Alert.alert('That email address is already in use!');
					}
					if (error.code === 'auth/invalid-email') {
						Alert.alert('That email address is invalid!');
					}
					;
				});
		}
	}
	const signOut = () => {
		auth()
			.signOut()
			.then(() => console.log('User signed out!'));
	}

	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	// movies functions----------------------
	const addToFavorites = async (movie) => {
		const updatedFavorites = [...favorites, movie];
		await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

		PushNotification.localNotification({
			title: 'Favorites Updated',
			message: 'Your favorites have been updated!',
		});

		setFavorites(updatedFavorites);
	};

	const removeFromFavorites = async (movieId) => {
		const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
		await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

		PushNotification.localNotification({
			title: 'Favorites Updated',
			message: 'Your favorites have been updated!',
		});

		setFavorites(updatedFavorites);
	};

	const loadFavorites = async () => {
		const favoritesData = await AsyncStorage.getItem('favorites');
		if (favoritesData) {
			setFavorites(JSON.parse(favoritesData));
		}
	};

	useEffect(() => {
		loadFavorites();
	}, []);

	const getTrendingMovies = async () => {
		const data = await fetchTrendingMovies()
		setTrendingMovies(data)

	}

	const getTopMovies = async () => {
		const data = await fetchTopMovies()
		setTopMovies(data)
	}

	const getDiscoverMovies = async () => {
		const data = await fetchDiscoverMovies()
		setDiscoverMovies(data)
	}

	const getTypeMovies = async () => {
		const data = await fetchTypeMovies()
		setTypeMovies(data)
	}

	// dynamic get movie
	const getSearchMovies = async () => {
		const data = await fetchSearchMovies(searchTerm)
		setResultSearch(data)
	}

	const getVideoSelectedMovies = async () => {
		if (selectedMovie !== '') {
			const data = await fetchVideoSelectedMovies(selectedMovie.id)
			setVideoSelectedMovie(data[0].key)
		}
	}

	useEffect(() => {
		// movies function calls
		getTrendingMovies()
		getTopMovies()
		getDiscoverMovies()
		// auth function calls
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	// selecting a card movie

	useEffect(() => {
		getVideoSelectedMovies()
	}, [selectedMovie]);

	// when searching a movie 

	useEffect(() => {
		// movies function calls
		getSearchMovies()
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				favorites,
				initializing,
				user,
				trendingMovies,
				topMovies,
				discoverMovies,
				searchTerm,
				resultSearch,
				selectedMovie,
				videoSelectedMovie,
				addToFavorites,
				removeFromFavorites,
				signUp,
				signOut,
				login,
				getSearchMovies,
				setResultSearch,
				setSelectedMovie,
				setSearchTerm,
				getVideoSelectedMovies,
				setVideoSelectedMovie
			}}
		>
			{children}
		</AppContext.Provider>
	);
}