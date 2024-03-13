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
import { InputText } from '../components/InputText';
import { NavigationContainer } from '@react-navigation/native';

export function RegisterScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.content}>

          <View>
            <Image source={require('../assets/RegisterImg.png')} style={styles.registerImg}></Image>
          </View>
          <View>
            <Text style={styles.title}>Register</Text>
          </View>
          <View style={styles.form}>
            <InputText placeholder="Username"></InputText>
            <InputText placeholder="Email"></InputText>
            <InputText placeholder="Password" secureTextEntry={true}></InputText>
          </View>
          <View>
            <Pressable style={styles.button} >
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Already have an account ?</Text>
            <Text style={styles.textNavigation} onPress={() => navigation.navigate('Login')}>Login</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },

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
  form: {
    height: 200,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  registerImg: {
    height: 200,
    width: 200,
    marginTop: 20,
    borderRadius: 15,

  },
  title: {
    fontSize: 50,
    color: 'white'
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
  input: {
    color: 'white',
    width: 350,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  button: {
    height: 60,
    width: 310,

    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#d1c800',
    borderRadius: 20

  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',

    textAlign: 'center'
  }


});