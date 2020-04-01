import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image } from 'react-native';
import MyButton from '../components/Button';
import { AuthContext } from '../context/hooks';
import * as api from '../Api';

function RegisterScreen({ navigation }) {
  const { state, login, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  const hadleRegister = async (data) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      let response = await api.register(data);
      dispatch({ type: 'STOP_LOADING' });
      Alert.alert(
        'Register success',
        response.data.name,
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    let data = {
      email: email,
      name: name,
      password: password,
    };

    hadleRegister(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/Image/login1.png')}
        style={styles.Image1}
      />

      <View style={styles.container}>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          style={styles.textinput}
          placeholder="Emaill"
        />
        <TextInput
          onChangeText={(name) => setName(name)}
          style={styles.textinput}
          placeholder="name"
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          style={styles.textinput}
          placeholder="Password"
        />
        <MyButton
          disabled={state.isLoading ? true : false}
          title="Register"
          onPress={onSubmit}
        />
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
