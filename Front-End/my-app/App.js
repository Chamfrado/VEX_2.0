import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/pages/login';
import HomeScreen from './src/pages/mainMenu';
import ClientScreen from './src/pages/client'


export default function App() {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Menu Principal'}}/>
            <Stack.Screen name='Client' component={ClientScreen} options={{ title: 'Clientes'}}/>

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