import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Button, Text, View, Pressable, Modal, Alert, TextInput } from 'react-native';

import api from '../../../../services/api';



function HistoricDetail({ navigation, route }) {



    const Item = ({ item }) => (
        <View style={[styles.item]}>
      
          <Text style={[styles.item_title, styles.row]}>{item.name_product}</Text>
          <Text style={[styles.item_title, styles.row]}>     R$ {item.price_product_sale}</Text>
          <Text style={[styles.item_title, styles.row]}>      {item.quantity_sale_product}</Text>
          <Text style={[styles.item_title, styles.row]}>      {item.parcial_value}</Text>
          
      
        </View>
      
      
      );



      const [produtos, setProd] = useState([]);
      const [saleId, setSaleId] = useState('');
      const [clientName, setClientName] = useState('');
      const [date, setDate] = useState('');
      const [total, setTotal] = useState('');
      

      useEffect(() => {
        setClientName(route.params?.name_client);
        setDate(route.params?.date_sale);
        setSaleId(route.params?.sale_id);
        setTotal(route.params?.total)
        console.log(route.params?.sale_id);
        api.post('sale/products',{
            sale_id: route.params?.sale_id
          }).then(({ data }) => {
          setProd(data);
          console.log(data);
        });
      }, [])



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

      
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.titleText}>Venda Nº {saleId}</Text>
            </View>

            <View style={styles.saleInfo}>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Cliente: {clientName}</Text>
                </View>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Data da Venda: {date}</Text>
                </View>
                <View style={styles.product_textb}>
                    <Text style={[styles.textmodal, {fontSize: 30}]}>Total da Venda: R$ {total}</Text>
                </View>
            </View>


            <View style={styles.viewList}>

        <View style={[styles.item]}>

          <Text style={[styles.item_title, styles.row]}>Nome</Text>
          <Text style={[styles.item_title, styles.row]}>Preço</Text>
          <Text style={[styles.item_title, styles.row]}>Quantidade</Text>
          <Text style={[styles.item_title, styles.row]}>Total Item</Text>

        </View>




        <FlatList
          data={produtos.productHasSale}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

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
  
    }
  });



export default HistoricDetail;