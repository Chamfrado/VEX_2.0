import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ScrollView, FlatList ,VirtualizedList,Button, Text, View , SectionList, Pressable, Modal, Alert, TextInput} from 'react-native';
import { Header } from '../components/header'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46cdsadss2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48dasdr3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-4oii7t1f-bd96-145571e29d72',
    title: '3 Item',
  },{
    id: 'bd7acbea-c1b1-ui46c2y-aed5-3ad53abb28ba',
    title: '4 Item',
  },
  {
    id: '3ac68afc-c605-ty48td3-a4f8-fbd91aa97f63',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-47rwr1f-bd96-145571e29d72',
    title: '6 Item',
  },{
    id: 'bd7acbea-c1b1-46drqc2-aed5-3ad53abb28ba',
    title: '7 Item',
  },
  {
    id: '3ac68afc-c605-4s8dsawd3-a4f8-fbd91aa97f63',
    title: '8 Item',
  },
  {
    id: '58694a0f-3da1-4a7dsa1f-bd96-145571e29d72',
    title: '11 Item',
  },{
    id: '58694a0f-3da1-4dsafwa71f-bd96-145571e29d72',
    title: '12 Item',
  },{
    id: '58694a0f-3da1-4fqaa71f-bd96-145571e29d72',
    title: '13 Item',
  },{
    id: '58694a0f-dsa3da1-4a71f-bd96-145571e29d72',
    title: '14 Item',
  },{
    id: '58694a0f-3da1-dsa4a71f-bd96-145571e29d72',
    title: '165 Item',
  },{
    id: '58694a0f-3da1-4a71f-bd96-1455da71e29d72',
    title: '16 Item',
  },{
    id: '58694a0f-3da1-4a71f-bd96-1455dsa71e29d72',
    title: '17 Item',
  },{
    id: '58694a0f-3da1-4a71f-bd96-145571e29d72',
    title: '18 Item',
  },{
    id: '58694dsaa0f-3da1-4a71f-bd96-145571e29d72',
    title: '19 Item',
  },{
    id: '58694a0f-3da1-4dsaa71f-bd96-145571e29d72',
    title: '20 Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function Product ({navigation}){

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
        <Text>Lista de Producte</Text>
        
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>Cadastrar</Text>
        </Pressable>

      <View style={styles.viewList}>
        <FlatList
        style={styles.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

      </View>
        
        

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
              <Text>Cadastrar Produto</Text>
              <View style={styles.clietName}>
                <Text>Nome:</Text>
                <TextInput style={styles.textinput}   placeholder='Nome do Producto'/>
              </View>
              <View style={styles.clietName}>
                <Text>Preço:</Text>
                <TextInput style={styles.textinput}   placeholder='R$000,00'/>
              </View>
              <View style={styles.clietName}>
                <Text>Quantidade:</Text>
                <TextInput style={styles.textinput}   placeholder='X'/>
              </View>
              <View style={styles.clietName}>
                <Text>Descrição:</Text>
                <TextInput style={styles.textinput}   placeholder='Insira aqui a descrição do produto'/>
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
    viewList:{
      height: 200
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
      justifyContent: "space-evenly",
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
        flex: 1,
        borderWidth: 1,
        borderWidth: 1,
        alignSelf: 'stretch',
        width: 200,
    }
  });

export default Product;