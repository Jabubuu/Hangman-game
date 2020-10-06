import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/ScreenStyles';
import Button from '../components/Button';
import Row from '../components/Row';

const GameScreen = (props)=>{

    

    return (
        <View style={styles.screen}>
        <Text style={styles.text}>Letters and shit</Text>







        <Row>
            <View>
            <Button text='Back to menu' onPress={()=>props.exitGame()}/>
            </View>
            <View>
            <Button text='New game' onPress={()=>props.onStartGame()} />
            </View>
            <View>
                {/* testausta varten */}
                <Button text="End game" onPress={() => props.stopGame()} />     
            </View>
        </Row>
      </View>
    );


}

export default GameScreen;