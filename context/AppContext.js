import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { fetchDiscoverMovies, fetchSearchMovies, fetchTopMovies, fetchTrendingMovies, fetchTypeMovies, fetchVideoSelectedMovies } from "../moviezz-api/model";
import { Alert } from "react-native";
import Snackbar from 'react-native-snackbar';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// auth variables-------------------------------------------------------
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	// movies variables------------------------------------------------------------
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [trendingMoviesPage, setTrendingMoviesPage] = useState(1)
	const [topMovies, setTopMovies] = useState([]);
	const [topMoviesPage, setTopMoviesPage] = useState(1)
	const [discoverMovies, setDiscoverMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [resultSearch, setResultSearch] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState('')
	const [videoSelectedMovie, setVideoSelectedMovie] = useState('')
	const [favorites, setFavorites] = useState([]);

	// auth functions-------------------------------------------------------------------
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
				.then(() => {})
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
					console.log(error)
				});
		}
	}

	const  signUp =  async (email, password,username) => {
		if (isEmpty(email) === true) {
			Alert.alert('The email is empty. Enter your email')
		}
		else if (isEmpty(password) === true) {
			Alert.alert('The password is empty. Enter your email')
		}else if (isEmpty(username) === true) {
			Alert.alert('The username is empty. Enter your email')
		}
		else if (isEmpty(password) === false && isEmpty(email) === false && isEmpty(username) === false) {

			 await auth()
				.createUserWithEmailAndPassword(email, password)
				
				.then(() => {
					console.log('User account created & signed in!');
					const update = {
						displayName: username,
					  };

					  auth().currentUser.updateProfile(update);
					  
				})
				.catch(error => {
					if (error.code === 'auth/email-already-in-use') {
						Alert.alert('That email address is already in use!');
					}
					if (error.code === 'auth/invalid-email') {
						Alert.alert('That email address is invalid!');
					}
					if (error.code === 'auth/weak-password') {
						Alert.alert('The password is too weak');
					}
					console.log(error)
				});
		}
	}
	const signOut = () => {
		auth()
			.signOut()
			.then(() => console.log('User signed out!'));
	}

	const updatePassword = (Email) => {
		auth().sendPasswordResetEmail(Email)
			.then(function () {
				Alert.alert('Link Send. Please check your email...')
			}).catch(function (e) {
				console.log(e)
			})
	}

	const updateUserName = (userName) => {
		const update = {
			displayName: userName,
		  };

		  auth().currentUser.updateProfile(update);
		  Alert.alert('The username has been update reload')
	}
	function onAuthStateChanged(user) {
		setUser(user);
		
		if (initializing) setInitializing(false);
	}

	// movies functions-----------------------------------------------------
	const addToFavorites = async (movie) => {
		const updatedFavorites = [...favorites, movie];
		await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

		Snackbar.show({
			text: 'Favourites modified',
			duration: Snackbar.LENGTH_SHORT,
			backgroundColor: '#fff',
			textColor: 'black',
		});

		setFavorites(updatedFavorites);
	};

	const removeFromFavorites = async (movieId) => {
		const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
		await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

		Snackbar.show({
			text: 'Favourites modified',
			duration: Snackbar.LENGTH_SHORT,
			backgroundColor: '#fff',
			textColor: 'black',
		});

		setFavorites(updatedFavorites);
	};

	const loadFavorites = async () => {
		const favoritesData = await AsyncStorage.getItem('favorites');
		if (favoritesData) {
			setFavorites(JSON.parse(favoritesData));
		}
	};


	const getTrendingMovies = async (page) => {
		const data = await fetchTrendingMovies(page)
		setTrendingMovies(data)

	}

	const getTopMovies = async (page) => {
		const data = await fetchTopMovies(page)
		setTopMovies(data)
	}

	const getDiscoverMovies = async () => {
		const data = await fetchDiscoverMovies()
		setDiscoverMovies(data)
	}

	// search movie -----------------
	const getSearchMovies = async () => {
		const data = await fetchSearchMovies(searchTerm)
		setResultSearch(data)
	}
//  yt video of the movie -----------------
	const getVideoSelectedMovies = async () => {
		if (selectedMovie !== '') {
			const data = await fetchVideoSelectedMovies(selectedMovie.id)
			setVideoSelectedMovie(data[0].key)
		}
	}
	// redirection when clicking on a card
	const handleCardRedirection = (item,navigation) => {
		setSelectedMovie(item);
		getVideoSelectedMovies();
		navigation.navigate('SelectedMovie');
		console.log(selectedMovie.id);
		console.log(videoSelectedMovie);
	};

	useEffect(() => {
		getTrendingMovies(trendingMoviesPage)
		getTopMovies(topMoviesPage)
		getDiscoverMovies()
		loadFavorites();
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
				trendingMoviesPage,
				topMovies,
				topMoviesPage,
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
				updatePassword,
				getSearchMovies,
				updateUserName,
				setResultSearch,
				setSelectedMovie,
				setSearchTerm,
				setTrendingMoviesPage,
				setTopMoviesPage,
				getVideoSelectedMovies,
				getTrendingMovies,
				getTopMovies,
				setVideoSelectedMovie,
				handleCardRedirection
			}}
		>
			{children}
		</AppContext.Provider>
	);
}