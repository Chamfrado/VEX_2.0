import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../../../services/api';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.name_product}</Text>
    </TouchableOpacity>
);

function SelectProduct({ navigation, route }) {



    function pickDate(){
        var date = new Date().getDate() + 1;
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var hour = new Date().toLocaleTimeString();
 
      
      return year + '-' + month + '-' + date + ' ' + hour;
    }

    const [priceProduct, setPriceProduct] = useState('');
    const [quantityProduct, setQuantityProduct] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#00008B" : "#FFF";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    setSelectedProduct(item);
                }
                }
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const [products, setProduct] = useState([]);
    const [productList, setProductList] = useState([]);


    function addProductList(item) {
        if (productList.length === 0) {
            item.price_product = priceProduct;
            item.quantity_product = quantityProduct;
            setProductList([...productList, item]);
        } else if (productList.some((newitem) => newitem.id === item.id) === false) {
            item.price_product = priceProduct;
            item.quantity_product = quantityProduct;
            setProductList([...productList, item]);
        } else {
            Alert.alert('Produto ja adicionado a lista!');
        }


    }

    var total = 0

    function finishSale() {

        productList.map((item) => {
            var totalItem = item.quantity_product * item.price_product
            console.log(totalItem);
            total = total + totalItem;
        })

        api.post('sale/add',
            {
                date_sale: pickDate(),
                status_sale: 'Continuando',
                trader_id: route.params?.trader_id,
                purchase_in_installments: 'compra',
                payment_control: '30/45/60',
                total_sale: total,
                client_id: route.params?.client_id

            }).then(({ data }) => {
                Alert.alert('Produto adicionado com sucesso!');
                console.log(data);
                console.log(data.id);
                productList.map((item) => {
                    api.post('/sale/products/add',
                    {
                        product_id : item.id,
                        sale_id: data.id,
                        quantity_sale_product: item.quantity_product,
                       price_product_sale: item.price_product
                        
                     }).then(({ id }) => {
                    console.log('produto adicionado!')
                    })

                })
                Alert.alert(
                    "Venda efetuada com sucesso!",
                    "O que deseja realizar agora?",
                    [
                        {
                            text: "Nova Venda",
                            onPress: () => navigation.navigate('SelectClient', { trader_id: route.params.trader_id }),
                            style: "Cancelar"
                        },
                        { text: "Sair", onPress: () => navigation.navigate('Home', { trader_id: route.params.trader_id }) }
                    ]
                );
              })
              

    }

    function deleteProduto(item) {

        setProductList(current =>
            current.filter((product => {
                return product !== item;
            })))
    }

    useEffect(() => {
        api.post('product/list',{trader_id: route.params?.trader_id}).then(({ data }) => {
            setProduct(data);
            console.log(data);
          });
    }, [])


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerTitle}>
                    <Text style={styles.titleText}>Finalizando Venda</Text>
                </View>

                <View style={styles.viewList}>

                    <View style={[styles.item, { backgroundColor: '#87CEFA' }]}>

                        <Text style={[styles.item_title, styles.row, { fontSize: 20 }]}>Nome</Text>

                    </View>




                    <FlatList
                        data={products.product}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        nestedScrollEnabled
                    />

                </View>

                <View style={styles.containerBtn}>

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
                    <Pressable
                        onPress={() => addProductList(selectedProduct)}
                        style={styles.addBtn}>
                        <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Adicionar</Text>
                    </Pressable>
                </View>



                <View style={styles.containerTitle}>
                    <Text style={{ fontSize: 30 }}>Lista De Produtos</Text>
                </View>

                <View style={styles.viewList}>

                    <View style={[styles.item]}>

                        <Text style={[styles.item_title, styles.row]}>Nome</Text>
                        <Text style={[styles.item_title, styles.row]}>Preço</Text>
                        <Text style={[styles.item_title, styles.row]}>Quantidade</Text>
                        <Text style={[styles.item_title, styles.row]}></Text>

                    </View>


                    <FlatList
                        data={productList}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={[styles.item_title, styles.row]}>{item.name_product}</Text>
                                <Text style={[styles.item_title, styles.row]}>{item.price_product}</Text>
                                <Text style={[styles.item_title, styles.row]}>{item.quantity_product}</Text>
                                <Pressable
                                    onPress={() => {
                                        Alert.alert(
                                            "Excluir Produto",
                                            "Deseja excluir o produto da lista?",
                                            [
                                                {
                                                    text: "Cancelar",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "Cancelar"
                                                },
                                                { text: "Sim", onPress: () => deleteProduto(item) }
                                            ]
                                        );
                                    }}
                                    style={styles.btn}>
                                    <Text style={styles.btnText}>Excluir</Text>
                                </Pressable>
                            </View>
                        )}
                        nestedScrollEnabled />
                </View>

                <View style={[styles.containerBtnF]}>


                    <Pressable
                        onPress={() => finishSale()}
                        style={styles.fBtn}>
                        <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Finalizar Venda</Text>
                    </Pressable>
                </View>
            </ScrollView>


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
        fontSize: 20

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
        backgroundColor: '#111',
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
        padding: 20,
        flex: 1,

    },
    productList: {
        flex: 1
    },
    product_textb: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        margin: 5,
        flexWrap: 'wrap'
    },
    textinput: {
        idth: 200,
        height: 25,
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingLeft: 10,
        alignSelf: 'stretch'

    },
    fBtn:{
        alignSelf: 'stretch',
        backgroundColor: '#111',
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    containerBtnF:{
        alignSelf: 'stretch',
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        flex: 1,
    }
});



export default SelectProduct;