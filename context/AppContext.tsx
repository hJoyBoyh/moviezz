import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import signInWithEmailAndPassword from '@react-native-firebase/auth'



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
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const login = (email,password)=>{
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
    const signOut = () =>{
        auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    }

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    return (
        <AppContext.Provider value={{ initializing, user, signUp, signOut , login }} >
            {children}
        </AppContext.Provider>
    )
}