import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';

export const logIn = (userData) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' });
  try {
    const response = await axios.post('/login', userData);
    const result = await response.data;
    await AsyncStorage.setItem('token', result.token);
    dispatch({ type: 'SET_USER', payload: result.token });
    return result;
  } catch (error) {
    const erros = error.response.data.message;
    dispatch({ type: 'SET_ERROR', payload: erros });
  }
};

export const register = (userDate, navigation) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' });
  try {
    const response = await axios.post('/register', userDate);
    const result = await response.data;
    Alert.alert(
      'Register success',
      result.data.name,
      [{ text: 'OK', onPress: () => navigation.navigate('Login') }],
      { cancelable: false }
    );
    dispatch({ type: 'STOP_LOADING' });
    return result;
  } catch (error) {
    const erros = error.response.data.message;
    dispatch({ type: 'SET_ERROR', payload: erros });
  }
};
