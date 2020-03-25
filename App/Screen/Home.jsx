import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import * as Icons from '@expo/vector-icons';
import Card from '../components/Card';
import CardItems from '../components/CardItems';
import CardList from '../components/CardList';

function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'white', flex: 1 }}
    >
      <Text style={styles.texKategori}>Kategori</Text>
      <Card>
        <CardItems title="Volly Ball">
          <Icons.FontAwesome5 name="volleyball-ball" size={30} />
        </CardItems>
        <CardItems title="Pool">
          <Icons.FontAwesome5 name="swimmer" size={30} />
        </CardItems>
        <CardItems title="Basket">
          <Icons.FontAwesome5 name="basketball-ball" size={30} />
        </CardItems>
        <CardItems title="FootBall">
          <Icons.FontAwesome5 name="football-ball" size={30} />
        </CardItems>
        <CardItems title="Bowling">
          <Icons.FontAwesome5 name="bowling-ball" size={30} />
        </CardItems>
        <CardItems title="Golf">
          <Icons.FontAwesome5 name="golf-ball" size={30} />
        </CardItems>
        <CardItems title="BaseBall">
          <Icons.FontAwesome5 name="baseball-ball" size={30} />
        </CardItems>
        <CardItems title="FootBall">
          <Icons.Ionicons name="ios-football" size={30} />
        </CardItems>
      </Card>

      <Text style={styles.textTersedia}>Tersedia</Text>

      <TextInput
        style={{
          height: 40,
          marginHorizontal: 20,
          borderRadius: 20,
          paddingLeft: 15,
          elevation: 3,
          backgroundColor: 'white',
        }}
        placeholder="Cari Lokasi"
      />

      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  texKategori: {
    fontFamily: 'Viga-Regular',
    marginTop: 60,
    marginLeft: 20,
    fontSize: 20,
  },
  textTersedia: {
    fontFamily: 'Viga-Regular',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
});

export default Home;
