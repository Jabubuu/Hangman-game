import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

import styles from '../styles/ScreenStyles';
import Button from '../components/Button';
import Row from '../components/Row';

const AddScreen = (props) => {
    const [newWord, setWord]=useState('');

    async function saveWord () {
        const response = await fetch("https://hangman-291306.appspot.com/rest/hmanservice/addjsonhman",
        {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({word:newWord})
    });
    Alert.alert("New Word added");
}
    const wordInputHandler=(enteredText) => {
        setWord(enteredText);
    }

    const addWord = async()=>{
        await saveWord();
        props.onAddWord(newWord);
        setWord('');
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.textBlack}>Add your word to the game</Text>
            <TextInput style={styles.textInput}placeholder="Your word"
            onChangeText={wordInputHandler}/>

            <Row>
                <Button text="Add word" onPress={addWord} />
                <Button text="Main menu" onPress={() => props.wordExit()} />
            </Row>
        </View>
    );
}
export default AddScreen;