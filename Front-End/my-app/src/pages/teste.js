import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../services/api'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name_client}</Text>
  </TouchableOpacity>
);


function Teste({ navigation, route }) {

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00008B" : "#87CEFA";
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
    api.get('client/list').then(({ data }) => {
      setClientes(data);
      console.log(data);
    });
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Escolha o Cliente</Text>
      </View>

      <View style={styles.viewList}>

        <View style={[styles.item, {backgroundColor:'#87CEFA'}]}>

          <Text style={[styles.item_title, styles.row,{fontSize: 20}]}>Nome</Text>

        </View>




        <FlatList
          data={clientes.clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

      </View>

      <View style={styles.containerBtn}>
        <Pressable
          onPress={() => navigation.navigate('AddClient', { trader_id: route.params.trader_id })}
          style={styles.addBtn}>
          <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Selecionar</Text>
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
  addBtn:{
    alignSelf: 'stretch',
      backgroundColor: '#111',
      borderTopLeftRadius: 10,
      borderBottomEndRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      marginLeft:20,
      marginRight:20
  },
  containerBtn: {
    alignSelf:'stretch',
    marginLeft: 100,
    marginRight: 100,

  }
});

export default Teste;