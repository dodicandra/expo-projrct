import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image } from 'react-native';
import MyButton from '../components/Button';
import { AuthContext } from '../context/hooks';
import * as api from '../Api';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RegisterScreen({ navigation }) {
  const { state, login, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const hadleRegister = async (data) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      let response = await api.register(data);
      dispatch({ type: 'STOP_LOADING' });
      dispatch({ type: 'CLEAR_ERROR' });
      Alert.alert(
        'Register success',
        response.data.name,
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }],
        { cancelable: false }
      );
    } catch (error) {
      console.log('REGISTER', error.message);
      dispatch({
        type: 'SET_ERROR',
        payload: 'password harus 6 karakter dan email tidak valid',
      });
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
        {state.errors ? (
          <Text style={styles.errorMesage}>{state.errors}</Text>
        ) : null}
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
        <TouchableOpacity>
          <Text>
            Sudah Punya Akun ?{' '}
            <Text
              onPress={() => {
                navigation.goBack();
                dispatch({ type: 'CLEAR_ERROR' });
              }}
              style={{ color: 'blue' }}
            >
              Login
            </Text>{' '}
          </Text>
        </TouchableOpacity>
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
  errorMesage: {
    color: 'red',
    fontSize: 10,
  },
});

export default RegisterScreen;
