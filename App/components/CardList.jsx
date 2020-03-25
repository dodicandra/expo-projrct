import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function CardList() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Image/volly.jpg')}
        style={styles.Image}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.Header}>Volly Venue</Text>
        <Text style={{ marginLeft: 10 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores
          aliquam architecto magnam dolore quidem eaque
        </Text>
        <Text style={styles.Price}>100.000 / jam</Text>
      </View>
    </View>
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
