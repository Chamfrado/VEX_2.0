import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Alert, TextInput } from 'react-native';

import { Button, Icon, Card, Input, Layout, Modal, List, ListItem, Divider, Text } from '@ui-kitten/components';

import api from '../../../../services/api';


function UpdateProduct({ navigation, route }) {

  const traderID = route.params?.trader_id;

  function saveProduct() {
      console.log(route.params?.product_id + '=======' + route.params?.trader_id );
    api.put('product/update', {
      id: route.params?.product_id,
      name_product: nameProduct,
      price_product: priceProduct,
      quantity_product: quantityProduct,
      description_product: descriptionProduct,
      trader_id: route.params?.trader_id
    }).then(({ data }) => {
      Alert.alert('Produto Atualizado com sucesso!')
      navigation.goBack();
    });
  }




  

  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [quantityProduct, setQuantityProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');

  

  useEffect(() => {

    api.post('product/getById',
      {
        id: route.params?.product_id
      }).then(({ data }) => {
        console.log(data);
        setNameProduct(data.product[0].name_product);
        setDescriptionProduct(data.product[0].description_product);
        setPriceProduct(data.product[0].price_product);
        setQuantityProduct(data.product[0].quantity_product);
      })

  }, [])





  return (
    <Layout style={styles.container}>



      <View style={styles.containerTitle}>
        <Text style={styles.titleText} category='h1'>Adicionar Cliente</Text>
      </View>

      <View style={[{ paddingTop: 30, paddingBottom: 30 }]}>
        <Text style={{ paddingBottom: 30 }} category='h3' >Nome do Produto</Text>

        <View style={styles.inputCont}>
          <Input
            onChangeText={newName => setNameProduct(newName)}>{nameProduct}</Input>
        </View>
      </View>



      <View style={[{ paddingTop: 30, paddingBottom: 70 }]}>
        <Text style={{ paddingBottom: 30 }} category='h3' >Quantidade</Text>

        <View style={styles.inputCont}>
          <Input
            onChangeText={newQuantity => setQuantityProduct(newQuantity)}>{quantityProduct}</Input>
        </View>
      </View>









      <View style={styles.containerBtn}>


        <Button
          size='giant'
          onPress={() => saveProduct()}>
          Atualizar
        </Button>
      </View>



    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'

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

export default UpdateProduct;