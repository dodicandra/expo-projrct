import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import MyButton from '../components/Button';
import { AuthContext } from '../context/authContext';

function LoginScreen({ navigation }) {
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    setToken(true);
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
