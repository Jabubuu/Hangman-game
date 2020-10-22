import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/ScreenStyles';
import Row from '../components/Row';
import{ImgTeddy} from '../assets/ImageIndex';

const EndScreen = (props)=>{



    return (
        
        <View style={styles.container}>
        <Image source={ImgTeddy[6]}style={styles.Teddy} resizeMode='cover'/>   
        <Text style={styles.textBlack}>Game Over</Text>
        <Text style={styles.textBlack}> Correct word was: {props.SecretWord}</Text>
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

export default EndScreen;