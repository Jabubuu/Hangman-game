import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../styles/ScreenStyles';
import Button from '../components/Button';
import Row from '../components/Row';

const AddScreen = (props) => {
    const [newWord, setWord]=useState('');
    const [wordList, addWord]=useState('');

    const wordInputHandler=(enteredText) => {
        setWord(enteredText);
    }

    const addWordToList=() => {
        addWord(wordList=>[...wordList, {word:newWord}]);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Add your word to the game</Text>
            <TextInput placeholder="Your word"
            onChangeText={wordInputHandler}/>

            <Row>
                <Button text="Add word" onPress={addWordToList} />
                <Button text="Main menu" onPress={() => props.exitScreen()} />
            </Row>
        </View>
    );
}
export default AddScreen;