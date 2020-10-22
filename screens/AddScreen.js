import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

import styles from '../styles/ScreenStyles';
import Button from '../components/Button';
import Row from '../components/Row';

const AddScreen = (props) => {
    const [newWord, setWord]=useState('');
    const [wordList, addWord]=useState('');

import {saveWord} from '../components/REST';

const AddScreen = (props) => {
    const [newWord, setWord]=useState('');
    const wordInputHandler=(enteredText) => {
        setWord(enteredText);
    }

    const addWordToList=() => {
        addWord(wordList=>[...wordList, {word:newWord}]);

    const addWord = async()=>{
        await saveWord(newWord);
        setWord('');
        Alert.alert("New Word added");
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Add your word to the game</Text>
            <TextInput placeholder="Your word"
            onChangeText={wordInputHandler}/>

            <Row>
                <Button text="Add word" onPress={addWordToList} />
                <Button text="Main menu" onPress={() => props.exitScreen()} />

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