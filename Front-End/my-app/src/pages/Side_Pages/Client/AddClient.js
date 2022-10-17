import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../../../services/api';


function AddClient({ navigation, route }) {

  const traderID = route.params?.trader_id;

  function adicionarClient() {
    console.log(nameClient + '---------' + traderID);
    
    api.post('client/add',
      {
        name_client: nameClient,
        phone_client: phoneClient,
        trader_id: route.params?.trader_id,
      }).then(({ data }) => {
        Alert.alert('Cliente adicionado com sucesso!');

      })
  }

  

  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameClient, setNameClient] = useState('');
  const [phoneClient, setPhoneClient] = useState('');

  
  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Adicionar Cliente</Text>
      </View>

      <View style={styles.containerInput}>
        <View style={styles.product_textb}>
          <Text style={styles.textmodal}>Nome:</Text>
          <TextInput style={styles.textinput}
            onChangeText={newnameClient => setNameClient(newnameClient)}
            placeholder='Nome do Cliente' />
        </View>
        <View style={styles.product_textb}>
          <Text style={styles.textmodal}>Telefone</Text>
          <TextInput style={styles.textinput}
            placeholder='(XX) X XXXX-XXXX'
            onChangeText={newphoneClient => setPhoneClient(newphoneClient)} />
        </View>
        

      </View>

      <View style={styles.containerBtn}>
        <Pressable
          onPress={() => adicionarClient()}
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

export default AddClient;