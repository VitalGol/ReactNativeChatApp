import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Button from '../components/Button';
import EmailTextField from '../components/EmailTextField';
import PasswordTextField from '../components/PasswordTextField';
import DismissKeyboard from '../components/DismissKeyboard';
import String from '../const/String';
import Color from '../utils/Colors';
import Images from '../const/Images';
import Constants from '../const/Constants';
import Utility from '../utils/Utility';
// import firebase from '../firebase/Firebase';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState('');

  validateEmailAddress = () => {
    const isValidEmail = Utility.isEmailValid(email);
    return isValidEmail
      ? setEmailError('')
      : setEmailError(String.InvalidEmailAddress);
  };

  validatePasswordField = () => {
    const isValidField = Utility.isValidField(password);
    return isValidField
      ? setPasswordError('')
      : setPasswordError(String.PasswordFieldEmpty);
  };

  performAuth = () => {
    const isValidEmail = validateEmailAddress();
    const isValidPassword = validatePasswordField();
    if (isValidEmail && isValidPassword) {
      setEmailError('');
      setPasswordError('');
      registration(email, password);
    }
  };

  // registration = (email, password) => {
  //   try {
  //     setIsLoading(true);
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then((user) => {
  //         setIsLoading(false);
  //         Alert.alert('Logged In');
  //       })
  //       .catch((error) => {
  //         firebase
  //           .auth()
  //           .createUserWithEmailAndPassword(email, password)
  //           .then((user) => {
  //             setIsLoading(false);
  //             Alert.alert('Create A New User');
  //           })

  //           .catch((erroe) => {
  //             setIsLoading(false);
  //             console.log('error');
  //             Alert.alert(error);
  //           });
  //       });
  //   } catch (error) {
  //     setIsLoading(false);
  //     Alert.alert(error);
  //   }
  // };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <SafeAreaView>
            <Image style={styles.logo} source={Images.logo} />
            <EmailTextField
              term={email}
              error={emailError}
              placeHolder={String.EmailPlaceHolder}
              onTermChange={(newEmail) => {
                setEmail(newEmail);
              }}
              onValidateEmailAddress={validateEmailAddress}
            />
            <PasswordTextField
              term={password}
              error={passwordError}
              placeHolder={String.PasswordPlaceHolder}
              onTermChange={(newPassword) => {
                setPassword(newPassword);
              }}
              onValidatePasswordField={validatePasswordField}
            />
            <Button title={String.Join} />
            {/* <Button title={String.Join} onPess={} isLoading={isLoading} /> */}
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.theme,
  },
  logo: {
    alignSelf: 'center',
    margin: Constants.screenHeight * 0.04,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101010',
  },
});

export default SignInScreen;
