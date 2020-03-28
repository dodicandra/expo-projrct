import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import * as Icons from '@expo/vector-icons';
import Card from '../components/Card';
import CardItems from '../components/CardItems';
import CardList from '../components/CardList';
import { AuthContext } from '../context/authContext';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFpbmJlcnNhbWEuZGVtb3NhbmJlcmNvZGUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTg1Mzc1ODYwLCJleHAiOjE1ODU0MTkwNjAsIm5iZiI6MTU4NTM3NTg2MCwianRpIjoiZ0t3SXNTZWU3ZTJBUnBzMCIsInN1YiI6MTAsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.aUPlADzwEIgX4mxbtitO662r5iunO57qSgZYC9nVWNg';

function Home({ navigation }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getVanue = async () => {
      try {
        const response = await fetch(
          `https://mainbersama.demosanbercode.com/api/venues`,
          {
            method: 'GET',
            headers: {
              Authorizations: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        setData(result.venues);
      } catch (error) {
        console.log(error);
      }
    };
    getVanue();
  }, []);

  const renderItem = ({ item }) => (
    <CardList
      name={item.name}
      Open={item.open_hour}
      locations={item.location}
      image={item.thumbnail}
    />
  );

  const { setToken } = useContext(AuthContext);
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
            <CardItems onPrees={() => setToken(false)} title="Volly Ball">
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

        <TextInput style={styles.cariLokasi} placeholder="Cari Lokasi" />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
  cariLokasi: {
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingLeft: 15,
    elevation: 3,
    backgroundColor: 'white',
  },
});

export default Home;
