import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, TextInput , Image, Text, View , Alert} from 'react-native';

export default function App() {
  const [username, setUsername, password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image  resizeMode="contain" style={styles.logo} source={require("./assets/drigon.png")} /> 
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
        title="Logar!"
        onPress={() => Alert.alert('Evento Logar as ' + username )}
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
//<Image resizeMode="contain" style={styles.logo} source={require("./assets/drigon.png")} /> 