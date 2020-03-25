import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image } from 'react-native';
import MyButton from '../components/Button';

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/Image/login1.png')}
        style={styles.Image1}
      />

      <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder="Emaill" />
        <TextInput style={styles.textinput} placeholder="Password" />
        <MyButton title="Register" onPress={() => Alert.alert('halo')} />
        <Text>
          Sudah Punya Akun ?{' '}
          <Text onPress={() => navigation.goBack()} style={{ color: 'blue' }}>
            Login
          </Text>{' '}
        </Text>
      </View>
      <Image
        source={require('../../assets/Image/login2.png')}
        style={styles.Image1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: 250,
    height: 40,
    borderRadius: 50,
    paddingLeft: 20,
    marginVertical: 10,
    shadowColor: '#333',
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  Image1: {
    resizeMode: 'stretch',
  },
});

export default RegisterScreen;
