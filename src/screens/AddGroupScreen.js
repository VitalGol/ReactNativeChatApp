import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AddGroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddGroup Screen</Text>
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

export default AddGroupScreen;
