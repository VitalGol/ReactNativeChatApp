import * as React from 'react';
import SignInScreen from '../screens/SignInScreen';
import GroupsScreen from '../screens/GroupsScreen';
import ChatScreen from '../screens/ChatScreen';
import AddGroupScreen from '../screens/AddGroupScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';

const Stack = createStackNavigator();

function MyStack(props) {
  // let props.initialRouteName = 'one';
  // console.log(options);

  return (
    <Stack.Navigator name="chat">
      <Stack.Screen
        name="Sign"
        component={SignInScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'green',
          style: styles.head,
        }}
      />
      <Stack.Screen
        name="Groups Screen"
        component={GroupsScreen}
        options={{title: 'Group'}}
      />
      <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />
      <Stack.Screen
        name="Add Group Screen"
        component={AddGroupScreen}
        options={{title: 'Add Group'}}
      />
    </Stack.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'yellow',
  },
});
