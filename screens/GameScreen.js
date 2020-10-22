
import { StatusBar } from 'expo-status-bar';
import React, { useState, Component }from 'react';
import styles from '../styles/ScreenStyles';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import{ImgLetters, ImgTeddy} from '../assets/ImageIndex';

var WordLenght;
const WordLetters = [];
const Word=[];
const LetterList = [];
const secret = [];



const GameScreen = (props)=>{

  const [wrong , setWrong] = useState(0);
  const [right , setRight] = useState(0);
  const [trycount , setTrycount] = useState(0);

  const [game , setGame] = useState(true);


  if (game == true){
    WordInit(props.wordList);
    setGame(false);
  }

  const winState=()=>{
    if (compare(Word, secret) == true){
      props.winGame();
      setGame(true);
    }
  }

  const loseState=()=>{
    if (wrong == 6){
      props.stopGame();
      setGame(true);
    }
  }

  const handleUpdate=(L,index) =>{ 
    console.log(secret);
    if (secret.includes(L)){
      for (let index = 0; index < secret.length; index++) {
        if (secret[index]==L){
          WordLetters[index] = L.charCodeAt(0)-65;
          Word[index] = L;
        }      
      }
      setRight(right + 1);
    }

    else{
      setWrong(wrong + 1);
    }

    LetterList[index].pic = require('../assets/Wrong.png');

    setTrycount(trycount + 1);

    winState();
    loseState();
  }

  
  return (
    <View style={styles.container}>
      <Image source={ImgTeddy[wrong]}style={styles.Teddy} resizeMode='cover'/>   
      <Text>{secret}</Text>
      <StatusBar style="auto" />
      <FlatList
        keyExtractor={(item, index) => index.toString()}  
        data={WordLetters}
        extraData={trycount}
        renderItem={({item}) => <View style={styles.ListEmpty}>
          <ImageBackground source={require('../assets/walktheline.png')} style={styles.image}resizeMode='cover'>
              <Image source={ImgLetters[item]} style={styles.image}resizeMode='cover'/>
          </ImageBackground>         
        </View>}
        numColumns={7}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={LetterList}
        extraData={trycount}
        renderItem={itemData=>(
          <View style={styles.Alphabet}>
            <TouchableOpacity onPress={()=>{handleUpdate(itemData.item.Alphabet, itemData.item.id)}} activeOpacity = { .5 }>
              <View>
                <ImageBackground source={itemData.item.pic} style={styles.image}resizeMode='cover'>
                  <Text style={styles.Alphabet}>{itemData.item.Alphabet}</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        )}
        numColumns={7}
      />
    </View>
  );
  
}

function compare(arr1,arr2){

  var result = true;
  for (let index = 0; index < arr2.length; index++) {
    if (arr1[index] != secret[index]){
      result = false;
    }
  }

  return(result)
}

function WordInit(arr){

  var num = 1;
  var randomnum = Math.floor(Math.random() * arr.length)
  WordLenght = arr[randomnum].word.length;

  console.log(arr[randomnum].word);

  WordLetters.splice(0,WordLetters.length);
  LetterList.splice(0,LetterList.length);
  secret.splice(0,secret.length);
  Word.splice(0, Word.length);

  for (let index = 0; index < WordLenght; index++) {
    WordLetters.push('');   
  }
  for (let index = 0; index < 26; index++) {
    LetterList.push({id: index, pic: ImgLetters[index], Alphabet:String.fromCharCode(num+64) });   
    num++
  }


  for (let index = 0; index < arr[randomnum].word.length; index++) {
    secret.push(arr[randomnum].word.slice(index, index+1).toUpperCase());  
  }

} 

export default GameScreen;
