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
    // let token = await AsyncStorage.getItem('token');
    // const options = {
    //   headers: {
    //     Accept: 'application/json',
    //     Authorizations: `Bearer ${token}`,
    //   },
    // };
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    let ress = axios.get('/api/venues', options);
    let result = (await ress).data;
    return result;
  } catch (error) {
    console.log('API', error.message);
  }
}

export async function bookVenue(data, id) {
  try {
    console.log(data, 'id => ', id);
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
