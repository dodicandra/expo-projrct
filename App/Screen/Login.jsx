import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AsyncStorage,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import MyButton from '../components/Button';
import { AuthContext } from '../context/hooks';

function LoginScreen({ navigation }) {
  const { state, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('token', 'mytokens1231');
      let token = await AsyncStorage.getItem('token');
      dispatch({ type: 'SET_TOKEN', value: token });
    } catch (error) {
      console.log(error);
    }
  };

  console.warn(state);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/Image/login1.png')}
        style={styles.Image1}
      />

      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="Emaill"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry={true}
          type="password"
          style={styles.textinput}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <MyButton onPress={handleLogin} title="Login" />
        <Text>
          Tidak Punya Akun ?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{ color: 'blue' }}
          >
            Register
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

export default LoginScreen;
