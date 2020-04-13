import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MyButton from '../components/Button';
import { register } from '../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function RegisterScreen({ navigation }) {
  const authReducer = useSelector((state) => state.auth);
  const { isLoding, error } = authReducer;
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const data = {
      name: name,
      password: password,
      email: email,
    };
    dispatch(register(data, navigation));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../../assets/Image/login1.png')}
          style={styles.Image1}
        />

        <View style={styles.container}>
          {error ? <Text>{error}</Text> : null}
          <TextInput
            style={styles.textinput}
            placeholder="Emaill"
            onChangeText={(teks) => setEmail(teks)}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Name"
            onChangeText={(teks) => setName(teks)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.textinput}
            placeholder="Password"
            onChangeText={(teks) => setPassword(teks)}
          />
          <MyButton
            disabled={isLoding}
            title="Register"
            onPress={handleRegister}
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

export default RegisterScreen;
