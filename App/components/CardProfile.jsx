import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Icons from '@expo/vector-icons';
import moment from 'moment';

const CardProfile = ({ name, email, createAt }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        elevation: 3,
        flex: 1,
        maxHeight: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Text style={{ ...styles.font }}>{name}</Text>
        <Text style={{ ...styles.font }}>{email}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ ...styles.center }}>
          <Icons.FontAwesome5 name="user-circle" size={140} />
        </View>
      </View>
      <View style={{ flex: 0.3 }}>
        <Text
          style={{
            ...styles.colorDisabled,
            ...styles.font,
            paddingLeft: 10,
            fontSize: 10,
          }}
        >
          {' '}
          Terdaftar Sejak {moment(createAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Viga-Regular',
  },
  colorDisabled: {
    color: '#737272',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardProfile;
