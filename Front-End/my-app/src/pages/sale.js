import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView, FlatList, VirtualizedList, Button, Text, View, SectionList, Pressable, Modal, Alert, TextInput } from 'react-native';
import { Header } from '../components/header'


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


function Sale({ navigation, route }) {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  //Constantes de dados
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState([{ "description_product": "", "id": 0, "name_product": "", "price_product": 0, "quantity_product": 0, "trader_id": route.params?.trader_id }]);
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');




  //MODALS
  const [modalProductVisible, setModalProductVisible] = useState(false);
  const [modalClientVisible, setModalClientVisible] = useState(false);





  //Inicialização
  useEffect(() => {
    if (route.params?.product_id === '') {
      console.log(product);
    } else {
      api.post('product/getById',
        {
          id: route.params?.product_id
        }).then(({ data }) => {
          setProduct(data.product[0]);
        })
    }
  }, [])



  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Realizar Uma Venda</Text>
      </View>
      <View style={styles.productContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('pesquisa produto')}>
          <Text style={styles.btnText}>Pesquisar Produto</Text>
        </Pressable>

        <View style={styles.productContainerRow}>
          <Text style={styles.defaultItn} > Nome do Produto: {product[0].name_product} </Text>
        </View>

        <View style={styles.productContainerRow}>
          <Text style={styles.defaultItn} > Quantidade: </Text>
          <TextInput placeholder=' X '
            style={styles.defaultItn}
            onChange={() => newproductQuantity => setProductQuantity(newproductQuantity)} />
        </View>

        <View style={styles.productContainerRow}>
          <Text style={styles.defaultItn}> Preço: R$ </Text>
          <TextInput placeholder=' XXX,XX '
            style={styles.defaultItn}
            onChange={() => newproductPrice => setProductPrice(newproductPrice)} />
        </View>

        <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('pesquisa produto')}>
          <Text style={styles.btnText}>Adicionar</Text>
        </Pressable>



      </View>



      <View style={styles.productListContainer}>
        <View style={[styles.item]}>

          <Text style={[styles.item_title, styles.row]}>Produto</Text>
          <Text style={[styles.item_title, styles.row]}>Quantidade</Text>
          <Text style={[styles.item_title, styles.row]}>Preço</Text>
          <Text style={[styles.item_title, styles.row]}></Text>

        </View>




        <FlatList
          data={productList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.clientContainer}>
      <Pressable
          style={styles.btn}
          onPress={() => Alert.alert('pesquisa produto')}>
          <Text style={styles.btnText}>Pesquisar Cliente</Text>
      </Pressable>

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
    paddingTop: 50,
    justifyContent: 'space-evenly'
  },
  productContainerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  productListContainer: {
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderWidth: 1,
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
    borderRightWidth: 1,
  }, btn: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 20,
    marginRight: 20

  }, btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  clientContainer: {
    flex: 1,
    paddingTop: 10
  },
  defaultItn: {
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default Sale;