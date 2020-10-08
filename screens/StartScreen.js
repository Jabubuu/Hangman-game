
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import styles from '../styles/ScreenStyles';
import Row from '../components/Row';


const StartScreen = (props) => {
    const[start, setStart]=useState(false);

    const startGame=()=>{

        setStart(true);
    }

return (
    <View>
        <Text style={styles.title}>Hangman</Text>
        <Row>
            <View>
                <Text style={styles.textBlack}>New Game</Text>
                <Button text="Start" onPress={() => props.onStartGame()} />
            </View>
            <View>
                <Text style={styles.textBlack}>Add words</Text>
                <Button text="Add" onPress={() => props.onNewWord()} />
            </View>
        </Row>
    </View> 
    

);

} 
export default StartScreen;
