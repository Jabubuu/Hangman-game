import React, {useState} from 'react';
import {Text, View } from 'react-native';

import styles from './styles/ScreenStyles';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';
import AddScreen from './screens/AddScreen';
import WinScreen from './screens/WinScreen';
import {fetchData} from './components/REST'

export default function App() {


  const [shouldGameStop, setShouldGameStop]=useState(false);
  const[newGame, setNewGame]=useState(false);
  const[count, setCount]=useState(0);
  const[addWordScreen, setAddWordScreen]=useState(false);
  const[winScreen, setWinScreen]=useState(false)
  const[words, setWords]=useState([]);

  const[Arvaus, setArvaus]=useState('');

  if(words.length == 0 || words == null) {
    getData();
  }

  async function getData() {
    const data = await fetchData();
    setWords(data);
  }
  
  const startGame=()=>{
    getData();
    setShouldGameStop(false);
    setNewGame(true);
    setWinScreen(false);
  }
  
  const stopGame=(secret)=>{
    setShouldGameStop(true);
    setArvaus(secret);
  }

  const winGame=(secret)=>{
    setShouldGameStop(true);
    setWinScreen(true);
    setArvaus(secret);
  }

  const onExit=()=>{
    setShouldGameStop(false);
    setNewGame(false);
    setAddWordScreen(false);
    setWinScreen(false);
    getData();
  }

  const startAddWord=()=>{
    setAddWordScreen(true);
  }

  let content=<StartScreen onStartGame={startGame} onNewWord={startAddWord}/>;
  if (newGame == true){
    content=<GameScreen stopGame={stopGame} winGame={winGame} wordList={words}/>;
  }
  if (shouldGameStop==true){
    content=<EndScreen newGame={startGame} exitGame={onExit} SecretWord={Arvaus}/>;
  }
  if (addWordScreen == true) {
    content=<AddScreen wordExit={onExit} />;
  }
  if (winScreen == true) {
    content=<WinScreen newGame={startGame} exitGame={onExit} SecretWord={Arvaus}/>;
  }
  
  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}