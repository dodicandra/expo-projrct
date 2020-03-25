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
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
