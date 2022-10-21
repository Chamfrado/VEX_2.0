import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Pressable, Alert, ScrollView } from 'react-native';

import { Button, Icon, Card,Layout, Modal, List, ListItem, Divider, Text } from '@ui-kitten/components';


import api from '../../services/api'



const ClientIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);



function Client({ navigation, route }) {

  const traderID = route.params?.trader_id;



  function deleteClient(ID) {
    console.log(ID);
    api.delete('client/delete', {
      data: {
        id: ID
      }
    }).then(({ data }) => {
      setVisible(false);
      navigation.navigate('UpdateAfterDelete', { trader_id: route.params.trader_id });
      console.log(data);
    });
  }

  const [clientes, setClientes] = useState([]);



  const Item = ({ item }) => (
    <ListItem
      title={item.name_client}
      key={item.id}
      onPress={() => {
        setSelectClient(item);
        setVisible(true);
      }}
      description={'Telefone: ' + item.phone_client}
      accessoryLeft={ClientIcon} />

  );
  const [visible, setVisible] = React.useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectClient, setSelectClient] = useState(null);


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

    const subs = navigation.addListener('focus', () => {
      api.post('client/list', { trader_id: route.params?.trader_id }).then(({ data }) => {
        setClientes(data);
        console.log(data);
      });
    })


  }, [])




  function deleteClient(ID) {
    console.log(ID);
    api.delete('client/delete', {
      data: {
        id: ID
      }
    }).then(({ data }) => {
      navigation.navigate('UpdateAfterDelete', { trader_id: route.params.trader_id })
      console.log(data);
    });
  }









  return (
    <Layout style={styles.container}>

      <View style={[styles.containerTitle, { alignItems: 'center', paddingBottom: 30, paddingTop: 10 }]}>
        <Text style={styles.titleText} category='h1' >Clientes</Text>
      </View>


      <View style={styles.containerBtn}>
        <Button
        size='large'
        onPress={() => navigation.navigate('AddClient', { trader_id: route.params.trader_id })}
        >
          Adicionar Cliente
        </Button>
        
      </View>

      <Text category='h2' style={[{alignSelf: 'center', padding: 20}]} >Lista de Clientes</Text>

      <List
        style={{height: 300}}
        data={clientes.clients}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        extraData={selectedId}
      />

      <Modal visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text category='h3' style={{ alignSelf: 'center' }}>Opções</Text>

          <View style={[{flexDirection:'row', padding: 30}]}>
            <Button size='large'  onPress={() => {
              setVisible(false)
              navigation.navigate('UpdateClient', { trader_id: route.params.trader_id, client_id: selectClient.id})}} >Alterar</Button>
            <Text>                      </Text>
            <Button size='large'
              onPress={() => {
                Alert.alert(
                  "Excluir Cliente",
                  "Deseja excluir o client?",
                  [
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "Cancelar"
                    },
                    { text: "Sim", onPress: () => {
                      setVisible(false);
                      deleteClient(selectClient.id);
                    } }
                  ]
                );
              }}>Deletar</Button>

          </View>
          <Button onPress={() => setVisible(false)}>
            Cacelar
          </Button>
        </Card>

      </Modal>


      

    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    fontSize: 14,
  },
  row: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRightWidth: 1
  }, btn: {
    flex: 1,
    backgroundColor: '#87CEFA',
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
    paddingBottom: 30

  }, backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});


export default Client;