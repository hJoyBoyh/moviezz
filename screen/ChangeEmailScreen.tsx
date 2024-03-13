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

import { Title } from '../components/Title';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { Button1 } from '../components/Button1';

export function ChangeEmailScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.content}>
        <Title title="Change Email"/>
        <Form  input01={
            <InputText placeholder="Current Email : Kenny@gmail.com" editable={false}/>
        }
        input02={
            <InputText placeholder="New email"/>
        }
        input03={
            <InputText placeholder="Re-enter  new email"/>
        }
        />

        <Button1 title="Confirm"></Button1>
   
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
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    
    gap: 20,
    
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