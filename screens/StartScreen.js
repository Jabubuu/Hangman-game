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
        <Row>
            <View>
                <Text style={styles.text}>New Game</Text>
                <Button text="Start" onPress={() => props.onStartGame()} />
            </View>
            <View>
                <Text style={styles.text}>Add words</Text>
                <Button text="Add" onPress={() => {addWords();}} />
            </View>
        </Row>
    </View> 
    

);

} 
export default StartScreen;

