import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image } from 'react-native';

function Detail({ navigation, route }) {
  const { name, thumbnail, localtion, id } = route.params;
  useEffect(() => {
    const getVanueById = async () => {
      const response = await fetch(
        `https://mainbersama.demosanbercode.com/api/venues/:id`,
        {
          method: 'GET',
          headers: {
            Authorizations: `Bearer ${token}`,
          },
        }
      );
    };
  });
  return (
    <View>
      <Text style={styles.texks}>{name}</Text>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: `https://mainbersama.demosanbercode.com${thumbnail}` }}
          style={{
            width: 300,
            height: 200,
            borderRadius: 9,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texks: {
    fontFamily: 'Viga-Regular',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
});

export default Detail;
