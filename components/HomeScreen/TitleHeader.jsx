import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyles}>What would you like to cook today?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 55,
        width: 250,
        height: 55,
        marginVertical: 10
    },
    titleStyles: {
        fontSize: 20,
        color: '#EB4F30',
        fontWeight: 'bold',
        fontFamily: 'Reem-Regular'
    }
})