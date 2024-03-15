/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';

import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ImageAuth } from '../components/ImageAuth';
import { Title } from '../components/Title';
import { Button1 } from '../components/Button1';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { AppContext } from '../context/AppContext';
import { getTrendingMovie } from '../moviezz-backend/model';

export function LoginScreen({ navigation }) {
  const { login} = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.content}>

          <ImageAuth source={require('../assets/loginImg.png')} ></ImageAuth>

          <Title title='Login'></Title>
         


          <Form
            input01={<InputText placeholder='Email' value={email} onChangeText={email=> setEmail(email)} /*hideRedirectionIcon={true}*/ onPress={()=> console.log(getTrendingMovie())}/> }
            input02={<InputText placeholder='Password' secureTextEntry={true} value={password} onChangeText={password=> setPassword(password)} hideRedirectionIcon={true}/>}
          />

          <Button1 title='Login' onPress={() => login(email, password)}></Button1>

          <View style={styles.textContainer}>
            <Text style={styles.text}>New to the app ?</Text>
            <Text style={styles.textNavigation} onPress={() => navigation.navigate('Register')}>Register</Text>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({


  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#292928'
  },
  content: {
    display: 'flex',
    gap: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#292928'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  text: {
    color: '#ffffff'
  },
  textNavigation: {
    color: '#d1c901'
  },


});