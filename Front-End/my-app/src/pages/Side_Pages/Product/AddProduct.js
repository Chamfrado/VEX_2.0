import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../../../services/api';


function AddProduct({ navigation, route }) {

  const traderID = route.params?.trader_id;

  function adicionarProduct() {
    console.log(nameProduct + '---------' + traderID);
    
    api.post('product/add',
      {
        name_product: nameProduct,
        price_product: priceProduct,
        quantity_product: quantityProduct,
        description_product: descriptionProduct,
        trader_id: route.params?.trader_id,
      }).then(({ data }) => {
        navigation.goBack();

      })
  }

  

  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [quantityProduct, setQuantityProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');



  
  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Adicionar Produto</Text>
      </View>

      <View style={styles.containerInput}>
        <View style={styles.product_textb}>
          <Text style={styles.textmodal}>Nome:</Text>
          <TextInput style={styles.textinput}
            onChangeText={newnameProduct => setNameProduct(newnameProduct)}
            placeholder='Nome do Produto' />
        </View>
        <View style={styles.product_textb}>
          <Text style={styles.textmodal}>Preço:</Text>
          <TextInput style={styles.textinput}
            placeholder='R$000,00'
            onChangeText={newpriceProduct => setPriceProduct(newpriceProduct)} />
        </View>
        <View style={styles.product_textb}>
          <Text style={styles.textmodal}>Quantidade:</Text>
          <TextInput style={styles.textinput}
            placeholder='X'
            onChangeText={newquantiryProduct => setQuantityProduct(newquantiryProduct)} />
        </View>
        <View style={styles.product_desc}>
          <Text>Descrição:</Text>
          <TextInput style={styles.textinput}
            placeholder='Insira aqui a descrição do produto'
            onChangeText={newdescriptionProduct => setDescriptionProduct(newdescriptionProduct)} />
        </View>

      </View>

      <View style={styles.containerBtn}>
        <Pressable
          onPress={() => adicionarProduct()}
          style={styles.addBtn}>
          <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Adicionar</Text>
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
  textinput: {
    idth: 200,
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 10,
    alignSelf: 'stretch'

  },
  product_textb: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    margin: 5,
    flexWrap: 'wrap'
  },
  containerInput: {
    flex: 1,
    paddingTop: 50,
  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,
    flex: 1

  },
  containerTitle: {
    paddingBottom: 50,
    paddingTop: 50,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  addBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 20,
    marginRight: 20
  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,
    flex: 1

  }
});

export default AddProduct;