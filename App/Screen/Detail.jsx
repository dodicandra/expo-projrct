import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  Picker,
  TextInput,
} from 'react-native';
import axios from 'axios';
import * as api from '../Api';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';

function Detail({ navigation, route }) {
  const { name, thumbnail, localtion, id } = route.params;
  const [duration, setDuration] = useState(1);
  const [start, setStart] = useState(new Date().getTime());
  const [playDate, setPlayDate] = useState(new Date().getTime());
  const [totalPlayer, setPlayer] = useState('2');
  const [categoryId, setCategori] = useState(1);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  // console.warn(typeof duration);
  // console.warn(typeof moment(playDate).format('YYYY-MM-DD'));

  const bookVenue = async (data) => {
    try {
      const ressponse = await api.bookVenue(data, id);
      Alert.alert(
        'SUKSES',
        ressponse.message,
        [{ text: 'OK', onPress: () => navigation.navigate('History') }],
        { cancelable: false }
      );
      console.log('DETAIL', ressponse);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = () => {
    const mulai = moment(start).format('HH:mm:ss');
    const tgl = moment(playDate).format('YYYY-MM-DD');
    const player = parseInt(totalPlayer);

    let obj = {
      duration: duration,
      start: mulai,
      play_date: tgl,
      total_players: player,
      category_id: categoryId,
    };

    bookVenue(obj);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.texks}>{name}</Text>
      <View style={styles.alignCenter}>
        <Image
          source={{ uri: `https://mainbersama.demosanbercode.com${thumbnail}` }}
          style={styles.img}
        />
        <View style={styles.CardForm}>
          <Picker
            onValueChange={(value) => setDuration(value)}
            selectedValue={duration}
            style={styles.Picker}
            mode="dropdown"
          >
            <Picker.Item label="1 jam" value={1} />
            <Picker.Item label="2 jam" value={2} />
            <Picker.Item label="3 jam" value={3} />
          </Picker>

          <TouchableOpacity
            style={{
              ...styles.center,
              ...styles.input,
            }}
            onPress={() => setShowTime(true)}
          >
            <Text>Silahkan Pilih Jam bermain anda</Text>
            <Text>{moment(start).format('HH:mm:ss')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.center,
              ...styles.input,
            }}
            onPress={() => setShowDate(true)}
          >
            <Text>Silahkan Pilih Tanggal bermain anda</Text>
            <Text>{moment(playDate).format('YYYY-MM-DD')}</Text>
          </TouchableOpacity>
          <TextInput
            style={{ elevation: 3, backgroundColor: 'white', padding: 10 }}
            placeholder="juamlah pemain"
            keyboardType="number-pad"
            onChangeText={(text) => setPlayer(text)}
          />
          <Picker
            onValueChange={(value) => setCategori(value)}
            selectedValue={categoryId}
            style={styles.Picker}
            mode="dropdown"
          >
            <Picker.Item label="Futsal" value={1} />
            <Picker.Item label="Sepak Bola" value={2} />
            <Picker.Item label="Basket" value={3} />
            <Picker.Item label="Bola Voli" value={4} />
          </Picker>
          {/* // modal time picker */}
          <DateTimePickerModal
            isVisible={showTime}
            value={start}
            mode="time"
            onCancel={() => setShowTime(false)}
            onConfirm={(date) => {
              setStart(date);
              setShowTime(false);
            }}
          />
          <DateTimePickerModal
            isVisible={showDate}
            value={playDate}
            mode="date"
            onCancel={() => setShowDate(false)}
            onConfirm={(date) => {
              setPlayDate(date);
              setShowDate(false);
            }}
          />
          {/* <Button title="Book Now" onPress={onSubmit} /> */}
          <View style={{ ...styles.center, paddingTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#57E1D9',
                ...styles.center,
                paddingVertical: 10,
                width: 100,
                borderRadius: 50,
                elevation: 3,
              }}
              onPress={onSubmit}
            >
              <Text>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  texks: {
    fontFamily: 'Viga-Regular',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  Picker: {
    width: '60%',
    height: 40,
    backgroundColor: 'white',
    elevation: 3,
  },
  center: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 3,
  },
  CardForm: {
    width: '90%',
    height: 300,
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 9,
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default Detail;
