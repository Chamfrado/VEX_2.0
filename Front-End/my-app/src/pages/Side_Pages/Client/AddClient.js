import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Pressable, Alert, TextInput } from 'react-native';

import { Button, Icon, Card, Input, Layout, Modal, List, ListItem, Divider, Text } from '@ui-kitten/components';

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
        navigation.navigate('Client', { trader_id: route.params.trader_id })

      })
  }



  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameClient, setNameClient] = useState('');
  const [phoneClient, setPhoneClient] = useState('');


  return (
    <Layout style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText} category='h1'>Adicionar Cliente</Text>
      </View>

      <View style={[{ paddingTop: 30, paddingBottom: 30 }]}>
        <Text style={{ paddingBottom: 30}} category='h3' >Nome do Cliente</Text>

        <View style={styles.inputCont}>
          <Input
            placeholder='Insira aqui o nome'
            onChangeText={newnameClient => setNameClient(newnameClient)} />
        </View>
      </View>



      <View style={[{ paddingTop: 30, paddingBottom: 70 }]}>
        <Text style={{ paddingBottom: 30}} category='h3' >Telefone do Cliente</Text>

        <View style={styles.inputCont}>
          <Input
            placeholder='Insira aqui o nome'
            onChangeText={newphoneClient => setPhoneClient(newphoneClient)} />
        </View>
      </View>









      <View style={styles.containerBtn}>
        

        <Button
        size='giant'
        onPress={() => adicionarClient() }>
        Adicionar
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
  containerInput: {
    flex: 1,
    paddingTop: 50,
  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,
    flex: 1,
    paddingTop: 30

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