import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../services/api'





const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.item_title, textColor]}>{item.id}</Text>
    <Text style={[styles.item_title, textColor]}>{item.name_product}</Text>
  </TouchableOpacity>
);



function Product({ navigation, route }) {

  const traderID = route.params?.trader_id;




  function addProduto() {
    api.post('product/add',
      {
        name_product: nameProduct,
        price_product: priceProduct,
        quantity_product: quantityProduct,
        description_product: descriptionProduct,
        trader_id: route.params?.trader_id
      }).then(({ data }) => {
        Alert.alert('Produto adicionado com sucesso!');

      })
  }
            //Substituir por Screen
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [produtos, setProd] = useState([]);

  //name_product, price_product, quantity_product, description_product, trader_id
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [quantityProduct, setQuantityProduct] = useState('');
  const [descriptionProduct, setDescriptionProduct] = useState('');

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



  function deleteProduto() {
    console.log(selectedId);
    api.delete('product/delete',{data: {
      id: selectedId
    }}).then(({ data }) => {
      Alert.alert('Produto Deletado com sucesso!')
      console.log(data);
    });
  }

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






  function getProdutoId() {
    console.log(selectedId);

    api.post('product/getById',
      {
        id: selectedId
      }).then(({ data }) => {
        console.log(data);
        setSelectedProduct(data);


      })
  }



//Flatlis !!!! Ordenar em ordem alfabetica e colocar dados reais!

  console.log(selectedProduct);

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Produtos</Text>
      </View>


      <View style={styles.viewList}>
        <FlatList
          data={produtos.product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        
      </View>


      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModal2Visible(true)}
        onPressOut={() => getProdutoId()}
      >
        <Text style={styles.textStyle}>Editar</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {Alert.alert(
          "Excluir Produto",
          "Deseja excluir o produto?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "Cancelar"
            },
            { text: "Sim", onPress: () => deleteProduto() }
          ]
        );}}
      >
        <Text style={styles.textStyle}>Excluir</Text>
      </Pressable>


      <Modal
        animationType=' slide '
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.title_modal}>
              <Text >Cadastrar Produto</Text>
            </View>

            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Nome:</Text>
              <TextInput style={styles.textinput}
                onChangeText={newnameProduct => setNameProduct(newnameProduct)}
                placeholder='Nome do Produto' />
            </View>
            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Preço:</Text>
              <TextInput style={styles.textinput}
                placeholder='R$000,00'
                onChangeText={newpriceProduct => setPriceProduct(newpriceProduct)} />
            </View>
            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Quantidade:</Text>
              <TextInput style={styles.textinput}
                placeholder='X'
                onChangeText={newquantiryProduct => setQuantityProduct(newquantiryProduct)} />
            </View>
            <View style={styles.product_desc}>
              <Text>Descrição:</Text>
              <TextInput style={styles.textinput}
                placeholder='Insira aqui a descrição do produto'
                onChangeText={newdescriptionProduct => setDescriptionProduct(newdescriptionProduct)} />
            </View>
            <View style={styles.btnview}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => addProduto()}
              >
                <Text>Adicionar</Text>

              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Voltar</Text>
              </Pressable>
            </View>


          </View>
        </View>
      </Modal>



      <Modal
        animationType=' slide '
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modal2Visible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.title_modal}>
              <Text >Editar Produto</Text>
            </View>

            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Nome:</Text>
              <TextInput style={styles.textinput}
                onChangeText={newnameProduct => setNameProduct(newnameProduct)} />
            </View>
            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Preço:</Text>
              <TextInput style={styles.textinput}
                placeholder='R$000,00'
                onChangeText={newpriceProduct => setPriceProduct(newpriceProduct)} />
            </View>
            <View style={styles.product_textb}>
              <Text style={styles.textmodal}>Quantidade:</Text>
              <TextInput style={styles.textinput}
                placeholder='X'
                onChangeText={newquantiryProduct => setQuantityProduct(newquantiryProduct)} />
            </View>
            <View style={styles.product_desc}>
              <Text>Descrição:</Text>
              <TextInput style={styles.textinput}
                placeholder='Insira aqui a descrição do produto'
                onChangeText={newdescriptionProduct => setDescriptionProduct(newdescriptionProduct)} />
            </View>
            <View style={styles.btnview}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => salvarProduto()}
              >
                <Text>Salvar</Text>

              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModal2Visible(!modal2Visible)}
              >
                <Text>Voltar</Text>
              </Pressable>
            </View>


          </View>
        </View>
      </Modal>



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
  viewList: {
    height: 200,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,

  },
  textinput: {
    idth: 200,
    height: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 10

  }, centeredView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    //Cor preta!
  },
  buttonOpen: {
    backgroundColor: "WHite",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
  list: {
    flex: 1,
    borderWidth: 1,
    borderWidth: 1,
    alignSelf: 'stretch'
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-between'

  },
  item_title: {
    fontSize: 24,
  },
  title_modal: {
    alignSelf: "center",
  },
  product_textb: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    margin: 5
  },
  textmodal: {
    paddingRight: 10
  },
  btnview: {
    alignSelf: 'center'
  }
});

export default Product;