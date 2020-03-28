import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
    marginVertical: 10,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    flexWrap: 'wrap',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 340,
    height: 150,
  },
});

export default Card;
