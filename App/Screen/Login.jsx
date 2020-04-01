import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import MyButton from '../components/Button';
import { AuthContext } from '../context/hooks';
import * as api from '../Api';

function LoginScreen({ navigation }) {
  const { state, login, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (data) => {
    try {
      let response = await api.login(data);
      await login(response.token);
    } catch (error) {
      console.log('LOGIN', error);
      dispatch({ type: 'STOP_LOADING' });
    }
  };

  const onSubmit = () => {
    let data = {
      email: email,
      password: password,
    };

    handleLogin(data);
  };

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
        <MyButton
          disabled={state.isLoading ? true : false}
          onPress={onSubmit}
          title="LOGIN"
        />
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
