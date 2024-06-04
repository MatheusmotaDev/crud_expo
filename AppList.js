import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppItem from './AppItem';
import Database from "./Database"

export default function AppList() {
  const [items, setItems] = useState([
    {id:1, quantidade: 5, descricao: "arroz"},
    {id:2, quantidade: 1, descricao: "feijão"},
    {id:3, quantidade: 0.5, descricao: "charque"},
    {id:4, quantidade: 10, descricao: "café"},
    {id:5, quantidade: 2, descricao: "tapioca"},
    {id:6, quantidade: 1, descricao: "ketshup"}
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras
      </Text>
      <ScrollView style={styles.scrollContainer}>
      { items.map(item => {
        return <AppItem key={item.id} id={item.id}
        item={item.quantidade + 'de' + 
          item.descricao}/>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});