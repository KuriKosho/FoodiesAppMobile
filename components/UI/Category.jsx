import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Ingredients({ title, showAll, style }) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={[styles.textStyles, style]}>{title}</Text>
            </View>
            <View >
                <Pressable android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                        styles.pressedContainer,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                    <Text style={[styles.show, style]}>{showAll}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 20
    },
    textStyles: {
        fontSize: 18,
        fontWeight: '700',
    },
    show: {
        fontSize: 18,
        fontWeight: '700',
        textDecorationLine: 'underline'
    }
})