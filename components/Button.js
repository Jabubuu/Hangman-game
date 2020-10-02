import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

export default ({ onPress, text, size }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>Nappi</Text>
            <Text>asdasdasd</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {

    },
    text: {

    },
});