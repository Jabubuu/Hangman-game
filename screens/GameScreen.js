import { StatusBar } from 'expo-status-bar';
import React, { useState, Component }from 'react';
import styles from '../styles/ScreenStyles';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ImageBackground, Alert } from 'react-native';

var pic = 'A';
var WordLenght;
const WordLetters = [];
const Word=[];
const LetterList = [];
const secret = [];
const secretWord = ['mug', 'carrage', 'board'];

WordInit();


const GameScreen = (props)=>{

  const [wrong , setWrong] = useState(0);
  const [right , setRight] = useState(0);
  const [trycount , setTrycount] = useState(0);


   const winState=()=>{
    if (compare(Word, secret) == true){
      props.stopGame(wrong);
    }
  }

  const handleUpdate=(L) =>{ 
    console.log(secret);
    if (secret.includes(L)){
      for (let index = 0; index < secret.length; index++) {
        if (secret[index]==L){
          WordLetters[index] = GetLetter(L);
          Word[index] = L;
        }      
      }
      setRight(right + 1);
    }
    else{
      setWrong(wrong + 1);
    }

    setTrycount(trycount + 1);

    winState();
  }

  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Teddy/HangTeddy'+ wrong + '.png')}style={styles.Teddy} resizeMode='cover'/>   
      <Text>{wrong}</Text>
      <Text>{right}</Text>
      <StatusBar style="auto" />
      <FlatList
        data={WordLetters}
        extraData={trycount}
        renderItem={({item}) => <View style={styles.ListEmpty}>
          <ImageBackground source={require('../assets/walktheline.png')} style={styles.image}resizeMode='cover'>
              <Text style={styles.Alphabet}>{item}</Text>
          </ImageBackground>         
        </View>}
        numColumns={WordLenght}
      />
      <FlatList
        data={LetterList}
        extraData={trycount}
        renderItem={itemData=>(
          <View style={styles.Alphabet}>
            <TouchableOpacity onPress={()=>{handleUpdate(itemData.item.Alphabet)}} activeOpacity = { .5 }>
              <View>
                <ImageBackground source={require('../assets/Letters/' + itemData.item.Alphabet + '.png')} style={styles.image}resizeMode='cover'>
                  <Text style={styles.Alphabet}>{itemData.item.Alphabet}</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        )}
        numColumns={5}
      />
    </View>
  );
  
}

export default GameScreen;

function compare(arr1,arr2){
  var result = true;
  for (let index = 0; index < arr2.length; index++) {
    if (arr1[index] != secret[index]){
      result = false;
    }
  }

  return(result)
}

function GetLetter(letter){
return(
  <Image source={require('../assets/Letters/'+ letter +'.png')}
    style={styles.image} resizeMode='cover'/>
)
}

function WordInit(){
  var num = 1;
  var randomnum = Math.floor(Math.random() * secretWord.length)
  WordLenght = secretWord[randomnum].length;

  WordLetters.splice(0,WordLetters.length);
  LetterList.splice(0,LetterList.length);
  secret.splice(0,secret.length);
  Word.splice(0, Word.length);

  for (let index = 0; index < WordLenght; index++) {
    WordLetters.push('');   
  }
  for (let index = 0; index < 26; index++) {
    LetterList.push({pic: GetLetter(String.fromCharCode(num+64)), Alphabet:String.fromCharCode(num+64) });   
    num++
  }


  for (let index = 0; index < secretWord[randomnum].length; index++) {
    secret.push(secretWord[randomnum].slice(index, index+1).toUpperCase());  
  }

}