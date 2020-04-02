import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '../Screen/History';

const Stack = createStackNavigator();

const History = () => {
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
        name="History"
        component={HistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default History;
