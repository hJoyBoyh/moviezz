import axios from "axios"
import { API_BASE_URL, API_KEY } from "./manager";

// `${API_BASE_URL}/3/trending/movie/day
const TRENDING_MOVIE = `${API_BASE_URL}/3/trending/movie/day`
const TOP_MOVIE = `${API_BASE_URL}/3/movie/top_rated`
const DISCOVER_MOVIE = `${API_BASE_URL}/3/discover/movie`

const SEARCH_MOVIE = `${API_BASE_URL}/3/search/movie`
const VIDEO_SELECTED_MOVIE = (id) => `${API_BASE_URL}/3/movie/${id}/videos`
const TYPE_MOVIE = `${API_BASE_URL}/3/genre/movie/list`

const apiCall = async (endpoint, params) => {
	const options = {
		method: 'GET',
		url: endpoint,
		params: params ? params : null,
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${API_KEY}`
		}
	};
	return axios
		.request(options)
		.then(function (response) {
			//console.log(response.data.results);
			return response.data.results
		})
		.catch(function (error) {
			console.error(error);
		});
}

export const fetchTrendingMovies = async () => {
	return apiCall(TRENDING_MOVIE, null)
}

export const fetchTopMovies = async () => {
	return apiCall(TOP_MOVIE, null)
}

export const fetchDiscoverMovies = async () => {
	return apiCall(DISCOVER_MOVIE, null)
}

export const fetchSearchMovies = async (id) => {
	return apiCall(SEARCH_MOVIE,
		{ query: `${id}`, include_adult: 'false', language: 'en-US', page: '1' })
}

export const fetchVideoSelectedMovies = (id) => {
	return apiCall(VIDEO_SELECTED_MOVIE(`${id}`), null)
}