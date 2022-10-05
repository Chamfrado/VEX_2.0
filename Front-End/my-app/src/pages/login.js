import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { Header } from '../components/header'

// import { Container } from './styles';

function Login ({navigation}){
    const [username, setUsername, password, setPassword] = useState('');
    return (
      <View style={styles.container}>
        <Image  resizeMode="contain" style={styles.logo} source={require("../../assets/drigon.png")} /> 
        <Text></Text>
        <Text>Email</Text>
        <TextInput
          style={styles.textinput}
          textContentType='emailAddress' 
          placeholder='Username'
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}/>
        <Text></Text>
        <Text>Password</Text>
        <TextInput style={styles.textinput} textContentType='password'  placeholder='Password'/>
        <Button
          title="Entrar!"
          onPress={() => navigation.navigate('Home')}
        />
        <Text>VEX</Text>
        <StatusBar style="auto" />
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

export default Login;