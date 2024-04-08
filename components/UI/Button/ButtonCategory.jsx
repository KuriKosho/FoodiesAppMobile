import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ButtonCategory({ content, style, textStyle }) {
    const [buttonColor, setButtonColor] = useState('#fff');

    return (
        <TouchableOpacity onPress={() => {
            setButtonColor(buttonColor === '#fff' ? '#F68F91' : "#fff");
        }}>
            <View style={[styles.buttonContainer, { backgroundColor: buttonColor }, style]}>
                <Text style={textStyle}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 43,
        minWidth: 60,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F68F91',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
});
