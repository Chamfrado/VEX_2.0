import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

// import { Container } from './styles';

const statusBarHeight = StatusBar.currentHeight;

export default function Header() {
  return (
  <View >
    <Text>VEX</Text>
  </View>);
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#6495ED',
        paddingTop: statusBarHeight
    }
})
