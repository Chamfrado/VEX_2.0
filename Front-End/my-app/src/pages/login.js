import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput , Image, Text, View ,Pressable ,Alert} from 'react-native';
import { Header } from '../components/header';
import api from '../../services/api';


// import { Container } from './styles';

function Login ({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

function autentication(){
        const jsonBody = JSON.stringify({
          
            phone_trader: username,
            pass_trader: password  
        })
        api.post('trader/autentic',{phone_trader: username, pass_trader: password  }).then( ({data}) => {
            console.log(data);
            if(data === 'recusado'){
              Alert.alert('Telefone ou senha errado');
            }else{
              Alert.alert('Logado com Sucesso!');
              navigation.navigate('Home', {trader_id : data.trader[0].id} );
            }

         })
         
        
        

  }


    return (
      <View style={styles.container}>
        <View style={styles.viewLogo}>
        <Image  resizeMode="contain" style={styles.logo} source={require("../../assets/logoVEX.png")} /> 
        </View>
        <Text></Text>
        <Text style={styles.credentials}>Telefone</Text>
        <TextInput
          style={styles.textinput} 
          placeholder='(35) 9 9999-9999'
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}
          dataDetectorTypes='phoneNumber'/>
        <Text></Text>
        <Text style={styles.credentials}>Senha</Text>
        <TextInput 
        style={styles.textinput} 
        secureTextEntry={true} 
        textContentType='password'  
        placeholder='Senha'
        onChangeText={newPassword => setPassword(newPassword)}/>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
        <View style={styles.containerBtn}>
        <Pressable
            style={styles.btn}
            onPress={() => autentication()}>
              <Text style={styles.btnText }>Entrar</Text>
        </Pressable>
        </View>
        
        <Pressable
                onPress={() => navigation.navigate('Teste' )}
              >
                <Text>TESTE</Text>
        </Pressable>
       
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEFA',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    logo:{
      height:200,
      padding: 1,
      
    },
    credentials:{
      fontSize: 20
    },forgot:{
      fontStyle: 'italic',
      
    },
    textinput:{
      
      
      alignSelf:'stretch',
      backgroundColor: '#fff',
      marginLeft: 40,
      marginRight:40,
      marginTop: -25,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 20

    },btn: {
      alignSelf: 'stretch',
      backgroundColor: '#0000cd',
      borderTopLeftRadius: 10,
      borderBottomEndRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10
  
    }, btnText: {
      fontSize: 20,
      color: 'white',
      alignSelf: 'center'
    },containerBtn: {
      alignSelf: 'stretch',
      marginLeft: 100,
      marginRight: 100,
  
    }
  });

export default Login;