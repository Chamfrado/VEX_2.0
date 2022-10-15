import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput, Image, Text, View, Alert, Pressable } from 'react-native';
import { Header } from '../components/header'

// import { Container } from './styles';

function Home({ navigation, route }) {
  return (
    <View style={styles.container}>


      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Suas opções:</Text>
      </View>

      <View style={styles.containerBtn}>



        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Client', { trader_id: route.params.trader_id })}>
          <Text style={styles.btnText}>Clientes</Text>
        </Pressable>



      </View>

      <View style={styles.containerBtn}>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Product', { trader_id: route.params.trader_id })}>
          <Text style={styles.btnText}>Produtos</Text>
        </Pressable>
      </View>

      <View style={styles.containerBtn}>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Sale', { trader_id: route.params.trader_id })}>
          <Text style={styles.btnText}>Vendas</Text>
        </Pressable>

      </View>

      <View style={styles.containerBtn}>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('Historic', { trader_id: route.params.trader_id })}>
          <Text style={styles.btnText}>Histórico</Text>
        </Pressable>

      </View>

      <View style={styles.containerBtn}>

        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('User', { trader_id: route.params.trader_id })}>
          <Text style={styles.btnText}>Usuario</Text>
        </Pressable>

      </View>
      <View style={styles.containerBottom}>
        <Text>VEX</Text>
      </View>
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
  title: {
    flex: 1,
    paddingTop: 50,

  },
  titleText: {
    fontSize: 30
  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,

  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#0000cd',
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10

  }, btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  containerBottom: {
    alignSelf: 'center',

  }

});

export default Home;




