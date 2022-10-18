import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView, FlatList, VirtualizedList, Button, Text, View, SectionList, Pressable, Modal, Alert, TextInput } from 'react-native';
import { Header } from '../components/header'

const DATA = [
  {
    id: "6",
    name_product: "First Item",
    price_product: "35",
    quantity_product: "2"
  }
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={[styles.item_title, styles.row]}>{item.name_product}</Text>
    <Text style={[styles.item_title, styles.row]}>{item.quantity_product}</Text>
    <Text style={[styles.item_title, styles.row]}>R$ {item.price_product}</Text>
    <Pressable
      onPress={() => Alert.alert('Excluir da lista')}
      style={styles.btn}>
      <Text style={styles.btnText}>Deletar</Text>
    </Pressable>
  </View>
);


function Sale({ navigation, router }) {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [productList, setProductList] = useState([]);


  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Realizar Uma Venda</Text>
      </View>
      <View style={styles.productContainer}>
        <Pressable
          onPress={() => Alert.alert('pesquisa produto')}
        >
          <Text>Pesquisar Produto</Text>
        </Pressable>

        <View style={styles.productContainerRow}>
          <Text> Nome do Produto: </Text>
          <Text> ... </Text>
        </View>

        <View style={styles.productContainerRow}>
          <Text> Quantidade: </Text>
          <TextInput placeholder=' X ' />
        </View>

        <View style={styles.productContainerRow}>
          <Text> Preço: R$ </Text>
          <TextInput placeholder=' XXX,XX ' />
        </View>


      </View>



      <View style={styles.productListContainer}>
        <View style={[styles.item]}>

          <Text style={[styles.item_title, styles.row]}>Produto</Text>
          <Text style={[styles.item_title, styles.row]}>Quantidade</Text>
          <Text style={[styles.item_title, styles.row]}>Preço</Text>
          <Text style={[styles.item_title, styles.row]}>Excluir</Text>

        </View>




        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.clientContainer}>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#87CEFA'
  },
  titleText: {
    fontSize: 30
  },
  productContainer: {
    flex: 1,
    paddingTop: 50
  },
  productContainerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  productListContainer:{
    flex: 1
  }, item: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    flexWrap: 'wrap'
  },
  item_title: {
    fontSize: 14,
  },
  row: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRightWidth: 1
  }, btn: {
    flex: 1,
    backgroundColor: '#87CEFA',
    paddingHorizontal: 2,
    paddingVertical: 5,
    paddingEnd: 2,
    borderRightWidth: 1,

  }, btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
});

export default Sale;