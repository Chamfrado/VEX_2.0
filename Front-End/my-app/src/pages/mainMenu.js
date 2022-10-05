import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { Header } from '../components/header'
// import { Container } from './styles';

function Home ({navigation}){
    return (
        <View style={styles.container}>
        
        <Text>MENU PRINCIPAL</Text>
    
        <Button
        title="Clientes"
        onPress={() => navigation.navigate('Client')}/>
    
        <Button
        title='Produtos'
        onPress={() => Alert.alert('evento Produtos')}/>
    
        <Button
        title='Vendas'
        onPress={() => Alert.alert('evento Vendas')}/>
    
        <Button
        title='Historico'
        onPress={() => Alert.alert('evento Historico')}/>
    
        <Button
        title='Usuario'
        onPress={() => Alert.alert('evento Historico')}/>
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
    }
  });

export default Home;




