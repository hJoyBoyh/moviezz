import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";



export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    /*
    const [isLoading,setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState('');
    

    const signIn = async () =>{
        setIsLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth,email,password)
        } catch (error) {
            
        }
    }

    const login = ()=>{
        setIsLoading(true)
        setUserToken('iosdj');
        AsyncStorage.setItem('userToken', 'iosdj')
        setIsLoading(false);
        
    }
    const logout = ()=>{
        setIsLoading(true);
        setUserToken('');
        AsyncStorage.removeItem('userToken')
        setIsLoading(false);
        
    }
   
    const isLoggedIn = async()=>{
        try {
           setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
            setIsLoading(false);
        } catch (error) {
            console.log(`is logged in error ${error}`)
        }
       
    }
    useEffect(()=>{
        isLoggedIn()
    },[])
   

    return(
        <AppContext.Provider value={{login,logout,isLoading, userToken}} >
            {children}
        </AppContext.Provider>
    )
    */

    


   
    return (
        <AppContext.Provider value={{}} >
            {children}
        </AppContext.Provider>
    )
}