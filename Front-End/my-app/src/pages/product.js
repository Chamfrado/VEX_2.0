import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../services/api'





function Product({ navigation, route }) {

  const traderID = route.params?.trader_id;



  function deleteProduto(ID) {
    console.log(ID);
    api.delete('product/delete', {
      data: {
        id: ID
      }
    }).then(({ data }) => {
      Alert.alert('Produto Deletado com sucesso!')
      console.log(data);
    });
  }
  
  function teste(teste){
    Alert.alert('oi ' + teste.id);
  }
  
  
  
  const Item = ({ item }) => (
    <View style={[styles.item]}>
  
      <Text style={[styles.item_title, styles.row]}>{item.name_product}</Text>
      <Text style={[styles.item_title, styles.row]}>         {item.quantity_product}</Text>
      <Pressable
        onPress={() => navigation.navigate('UpdateProduct', {trader_id :  route.params.trader_id, product_id : item.id} )}
        style={styles.btn}>
        <Text style={styles.btnText}>Alterar</Text>
      </Pressable>
      <Pressable
        onPress={() => {Alert.alert(
          "Excluir Produto",
          "Deseja excluir o produto?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "Cancelar"
            },
            { text: "Sim", onPress: () => deleteProduto(item.id) }
          ]
        );}}
        style={styles.btn}>
        <Text style={styles.btnText}>Excluir</Text>
      </Pressable>
  
    </View>
  
  
  );
  
  



  //Substituir por Screen
  const [produtos, setProd] = useState([]);

  useEffect(() => {
    api.get('product/list').then(({ data }) => {
      setProd(data);
      console.log(data);
    });
  }, [])
  //VOLTAR LAYOUT ANTIGO!





  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00008B" : "#87CEFA";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const [selectedProduct, setSelectedProduct] = useState('');





  function salvarProduto() {
    api.put('product/update', {
      id: selectedId,
      name_product: nameProduct,
      price_product: priceProduct,
      quantity_product: quantityProduct,
      description_product: descriptionProduct,
      trader_id: route.params?.trader_id
    }).then(({ data }) => {
      Alert.alert('Produto Atualizado com sucesso!')
    });
  }





  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Produtos</Text>
      </View>


      <View style={styles.viewList}>

        <View style={[styles.item]}>

          <Text style={[styles.item_title, styles.row]}>Nome</Text>
          <Text style={[styles.item_title, styles.row]}>Quantidade</Text>
          <Text style={[styles.item_title, styles.row]}>Alterar</Text>
          <Text style={[styles.item_title, styles.row]}>Excluir</Text>

        </View>




        <FlatList
          data={produtos.product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

      </View>


      <View style={styles.containerBtn}>
        <Pressable
            onPress={() => navigation.navigate('AddProduct', {trader_id :  route.params.trader_id} )}
            style={styles.addBtn}>
              <Text style={{color : 'white', fontSize:20, alignSelf: 'center'}}>Adicionar</Text>
        </Pressable>
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
  containerTitle: {
  },
  viewList: {
    height: 400,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderWidth: 1,

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    flex: 1,
    paddingTop: 50,

  },
  titleText: {
    fontSize: 30
  }, scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  }, item: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    flexWrap: 'wrap'
  },
  item_title: {
    fontSize: 15,
  },
  row: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRightWidth: 1
  }, btn: {
    flex: 1,
    backgroundColor: '#87CEFA',
    paddingHorizontal: 2,
    paddingVertical: 5,
    paddingEnd: 2,
    borderRightWidth: 1,

  }, btnText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  addBtn:{
    alignSelf: 'stretch',
      backgroundColor: '#111',
      borderTopLeftRadius: 10,
      borderBottomEndRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      marginLeft:20,
      marginRight:20
  },
  containerBtn: {
    alignSelf:'stretch',
    marginLeft: 100,
    marginRight: 100,

  }
});

export default Product;