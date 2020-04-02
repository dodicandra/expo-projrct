import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Screen/Profile';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#57E1D9' },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontSize: 27,
            fontFamily: 'Viga-Regular',
          },
          headerTitleAlign: 'center',
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
