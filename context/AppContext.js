import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import signInWithEmailAndPassword from '@react-native-firebase/auth'
import { fetchDiscoverMovies, fetchSearchMovies, fetchTopMovies, fetchTrendingMovies, fetchTypeMovies, fetchVideoSelectedMovies } from "../moviezz-api/model";



export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	//auth variables
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


	// auth functions
	const login = (email, password) => {
		auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				console.log('User & login!');
			})
			.catch(error => {
				
				console.error(error);
			});
	}

	const signUp = (email, password) => {
		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				console.log('User account created & signed in!');
			})
			.catch(error => {
				if (error.code === 'auth/email-already-in-use') {
					console.log('That email address is already in use!');
				}
				if (error.code === 'auth/invalid-email') {
					console.log('That email address is invalid!');
				}
				console.error(error);
			});
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

	// get movie functions
	const getTrendingMovies = async () => {
		const data = await fetchTrendingMovies()
		setTrendingMovies(data)
		// console.log('ajaj')
		// console.log(data);
	}

	const getTopMovies = async () => {
		const data = await fetchTopMovies()
		setTopMovies(data)
		// console.log('ajaj')
		// console.log(data);
	}

	const getDiscoverMovies = async () => {
		const data = await fetchDiscoverMovies()
		setDiscoverMovies(data)
		 
	}

	const getTypeMovies = async () => {
		const data = await fetchTypeMovies()
		setTypeMovies(data)

		//console.log(data);
	}

	// dynamic get movie
	const getSearchMovies = async () => {
		const data = await fetchSearchMovies(searchTerm)
		setResultSearch(data)

		//console.log(data);
	}

	const getVideoSelectedMovies = async () => {
		if (selectedMovie !== '') {
			const data = await fetchVideoSelectedMovies(selectedMovie.id)

			setVideoSelectedMovie(data[0].key)
			//console.log(data[0].key)
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
		<AppContext.Provider value={{ initializing, user, trendingMovies, topMovies, discoverMovies, searchTerm, resultSearch, selectedMovie, videoSelectedMovie, signUp, signOut, login, getSearchMovies, setResultSearch, setSelectedMovie, setSearchTerm, getVideoSelectedMovies, setVideoSelectedMovie }} >
			{children}
		</AppContext.Provider>
	)
}