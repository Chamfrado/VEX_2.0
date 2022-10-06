import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ScrollView, FlatList ,VirtualizedList,Button, Text, View , SectionList, Pressable, Modal, Alert, TextInput} from 'react-native';
import { Header } from '../components/header'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46css2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48dr3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-47t1f-bd96-145571e29d72',
    title: 'Third Item',
  },{
    id: 'bd7acbea-c1b1-46c2y-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48td3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-47r1f-bd96-145571e29d72',
    title: 'Third Item',
  },{
    id: 'bd7acbea-c1b1-46dc2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-4s8d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-4a71f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function Client ({navigation}){

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
        <Text>Lista de Cliente</Text>
        <FlatList
        style={styles.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

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
              <Text>Cadastrar Usuario</Text>
              <View style={styles.clietName}>
                <Text>Nome:</Text>
                <TextInput style={styles.textinput}   placeholder='Nome do Cliente'/>
              </View>
              <View style={styles.clietName}>
                <Text>Telefone:</Text>
                <TextInput style={styles.textinput}   placeholder='(XX) X XXXX-XXXX'/>
              </View>
              <Button
              title='Salvar'
              onPress={() => Alert.alert('Evento Salvar')}
              />
              <Pressable 
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Voltar</Text>
              </Pressable>
              
            </View>
          </View>
        </Modal>

        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>Cadastrar</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width: 150,
      height: 50,
      padding: 5,
      alignSelf: "center",
    },
    textinput:{
      idth: 200,
      height: 50,
      backgroundColor: '#fff'
    },centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
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
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
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
    list:{
        height :150,
        width:100
    }
  });

export default Client;