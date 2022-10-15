import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/pages/login';
import HomeScreen from './src/pages/mainMenu';
import ClientScreen from './src/pages/client';
import ProductScreen from './src/pages/product';
import HistoricScreen from './src/pages/historic';
import UserScreen from './src/pages/user';
import SaleScreen from './src/pages/sale';
import TesteScreen from './src/pages/teste';


export default function App() {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Sair'}}/>
            <Stack.Screen name='Client' component={ClientScreen} options={{ title: 'Voltar'}}/>
            <Stack.Screen name='Product' component={ProductScreen} options={{ title: 'Voltar'}}/>
            <Stack.Screen name='Historic' component={HistoricScreen} options={{ title: 'Voltar'}}/>
            <Stack.Screen name='User' component={UserScreen} options={{ title: 'Voltar'}}/>
            <Stack.Screen name='Sale' component={SaleScreen} options={{ title: 'Voltar'}}/>
            <Stack.Screen name='Teste' component={TesteScreen} options={{ title: 'Teste'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

//<Image resizeMode="contain" style={styles.logo} source={require("./assets/drigon.png")} /> 