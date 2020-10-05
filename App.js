import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View } from 'react-native';

import styles from './styles/ScreenStyles';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

export default function App() {
  
  
  const [shouldGameStop, setShouldGameStop]=useState(false);
  const[newGame, setNewGame]=useState(false);
  
  const startGame=()=>{
    setShouldGameStop(false);
    setNewGame(true);
  }
  
  const stopGame=(count)=>{
    setCount(count);
    setShouldGameStop(true);
  }

  let content=<StartScreen onStartGame={startGame}/>;
  if (newGame == true){
    content=<GameScreen stopGame={stopGame}/>;
  }
  if (shouldGameStop==true){
    <View style={styles.screen}>
</View>
    content=<EndScreen newGame={startGame} count={tryCount}/>;
  }
  
  

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hangman game</Text>
      {content}
    </View>
  );
}