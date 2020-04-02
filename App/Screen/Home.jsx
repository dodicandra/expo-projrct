import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  SafeAreaView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import * as Icons from '@expo/vector-icons';
import Card from '../components/Card';
import CardItems from '../components/CardItems';
import CardList from '../components/CardList';
import { AuthContext, DataContext } from '../context/hooks';
import axios from 'axios';
import { AppLoading } from 'expo';

function Home({ navigation }) {
  const dataContext = useContext(DataContext);
  const autContext = useContext(AuthContext);
  const { isLoading, data } = dataContext.state;
  const goToDetail = (item) => {
    navigation.navigate('Detail', item);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    dataContext.dispatch({ type: 'SET_LOADING' }); // buat set loading
    try {
      const response = await axios.get('/api/venues');
      dataContext.dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <CardList
      onPress={() => goToDetail(item)}
      name={item.name}
      Open={item.open_hour}
      locations={item.location}
      image={item.thumbnail}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <CardItems title="Voli">
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#57E1D9" />
        ) : (
          <FlatList
            data={data.venues}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            disableVirtualization={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texKategori: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Viga-Regular',
  },
  textTersedia: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Viga-Regular',
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
