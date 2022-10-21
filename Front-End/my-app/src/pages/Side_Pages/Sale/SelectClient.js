import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, View, Pressable, Alert, TextInput } from 'react-native';

import { Button, Icon, Card, Modal, Layout, List, ListItem, Divider, Text } from '@ui-kitten/components';

import api from '../../../../services/api';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name_client}</Text>
  </TouchableOpacity>
);

function SelectClient({ navigation, route }) {

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00008B" : "#FFFFFF";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.post('client/list', { trader_id: route.params?.trader_id }).then(({ data }) => {
      setClientes(data);
      console.log(data);
    });
  }, [])


  return (
    <Layout style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Escolha o Cliente</Text>
      </View>

      <View style={styles.viewList}>




        <FlatList
          data={clientes.clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

      </View>

      <View style={styles.containerBtn}>
        <Button
          size='giant'
          onPress={() => navigation.navigate('SelectProduct', { trader_id: route.params.trader_id, client_id: selectedId })}>
          Selecionar
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
  containerTitle: {
  },
  viewList: {
    height: 400,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderWidth: 1,

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    flex: 1,
    paddingTop: 50,
    fontSize: 20

  },
  titleText: {
    fontSize: 30
  }, scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  }, item: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    flexWrap: 'wrap'
  },
  item_title: {
    fontSize: 15,
  },
  row: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRightWidth: 1
  }, btn: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 2,
    paddingVertical: 5,
    paddingEnd: 2,
    borderRightWidth: 1,

  }, btnText: {
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

  }
});



export default SelectClient;