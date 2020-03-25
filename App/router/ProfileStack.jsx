import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Screen/Profile';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
