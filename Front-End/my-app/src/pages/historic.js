import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Alert } from 'react-native';

import { Button, Icon, Card, Modal,Layout,Spinner ,List, ListItem, Divider, Text } from '@ui-kitten/components';
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

  function date(DATE) {
    var dateOnly = DATE.split('T03');
    var orderDate = dateOnly[0].split('-');
    return (orderDate[2] + '/' + orderDate[1] + '/' + orderDate[0]);
  }


  const Item = ({ item }) => (


    <ListItem
      title={item.name_client}
      key={item.id}
      onPress={() => {
        setSelectedSale(item)
        navigation.navigate('HistoricDetal', { trader_id: route.params.trader_id, sale_id : item.id, name_client : item.name_client, date_sale : date(item.date_sale), total: item.total });
        }}
      description={'Venda Realizada em ' + date(item.date_sale) + ' no valor de R$ ' + item.total} />


  );



  const [selectedId, setSelectedId] = useState(null);
  const [selectedSale, setSelectedSale] = useState(null);
  const [visible, setVisible] = React.useState(false);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00008B" : "#87CEFA";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };



  useEffect(() => {
    api.post('sale/list', { trader_id: route.params?.trader_id }).then(({ data }) => {
      setClientes(data);
      setVisibleSpin(false);
      console.log(data);
    });
  }, [])

  const [visibleSpin, setVisibleSpin] = React.useState(true);



  return (
    <Layout style={styles.container}>
      <View style={styles.containerTitle}>
      <Text category='h2' style={[{ alignSelf: 'center', padding: 20 }]} >Histórico de Vendas</Text>
      </View>

      <View style={styles.viewList}>

        
      <Modal visible={visibleSpin}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisibleSpin(false)}>
        <Spinner />
      </Modal>

        <List
          style={{ height: 300 }}
          data={clientes.sale}
          ItemSeparatorComponent={Divider}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          extraData={selectedId}
        />






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

export default Historic;