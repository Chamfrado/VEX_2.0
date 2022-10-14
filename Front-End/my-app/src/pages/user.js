import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ScrollView, FlatList ,VirtualizedList,Button, Text, View , SectionList, Pressable, Modal, Alert, TextInput} from 'react-native';
import { Header } from '../components/header'
import api from '../../services/api'



function User ({navigation, route}){

  const [traders, setTraders] = useState('');
  const [nameTrader, setNameTrader] = useState('');
  const [phoneTrader, setPhoneTrader] = useState('');
  const [emailTrader, setEmailTrader] = useState('');
  const [passTrader, setPassTrader] = useState('');

  

  
  useEffect(() => {
    api.post('trader/getById',{id: route.params?.trader_id}).then(({data}) =>{

      setTraders(data);
      setNameTrader(data.trader[0].name_trader);
      setPhoneTrader(data.trader[0].phone_trader);
      setEmailTrader(data.trader[0].email_trader);
      setPassTrader(data.trader[0].pass_trader);

      
    })
  },[])

  const date_acess = "2022-06-06";
  const date_term= "2022-06-06";

  console.log('=======================')
  console.log(traders.trader)
  console.log('=======================')
    const [modalVisible, setModalVisible] = useState(false);


    function salvarTrader() {
      api.put('trader/update', {
        name_trader: nameTrader,
        email_trader: emailTrader,
        phone_trader: phoneTrader,
        pass_trader: passTrader,
        date_term: date_term,
        date_acess: date_acess,
        id: route.params?.trader_id
      }).then(({ data }) => {
        console.log(data);
      });
    }


    return (
      <View style={styles.container}>
        
        
        <View style={styles.titleview}>
        <Text style={styles.title}>Dados do Usuario</Text>
        </View>


        <View style={styles.dataView} >
            <Text style={styles.menutext} >Nome: {nameTrader} </Text>
            <Text style={styles.menutext} >Telefone: {phoneTrader} </Text>
            <Text style={styles.menutext} >Email: {emailTrader}</Text>
        </View>
        
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>Alterar Dados</Text>
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
              <Text style={styles.tituloAlterarSenha}>Alterar Senha</Text>
              <View style={styles.senha}>
                <Text>Nome:</Text>
                <TextInput style={styles.textinput} onChangeText={newnameTrader => setNameTrader(newnameTrader)}  placeholder='********'/>
              </View>
              <View style={styles.senha}>
                <Text>Telefone:</Text>
                <TextInput style={styles.textinput}  onChangeText={newphoneTrader => setNameTrader(newphoneTrader)}   placeholder='********'/>
              </View>
              <View style={styles.senha}>
                <Text>Email:</Text>
                <TextInput style={styles.textinput}  onChangeText={newemailTrader => setNameTrader(newemailTrader)}   placeholder='********'/>
              </View>
              <View style={styles.senha}>
                <Text>Nova Senha:</Text>
                <TextInput style={styles.textinput} secureTextEntry={true} onChangeText={newpassTrader => setNameTrader(newpassTrader)}  placeholder='********'/>
              </View>
              <Button
              title='Salvar'
              onPress={() => salvarTrader()}
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
      backgroundColor: '#87CEFA',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    logo:{
      width: 150,
      height: 50,
      padding: 5,
      alignSelf: "center",
    },
    textinput:{
      borderWidth: 2,
      alignSelf:'stretch',
      backgroundColor: '#fff',
      textAlign: 'center'
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
      margin: 10,
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
    },senha:{
      width: 150,
      height:80
    },
    tituloAlterarSenha:{
      paddingBottom: 30,
      fontSize:20
    },
    dataView:{
      backgroundColor: 'white',
      alignItems: "stretch",
      justifyContent: "space-evenly",
    },
    titleview:{
      height: 100,
      alignItems: 'stretch'

    },
    title:{
      fontSize: 32
    },
    menutext:{
      fontSize: 29
    }
  });

export default User;