import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import EmailTextField from '../components/EmailTextField';
import String from '../const/String';

const SignInScreen = () => {
  console.log(String.Join);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Screen1</Text>
      <Button title={String.Join} />
      <EmailTextField />
    </View>
  );
};

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

export default SignInScreen;
