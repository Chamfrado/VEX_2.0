import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,SafeAreaView ,ScrollView, FlatList ,VirtualizedList,Button, Text, View , SectionList, Pressable, Modal, Alert, TextInput} from 'react-native';
import { Header } from '../components/header'
import api from '../../services/api';

const data = [];

function Teste ({navigation}){

    const [produtos, setProd] = useState({});

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

      const getTraders = async() =>{
        try {
          const {data} = await api("/trader/list");
          return data;
        } catch (error) {
          const {response} = error;
          if(response?.data){
            return response.data;
          }
          return{error: error.message || error}
          
        }
      }

    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Text>Lista de Traders</Text>
        <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
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
    }
  });

export default Teste;