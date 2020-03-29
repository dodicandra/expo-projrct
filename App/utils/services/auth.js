import axios from 'axios';
import * as uri from '../constants';

export async function login(data) {
  try {
    let ress = await axios.post(uri.MASUK, data);
    console.log(ress.data);
    return ress.data;
  } catch (error) {
    console.log(error.message);
  }
}
