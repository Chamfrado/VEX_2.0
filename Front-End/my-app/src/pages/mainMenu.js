import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,  TextInput, Image, View, Alert, TouchableHighlight  ,Pressable } from 'react-native';


import { Button, Layout, useTheme, Text, Icon } from '@ui-kitten/components/';
import { default as theme } from '../../theme/custom-theme.json';

import api from '../../services/api';

const ClientIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const ProductIcon = (props) => (
  <Icon {...props} name='clipboard-outline'/>
);

const SaleIcon = (props) => (
  <Icon {...props} name='shopping-bag-outline'/>
);

const HistoricIcon = (props) => (
  <Icon {...props} name='list-outline'/>
);

const UserIcon = (props) => (
  <Icon {...props} name='award-outline'/>
);


// import { Container } from './styles';

function Home({ navigation, route }) {
  return (
    <Layout style={styles.container}>


      <View style={styles.containerTitle}>
        <Text style={styles.text} category='h1'>Suas opções:</Text>
      </View>

      <View style={styles.containerBtn}>

      <Button
        size='giant'
        accessoryLeft={ClientIcon}
        onPress={() => navigation.navigate('Client', { trader_id: route.params.trader_id })}>
        Clientes
      </Button>




      </View>

      <View style={styles.containerBtn}>

      <Button
        size='giant'
        accessoryLeft={ProductIcon}
        onPress={() => navigation.navigate('Product', { trader_id: route.params.trader_id })}>
        Produtos
      </Button>
      </View>

      <View style={styles.containerBtn}>


      <Button
        size='giant'
        accessoryLeft={SaleIcon}
        onPress={() => navigation.navigate('SelectClient', { trader_id: route.params.trader_id })}>
        Vendas
      </Button>


      </View>

      <View style={styles.containerBtn}>
      <Button
        size='giant'
        accessoryLeft={HistoricIcon}
        onPress={() => navigation.navigate('Historic', { trader_id: route.params.trader_id })}>
        Histórico
      </Button>

        

      </View>

      <View style={styles.containerBottom}>
        <Text category='h5'>VEX</Text>
      </View>
    </Layout>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'



  },
  title: {
    flex: 1,
    paddingTop: 50,

  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,

  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
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

  },
  containerBottom: {
    alignSelf: 'center',

  }

});

export default Home;




