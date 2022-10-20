import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../services/api';





function Historic({ navigation, route }) {


  const [saleList, setSaleList] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('sale/list').then(({ data }) => {
      console.log(data);
      setSaleList(data);
      console.log(saleList);
    });
  }, [])

  function date(DATE){
    var dateOnly = DATE.split('T03');
    var orderDate = dateOnly[0].split('-');
    return(orderDate[2] +'/'+ orderDate[1] +'/'+ orderDate[0]);
  }


  const Item = ({ item }) => (
    <View style={[styles.item]}>

      <Text style={[styles.item_title, styles.row]}>{item.name_client}</Text>
      <Text style={[styles.item_title, styles.row]}>{date(item.date_sale)}</Text>
      <Text style={[styles.item_title, styles.row]}>R$ {item.total}</Text>
      
      <Pressable
        onPress={() => {  navigation.navigate('HistoricDetal', { trader_id: route.params.trader_id, sale_id : item.id, name_client : item.name_client, date_sale : date(item.date_sale), total: item.total }) }}
        style={styles.btn}>
        <Text style={styles.btnText}>Detalhes</Text>
      </Pressable>

    </View>


  );



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



  useEffect(() => {
    api.post('sale/list',{trader_id: route.params?.trader_id}).then(({ data }) => {
      setClientes(data);
      console.log(data);
    });
  }, [])





  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Histórico de Vendas</Text>
      </View>

      <View style={styles.viewList}>

        <View style={[styles.item]}>

          <Text style={[styles.item_title, styles.row]}>Nome</Text>
          <Text style={[styles.item_title, styles.row]}>Data</Text>
          <Text style={[styles.item_title, styles.row]}>Valor Total</Text>
          <Text style={[styles.item_title, styles.row]}></Text>

        </View>




        <FlatList
          data={clientes.sale}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

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

export default Historic;