import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Color from '../utils/Colors';

const Button = (props) => {
  const {title = 'Enter', style = {}, testSte = (yle = {}), onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>

   <Text style={[styles.text, style]}>{title}</Text>
		</TouchableOpacity>

};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: Color.green,
    shadowColor: Color.green,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Color.white,
  },
});
