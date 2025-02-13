import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import im from '@/assets/images/homepage/pancake.png'

export default function Trending({ all }) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.textStyles}>Trending</Text>
            </View>
            <View >
                <Pressable android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                        styles.pressedContainer,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                    <Text style={styles.show}></Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    textStyles: {
        fontSize: 18,
        fontWeight: '700',
    }, show: {
        fontSize: 18,
        fontWeight: '700',
        textDecorationLine: 'underline'
    }
})