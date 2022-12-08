import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Alert, TextInput } from 'react-native';

import { Button, Icon, Card, Input, Layout, Modal, List, ListItem, Divider, Text } from '@ui-kitten/components';

import api from '../../../../services/api';


function UpdateClient({ navigation, route }) {

  function saveClient() {
    console.log(route.params?.product_id + '=======' + route.params?.trader_id);
    api.put('client/update', {
      id: route.params?.client_id,
      name_client: nameClient,
      phone_client: phoneClient,
      trader_id: route.params?.trader_id
    }).then(({ data }) => {
      Alert.alert('Cliente Atualizado com sucesso!')
      navigation.navigate('Client', { trader_id: route.params.trader_id })
    });
  }







  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameClient, setNameClient] = useState('');
  const [phoneClient, setPhoneClient] = useState('');



  useEffect(() => {
    console.log(route.params?.client_id);
    api.post('client/getById',
      {
        id: route.params?.client_id
      }).then(({ data }) => {
        console.log(data);
        setNameClient(data.client[0].name_client);
        setPhoneClient(data.client[0].phone_client);
      })

  }, [])





  return (

    <Layout style={styles.container}>



      <View style={styles.containerTitle}>
        <Text style={styles.titleText} category='h1'>Atualizar Cliente</Text>
      </View>

      <View style={[{ paddingTop: 30, paddingBottom: 30 }]}>
        <Text style={{ paddingBottom: 30 }} category='h3' >Nome do Cliente</Text>

        <View style={styles.inputCont}>
          <Input
            onChangeText={newnameClient => setNameClient(newnameClient)}>{nameClient}</Input>
        </View>
      </View>



      <View style={[{ paddingTop: 30, paddingBottom: 70 }]}>
        <Text style={{ paddingBottom: 30 }} category='h3' >Telefone do Cliente</Text>

        <View style={styles.inputCont}>
          <Input
            onChangeText={newphoneClient => setPhoneClient(newphoneClient)}>{phoneClient}</Input>
        </View>
      </View>









      <View style={styles.containerBtn}>


        <Button
          size='giant'
          onPress={() => saveClient()}>
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


export default UpdateClient;