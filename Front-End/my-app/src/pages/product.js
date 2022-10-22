import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Alert } from 'react-native';

import { Button, Icon, Card, Modal, Spinner, Layout, List, ListItem, Divider, Text } from '@ui-kitten/components';

import api from '../../services/api'

const ProductIcon = (props) => (
  <Icon {...props} name='cube-outline' />
);



function Product({ navigation, route }) {

  const traderID = route.params?.trader_id;

  const [selectProduct, setSelectProduct] = useState(null);

  function deleteProduto(ID) {
    console.log(ID);
    api.delete('product/delete', {
      data: {
        id: ID
      }
    }).then(({ data }) => {
      setVisible(false)
      navigation.navigate('UpdateAfterDelete', { trader_id: route.params.trader_id })
    });
  }

  function teste(teste) {
    Alert.alert('oi ' + teste.id);
  }



  const Item = ({ item }) => (
    <ListItem
      title={item.name_product}
      key={item.id}
      onPress={() => {
        setSelectProduct(item);
        setVisible(true);
      }}
      description={'Quantidade: ' + item.quantity_product}
      accessoryLeft={ProductIcon} />

  );





  //Substituir por Screen
  const [produtos, setProd] = useState([]);

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const subs = navigation.addListener('focus', () => {
      setVisibleSpin(true)

      api.post('product/list', { trader_id: route.params?.trader_id }).then(({ data }) => {
        setVisibleSpin(false)
        setProd(data);
        console.log(data);
      });


    })
  }, [refreshKey])


  useEffect(() => {


  }, [refreshKey])

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
  const [visibleSpin, setVisibleSpin] = React.useState(true);
  const [visible, setVisible] = React.useState(false);



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
    <Layout style={styles.container}>

      <View style={[styles.containerTitle, { alignItems: 'center', paddingBottom: 30, paddingTop: 10 }]}>
        <Text style={styles.titleText} category='h1'>Produtos</Text>
      </View>


      <View style={styles.containerBtn}>
        <Button
          size='large'
          onPress={() => navigation.navigate('AddProduct', { trader_id: route.params.trader_id })}
        >
          Adicionar Produto
        </Button>

      </View>




      <Text category='h2' style={[{ alignSelf: 'center', padding: 20 }]} >Lista de Produtos</Text>


      <List
        style={{ height: 300 }}
        data={produtos.product}
        ItemSeparatorComponent={Divider}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={refreshKey}
      />

      <Modal visible={visibleSpin}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisibleSpin(false)}>
        <Spinner />
      </Modal>

      <Modal visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text category='h3' style={{ alignSelf: 'center' }}>Opções</Text>

          <View style={[{ flexDirection: 'row', padding: 30 }]}>
            <Button size='large' onPress={() => {
              setVisible(false)
              navigation.navigate('UpdateProduct', { trader_id: route.params.trader_id, product_id: selectProduct.id })
            }} >Alterar</Button>
            <Text>                      </Text>
            <Button size='large'
              onPress={() => {
                Alert.alert(
                  "Excluir Cliente",
                  "Deseja excluir o client?",
                  [
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "Cancelar"
                    },
                    { text: "Sim", onPress: () => deleteProduto(selectProduct.id) }
                  ]
                );
              }}>Deletar</Button>

          </View>
          <Button onPress={() => setVisible(false)}>
            Cacelar
          </Button>
        </Card>

      </Modal>


    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

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
  addBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#111',
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 20,
    marginRight: 20
  },
  containerBtn: {
    alignSelf: 'stretch',
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 20,
    paddingBottom: 20

  }
});

export default Product;