import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { Header } from '../components/header'

// import { Container } from './styles';

function Home ({navigation, route}){
    return (
      <View style={styles.container}>
          

          <View style={styles.containerTitle}>
          <Text style={styles.titleText}>MENU PRINCIPAL</Text>
          </View>

           <View style={styles.containerBtn}>
            <Button
              style={styles.btn}
              title="Clientes"
               onPress={() => navigation.navigate('Client', {trader_id : route.params.trader_id })}/>
           
           
           
           </View>
        
          <View style={styles.containerBtn}>
          <Button
            style={styles.btn}
           title='Produtos'
            onPress={() => navigation.navigate('Product', {trader_id : route.params.trader_id })}/>
          </View>

          <View style={styles.containerBtn}>
            
            <Button
            style={styles.btn}
           title='Vendas'
           onPress={() => navigation.navigate('Sale', {trader_id : route.params.trader_id })}/>
          </View>

          <View style={styles.containerBtn}>

            <Button
            style={styles.btn}
            title='Historico'
            onPress={() => navigation.navigate('Historic', {trader_id : route.params.trader_id })}/>
            
          </View>

          <View style={styles.containerBtn}>
           <Button
           style={styles.btn}
           title='Usuario'
           onPress={() => navigation.navigate('User', {trader_id : route.params.trader_id })}/>
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
    title:{
      flex: 1,
      paddingTop: 50,
            
    },
    titleText:{
      fontSize: 30
    },
    containerBtn:{
     alignSelf:'stretch',
     marginLeft: 100,
     marginRight: 100,
     borderWidth: 1
     
     

    },
    btn:{
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderWidth:1
      
      
    },
    containerBottom:{
      alignSelf:'center',
      
    }
    
  });

export default Home;




