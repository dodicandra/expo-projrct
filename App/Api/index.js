import axios from 'axios';
import { AsyncStorage } from 'react-native';

export async function login(data) {
  try {
    let ress = await axios.post('/api/login', data);
    return ress.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function register(data) {
  try {
    let ress = await axios.post('/api/register', data);
    console.log(ress);
    return ress.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getVenue() {
  try {
    let ress = axios.get('/api/venues');
    return (await ress).data;
  } catch (error) {
    console.log('API', error.message);
  }
}

export async function bookVenue(data, id) {
  try {
    let ress = await axios.post(`/api/venues/${id}/book`, data);
    return ress.data;
  } catch (error) {
    console.log('Eror=>', error.message);
  }
}

const setOtorisasiHeader = async (token) => {
  const FBIdToken = `Bearer ${token}`;
  await AsyncStorage.setItem('token', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
