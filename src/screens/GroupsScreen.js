import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GroupsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups Screen</Text>
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

export default GroupsScreen;
