/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

export function Form(props){
    return(
<View style={styles.form}>
    {props.input01}
    {props.input02}
    {props.input03}
    {props.input04}
</View>
    );
  }


  const styles = StyleSheet.create({
    form: {
        height: 200,
        display: 'flex',
        justifyContent: 'space-evenly',
      },

  });