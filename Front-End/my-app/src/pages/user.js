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
        
        
        <View style={styles.containerTitle}>
                <Text style={styles.titleText}>Dados Do Usuario</Text>
            </View>

        <View style={styles.saleInfo}>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Nome: {nameTrader} </Text>
                </View>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Telefone: {phoneTrader}</Text>
                </View>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Email: {emailTrader}</Text>
                </View>
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


export default User;