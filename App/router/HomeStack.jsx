import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#57E1D9',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 27,
            fontFamily: 'Viga-Regular',
          },
          headerTitleAlign: 'center',
        }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
