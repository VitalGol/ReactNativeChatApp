import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ActivityIndicatorBase,
  View,
} from 'react-native';
import Color from '../utils/Colors';

const Button = (props) => {
  const {
    title = 'Enter',
    style = {},
    textStyle = {},
    onPress,
    isLoading,
  } = props;

  const loader = () => {
    return <ActivityIndicator animating={isLoading} />;
  };

  const button = () => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.button, style]}>
      {isLoading ? loader() : button()}
    </View>
  );
  // onPress = () => {
  //   console.log('hi');
  // };
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingLeft: 50,
    paddingRight: 50,
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

export default Button;
