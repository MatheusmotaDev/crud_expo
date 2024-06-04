import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import Databse from './Database'


export default function AppForm( {navigation}) {
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  
  function handleDescriptionChange (descricao){
    setDescricao(descricao);
  }
  function handleQuantatyChange(quantidade){
    setQuantidade(quantidade)
  }
  async function handleButtonPress(){
   const listItem = {descricao, quantidade: parseInt(quantidade)};
   Database.saveItem(listItem)
   .then(response => navigation.navigate("AppList", LisItem))


    if(response) saveItems = JSON.parse(response);
    saveItems.push(listItem)
    await AsyncStorage.setItem('items', JSON.stringify(saveItems));
      navigation.navigate('AppList')
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        placeholder='O que está faltando em casa'
        clearButtonMode='always'>
        </TextInput>
        <TextInput style={styles.input}
         placeholder='Digite a quantidade'
         keyboardType={'numeric'}
         clearButtonMode='always'/>

        <TouchableOpacity style={styles.button} 
        onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>


      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer:{
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  input:{
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button:{
    marginTop:10,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});