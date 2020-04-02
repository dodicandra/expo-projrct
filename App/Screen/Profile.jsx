import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/hooks';
import axios from 'axios';

import CardProfile from '../components/CardProfile';

function Profile() {
  const [data, setData] = useState([]);
  const autContext = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get('/api/schedules');
      const result = response;
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const hadleLogout = async () => {
    autContext.logout();
  };
  return (
    <View style={{ flex: 1 }}>
      <CardProfile
        name={data.name}
        email={data.email}
        createAt={data.created_at}
      />

      <View style={styles.center}>
        <TouchableOpacity onPress={hadleLogout} style={styles.btnContainer}>
          <Text style={styles.TextBtn}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#57E1D9',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  TextBtn: {
    fontFamily: 'Viga-Regular',
    color: 'white',
    fontSize: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
