/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ImageAuth } from '../components/ImageAuth';
import { Title } from '../components/Title';
import { Button1 } from '../components/Button1';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';

export function LoginScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.content}>

          <ImageAuth source={require('../assets/loginImg.png')} ></ImageAuth>

          <Title title='Login'></Title>


          <Form
            input01={<InputText placeholder='Email'/>}
            input02={<InputText placeholder='Password' secureTextEntry={true}/>}
          />

          <Button1 title='Login' onPress={() => navigation.navigate('Register')}></Button1>

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