import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 7,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    flexWrap: 'wrap',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Card;
