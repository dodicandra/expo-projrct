import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import MyButton from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../redux/actions/authActions';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const stateReducer = useSelector((state) => state.auth);
  const { isLoading } = stateReducer;
  const dispatch = useDispatch();

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(logIn(data));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <MyButton disabled={isLoading} onPress={handleLogin} title="Login" />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>
              Tidak Punya Akun ? <Text style={{ color: 'blue' }}>Register</Text>{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/Image/login2.png')}
          style={styles.Image1}
        />
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 18,
  },
  Image1: {
    resizeMode: 'stretch',
  },
});

export default LoginScreen;
