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
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white', flex: 1 }}
      >
        <Text style={styles.texKategori}>Kategori</Text>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Card>
            <CardItems title="Volly Ball">
              <Icons.FontAwesome5
                color="#70a1ff"
                name="volleyball-ball"
                size={30}
              />
            </CardItems>
            <CardItems title="Basket">
              <Icons.FontAwesome5
                color="#ff7f50"
                name="basketball-ball"
                size={30}
              />
            </CardItems>
            <CardItems title="SepakBola">
              <Icons.Ionicons color="#a4b0be" name="ios-football" size={30} />
            </CardItems>
            <CardItems title="Futsal">
              <Icons.Ionicons color="#2f3542" name="ios-football" size={30} />
            </CardItems>
          </Card>
        </View>

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

        <CardList onPress={() => navigation.navigate('Detail')} />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </ScrollView>
    </View>
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
