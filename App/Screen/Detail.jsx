import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Image } from 'react-native';

function Detail() {
  return (
    <View>
      <Text style={styles.texks}>Voli Venue</Text>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/Image/volly.jpg')}
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
