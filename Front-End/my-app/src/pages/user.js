import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,ScrollView, FlatList ,VirtualizedList,Button, Text, View , SectionList, Pressable, Modal, Alert, TextInput} from 'react-native';
import { Header } from '../components/header'




function User ({navigation}){

  
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
        <Text>Dados do Usuario</Text>
        
        <View  style={styles.container}>
            <Text>Nome: </Text>
            <TextInput value='Lohran Cintra'/>
            <Text>Telefone: </Text>
            <TextInput value='35 9 9999 9999'/>
        </View>
        <View  style={styles.container}>
            <Text>Email: </Text>
            <TextInput value='teste@vex.com.br'/>
        </View>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>Alterar Senha</Text>
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
                <Text>Nova Senha:</Text>
                <TextInput style={styles.textinput} secureTextEntry={true}  placeholder='********'/>
              </View>
              <View style={styles.senha}>
                <Text>Confirme a Senha:</Text>
                <TextInput style={styles.textinput}  secureTextEntry={true}  placeholder='********'/>
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
    },senha:{
      width: 150,
      height:80
    },
    tituloAlterarSenha:{
      paddingBottom: 30,
      fontSize:20
    }
  });

export default User;