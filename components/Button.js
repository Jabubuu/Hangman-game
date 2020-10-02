import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>Nappi</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333333',
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    text: {
        color: '#fff',
        fontSize: 25,
    },
});