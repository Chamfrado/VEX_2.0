import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TextInput, Image, View, Pressable, TouchableWithoutFeedback, Alert } from 'react-native';



import { Button, Layout, Icon, Input, useTheme, Text } from '@ui-kitten/components/';
import api from '../../services/api';


// import { Container } from './styles';

function Login({ navigation }) {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const constRenderIconCell = (props) => (
    <Icon {...props} name={'smartphone-outline'} />
  );

  function autentication() {
    if (username !== '' && password !== '') {
      api.post('trader/autentic', { phone_trader: username, pass_trader: password }).then(({ data }) => {
        console.log(data);
        if (data === 'recusado') {
          Alert.alert('Telefone ou senha errado');
        } else {
          navigation.navigate('Home', { trader_id: data.trader[0].id });
        }

      })
    } else if (username === '') {
      Alert.alert('Preencha o numero de telefone.')
    } else if (password === '') {
      Alert.alert('Entre com sua senha')
    }
  }
  function pickDate() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().toLocaleTimeString();

    return date + '-' + month + '-' + year + ' ' + hour;
  }

  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.viewLogo}>
        <Image resizeMode="contain" style={styles.logo} source={require("../../assets/logoVEX.png")} />
      </View>
      <Text style={styles.credentials}>Telefone</Text>

      <View style={styles.inputCont}>
        <Input
          placeholder='Digite seu Telefone'
          accessoryRight={constRenderIconCell}
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}
          dataDetectorTypes='phoneNumber' />
      </View>



      <Text style={styles.credentials}>Senha</Text>



      <View style={styles.inputCont}>
        <Input
          placeholder='Digite sua senha'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={nextPassword => setPassword(nextPassword)}
        />
      </View>

      <Text style={styles.forgot}>Esqueceu a senha?</Text>
      <Button
        style={styles.buttonBlack}
        size='large'
        onPress={() => autentication()}>
        Entrar
      </Button>




      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo: {
    height: 200,
    padding: 1,

  },
  credentials: {
    fontSize: 20
  }, forgot: {
    fontStyle: 'italic',

  },
  textinput: {

    borderWidth: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 40,
    marginRight: 40,
    marginTop: -25,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20

  }, btn: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10

  }, btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  }, containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,

  }, inputCont: {
    marginLeft: 20
  }
});

export default Login;