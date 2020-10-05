import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Button from './components/Button';
//import ScreenStyles from './styles/ScreenStyles';


const StartScreen = (props) => {
    const[start, setStart]=useState(false);

    const startGame=()=>{

        setStart(true);
    }

return (
    <View style={styles.screen}>
        <Text style={ScreenStyles.title}>New Game</Text>
        <Button text="Start" onPress={() => {startGame();}} />

    </View> 

);

} 
export default StartScreen;

