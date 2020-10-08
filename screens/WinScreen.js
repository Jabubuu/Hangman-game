import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/ScreenStyles';
import Row from '../components/Row';

const WinScreen = (props)=>{

    return (
        
        <View style={styles.screen}>
            <Text style={styles.title}>You Won</Text>
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

export default WinScreen;