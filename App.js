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
  const[newWord, setNewWord]=useState(false);
  const[count, setCount]=useState(0);
  const[words, setWords]=useState([]);
  const uri = "https://hangman-291306.appspot.com/rest/hmanservice/getAll";

  const fetchData = async () => {
    let res = null;
    res=await fetch(uri);
    const response = await res.json();
    setWords(response);
  }
  const[addWordScreen, setAddWordScreen]=useState(false);
  const[winScreen, setWinScreen]=useState(false)
  const[words, setWords]=useState([]);

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
    fetchData();
  }

  const startAddWord=()=>{
    setShouldGameStop(false);
    setNewWord(true);
    fetchData();
    setWinScreen(false);
  }
  
  const stopGame=()=>{
    setShouldGameStop(true);
  }

  const winGame=()=>{
    setShouldGameStop(true);
    setWinScreen(true);
  }

  const onExit=()=>{
    setShouldGameStop(false);
    setNewGame(false)
    setNewWord(false)
  }

  fetchData();
  let content=<StartScreen onStartGame={startGame} onNewWord={startAddWord}/>;


  if (newGame == true){
    content=<GameScreen stopGame={stopGame} exitGame={onExit} onStartGame={startGame} wordList={words}/>;
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

  if (newWord == true){
    content=<AddScreen exitScreen={onExit}/>;
  }

  if (shouldGameStop==true){
    content=<EndScreen onStartGame={startGame} exitGame={onExit}/>;
  }
  if (addWordScreen == true) {
    content=<AddScreen wordExit={onExit} />;
  }
  if (winScreen == true) {
    content=<WinScreen newGame={startGame} exitGame={onExit}/>;
  }
  
  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}