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
  
  const stopGame=()=>{
    setShouldGameStop(true);
  }

  const onExit=()=>{
    setShouldGameStop(false);
    setNewGame(false)
  }

  let content=<StartScreen onStartGame={startGame}/>;
  if (newGame == true){
    content=<GameScreen stopGame={stopGame} exitGame={onExit}/>;
  }
  if (shouldGameStop==true){
    <View style={styles.screen}>
</View>
    content=<EndScreen newGame={startGame} exitGame={onExit}/>;
  }
  
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hangman game</Text>
      {content}
    </View>
  );
}