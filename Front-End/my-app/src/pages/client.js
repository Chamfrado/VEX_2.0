import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../services/api'





const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.item_title, textColor]}>{item.name_client}</Text>
  </TouchableOpacity>
);



function Client({ navigation , route}) {

  const traderID = route.params?.trader_id;
  
  
  function addClient(){
    api.post('client/add', 
    {name_client: nameClient, 
      phone_client: phoneClient, 
      trader_id: route.params?.trader_id
    } ).then(({data}) =>{
      Alert.alert('Cliente adicionado com sucesso!');
      
    })
  }

  const [modal2Visible, setModal2Visible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [clientes, setClientes] = useState([]);

  //name_client, phone_client
  const[nameClient, setNameClient] = useState('');
  const[phoneClient, setPhoneClient] = useState('');
  

  useEffect(() => {
    api.get('client/list').then(({ data }) => {
      setClientes(data);
      console.log(data);
    });
  }, [])

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


  
  function deleteClient() {
    console.log(selectedId);
    api.delete('client/delete',{data: {
      id: selectedId
    }}).then(({ data }) => {
      Alert.alert('Produto Deletado com sucesso!')
      console.log(data);
    });
  }



  function salvarClient() {
    api.put('client/update', {
      id: selectedId,
      name_client: nameClient,
      phone_client: phoneClient,
      trader_id: route.params?.trader_id
    }).then(({ data }) => {
      Alert.alert('Produto Atualizado com sucesso!')
      console.log(data);
    });
  }









  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Clientes</Text>
      </View>


      <View style={styles.viewList}>
        <FlatList
          data={clientes.clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

      </View>


      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModal2Visible(true)}
      >
        <Text style={styles.textStyle}>Editar</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {Alert.alert(
          "Excluir Cliente",
          "Deseja excluir o produto?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Sim", onPress: () => deleteClient() }
          ]
        );}}
      >
        <Text style={styles.textStyle}>Excluir</Text>
      </Pressable>


      <Modal
        animationType=' slide '
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.title_modal}>
              <Text >Cadastrar Produto</Text>
            </View>

            <View style={styles.client_textb}>
              <Text style={styles.textmodal}>Nome:</Text>
              <TextInput style={styles.textinput}
               onChangeText={newnameCLient => setNameClient(newnameCLient)}
               placeholder='Nome do Cliente' />
            </View>
            <View style={styles.client_textb}>
              <Text style={styles.textmodal}>Telefone:</Text>
              <TextInput style={styles.textinput} 
              placeholder='(xx) x xxxx-xxxx'
              onChangeText={newphoneClient => setPhoneClient(newphoneClient)} />
            </View>
            
            <View style={styles.btnview}>
              <Pressable 
              style={[styles.button, styles.buttonClose]}
              onPress={() => addClient()} 
              >
                <Text>Adicionar</Text>

              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Voltar</Text>
              </Pressable>
            </View>


          </View>
        </View>
      </Modal>

      
      <Modal
        animationType=' slide '
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modal2Visible);
        }}
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.title_modal}>
              <Text >Cadastrar Produto</Text>
            </View>

            <View style={styles.client_textb}>
              <Text style={styles.textmodal}>Nome:</Text>
              <TextInput style={styles.textinput}
               onChangeText={newnameCLient => setNameClient(newnameCLient)}
               placeholder='Nome do Cliente' />
            </View>
            <View style={styles.client_textb}>
              <Text style={styles.textmodal}>Telefone:</Text>
              <TextInput style={styles.textinput} 
              placeholder='(xx) x xxxx-xxxx'
              onChangeText={newphoneClient => setPhoneClient(newphoneClient)} />
            </View>
            
            <View style={styles.btnview}>
              <Pressable 
              style={[styles.button, styles.buttonClose]}
              onPress={() => salvarClient()} 
              >
                <Text>Salvar</Text>

              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModal2Visible(!modal2Visible)}
              >
                <Text>Voltar</Text>
              </Pressable>
            </View>


          </View>
        </View>
      </Modal>


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
  viewList: {
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,

  },
  textinput: {
    idth: 200,
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 10

  }, centeredView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10
  },
  buttonOpen: {
    backgroundColor: "WHite",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
  list: {
    flex: 1,
    borderWidth: 1,
    borderWidth: 1,
    alignSelf: 'stretch'
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item_title: {
    fontSize: 24,
  },
  title_modal: {
    alignSelf: "center",  },
  client_textb: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    margin: 5
  },
  textmodal: {
    paddingRight: 10
  },
  btnview:{
    alignSelf: 'center'
  }
});

export default Client;