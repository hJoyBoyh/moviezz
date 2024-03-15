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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function ChangePasswordScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'height'}>
      <FontAwesome5 name='angle-left' color='#9F9F95' size={35}  onPress={()=>navigation.navigate('Settings')} style={styles.redirectionIcon} />

        <View style={styles.content}>
        <Title title="Change Password"/>
        <Form  input01={
            <InputText placeholder="Current Password:-" editable={false} hideRedirectionIcon={true}/>
        }
        input02={
            <InputText placeholder="New password" hideRedirectionIcon={true}/>
        }
        input03={
            <InputText placeholder="Re-enter new password" hideRedirectionIcon={true}/>
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
  redirectionIcon:{
    marginTop:20
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