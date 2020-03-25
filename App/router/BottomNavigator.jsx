import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import History from '../Screen/History';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#57E1D9',
        },
        showLabel: false,
        activeTintColor: 'white',
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icons.AntDesign
              style={styles.icon}
              color={color}
              name="home"
              size={25}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.container}>
              <Icons.MaterialCommunityIcons
                style={styles.icon}
                color={color}
                name="history"
                size={50}
              />
            </View>
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icons.Feather
              color={color}
              style={styles.icon}
              name="user"
              size={25}
            />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#57E1D9',
    borderRadius: 50,
    position: 'relative',
    marginBottom: 50,
    borderWidth: 6,
    borderColor: 'white',
  },
  icon: {},
});

export default BottomNavigator;
