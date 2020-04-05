import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Button from '../components/Button';
// import String from '../const/String';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Screen1</Text>
      {/* <Button title={String.Join} /> */}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101010',
  },
});
