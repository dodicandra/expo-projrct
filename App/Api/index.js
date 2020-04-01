import axios from 'axios';

export async function login(data) {
  try {
    let ress = await axios.post('/api/login', data);
    return ress.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getVenue() {
  try {
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    let ress = axios.get('/api/venues', options);
    let result = (await ress).data;
    return result;
  } catch (error) {
    console.log('API', error.message);
  }
}
