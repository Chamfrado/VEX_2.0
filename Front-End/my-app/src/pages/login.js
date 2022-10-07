import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { Header } from '../components/header';
import api from '../../services/api';


// import { Container } from './styles';

function Login ({navigation}){
    const [username, setUsername, password, setPassword] = useState('');

function autentication(){
        const jsonBody = JSON.stringify({
          
            phone_trader: username,
            pass_trader: password
          
        })
        api.get('trader/autentic',jsonBody).then( resp => {
         console.log(data);
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
          defaultValue={username}/>
        <Text></Text>
        <Text style={styles.credentials}>Password</Text>
        <TextInput style={styles.textinput} secureTextEntry={true} textContentType='password'  placeholder='Password'/>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
        <Button
          title="Entrar!"
          onPress={() => autentication()}
        />
        <Button
          title="TESTE!"
          onPress={() => navigation.navigate('Teste')}
        />
        <Text>VEX</Text>
        <StatusBar style="auto" />
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
      height:200,
      padding: 1,
      
    },
    credentials:{
      fontSize: 20
    },forgot:{
      fontStyle: 'italic',
      
    },
    textinput:{
      
      borderWidth: 2,
      alignSelf:'stretch',
      backgroundColor: '#fff',
      marginLeft: 40,
      marginRight:40,
      marginTop: -10,
      textAlign: 'center'
    },viewLogo:{
      
    }
  });

export default Login;