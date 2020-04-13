import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MyButton({ onPress, title, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={
        !disabled
          ? { ...styles.container, backgroundColor: '#57E1D9' }
          : { ...styles.container, backgroundColor: '#737272' }
      }
    >
      {disabled ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#333',
    elevation: 4,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Viga-Regular',
  },
});

export default MyButton;
