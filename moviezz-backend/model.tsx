import axios from "axios"
import { API_BASE_URL, API_KEY } from "./manager";

const apiCall = async (endpoint,params)=>{
    const options = {
        method:'GET',
        url: endpoint,
        params: params? params:{}
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error ', error);
        return{}
        
    }
}

export const getTrendingMovie = () =>{
    return apiCall(`${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
}