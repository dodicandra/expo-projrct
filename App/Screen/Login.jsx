import React, { useContext, useState } from 'react';
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
        <Form {...formProps} style={styles.textinput} />
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
      <Button title="grt token" onPress={getToken} />
      <Button title="grt token" onPress={removeToken} />
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
    width: '80%',
  },
  Image1: {
    resizeMode: 'stretch',
  },
});

export default LoginScreen;
