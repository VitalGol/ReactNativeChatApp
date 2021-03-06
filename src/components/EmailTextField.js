import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import Color from '../utils/Colors';
import Constants from '../const/Constants';

const EmailTextField = ({
  term,
  placeHolder,
  onTermChange,
  onValidateEmailAddress,
  error,
}) => {
  console.log(Constants.headerHeight);

  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.textFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.textField}
          placeholder={placeHolder}
          placeholderTextColor={Color.green}
          keyboardType={'email-address'}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidateEmailAddress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  textFieldView: {
    height: Constants.screenHeight * 0.06,
    width: Constants.screenWidth * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Color.black,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Color.smoke,
  },
  errorText: {
    fontSize: 12,
    color: Color.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});
export default EmailTextField;
