import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonCategory({ content, style, textStyle, styleTouch, onPress,isFocused }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <TouchableOpacity disabled={isFocused} // Disable touchable when loading
            style={[styleTouch, isPressed && styles.pressedStyle]} // Apply pressed style conditionally
            onPress={onPress}
            onPressIn={handlePressIn} // Handle press in event
            onPressOut={handlePressOut} // Handle press out event
        >
            <View style={[styles.buttonContainer, { padding: 15 }, style]}>
                <Text style={[textStyle, isFocused ? {color:  "#000" }: {color: "#636363"}]}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        minWidth: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F68F91',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressedStyle: {
        backgroundColor: '#F68F91',
        borderRadius: 20,
        overflow: 'hidden'
    },
});
