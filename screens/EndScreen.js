import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/ScreenStyles';
import Row from '../components/Row';

const EndScreen = (props)=>{



    return (
        
        <View style={styles.screen}>
        <Text style={styles.text}>Game Over</Text>
        <View>
        <Row>
            <View>
                <Button text="New game" onPress={() => props.newGame()} />
            </View>
            <View>
                <Button text="Main menu" onPress={() => props.exitGame()} />
            </View>
        </Row>
    </View> 



      </View>
    );
}

import {Text, View } from 'react-native';

import Button from '../components/Button';

const EndScreen = (props) => {
    //empty

}
export default EndScreen;