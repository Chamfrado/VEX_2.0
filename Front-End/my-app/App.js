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
import AddProduct from './src/pages/Side_Pages/Product/AddProduct';
import UpdateProduct from './src/pages/Side_Pages/Product/UpdateProduct';
import AddClient from './src/pages/Side_Pages/Client/AddClient';
import UpdateClient from './src/pages/Side_Pages/Client/UpdateClient';
import SelectClient from './src/pages/Side_Pages/Sale/SelectClient';
import SelectProduct from './src/pages/Side_Pages/Sale/SelectProduct'; 
import HistoricDetail from './src/pages/Side_Pages/Historic/detail';
import UpdateAfterDelete from './src/pages/Side_Pages/Product/updateAfterDelete';

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
            <Stack.Screen name='AddProduct' component={AddProduct} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='UpdateProduct' component={UpdateProduct} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='AddClient' component={AddClient} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='UpdateClient' component={UpdateClient} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='SelectClient' component={SelectClient} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='SelectProduct' component={SelectProduct} options={{title: 'Cancelar'}}/>
            <Stack.Screen name='HistoricDetal' component={HistoricDetail} options={{title: 'voltar'}}/>
            <Stack.Screen name='UpdateAfterDelete' component={UpdateAfterDelete} options={{title: 'voltar'}}/>
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