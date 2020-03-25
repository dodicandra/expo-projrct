import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function CardItems({ children, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content}>{children}</TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 9,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 7,
    marginVertical: 5,
    width: 50,
    height: 50,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    bottom: -15,
  },
});

export default CardItems;
