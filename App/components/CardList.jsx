import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function CardList({ onPress, image, name, locations, Open }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: `https://mainbersama.demosanbercode.com${image}` }}
          style={styles.Image}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.Header}>{name}</Text>
          <Text style={{ marginLeft: 10 }}>{locations}</Text>
          <Text style={styles.Price}>open {Open}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
    overflow: 'hidden',
    marginVertical: 10,
  },
  Image: { resizeMode: 'stretch', width: 170, height: 100 },
  Header: {
    textAlign: 'center',
    fontFamily: 'Viga-Regular',
    fontSize: 20,
  },
  Price: {
    position: 'relative',
    fontSize: 10,
    marginLeft: 90,
    marginTop: 10,
  },
});

export default CardList;
