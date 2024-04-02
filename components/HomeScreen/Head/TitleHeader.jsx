import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyles} numberOfLines={2}>What would you like to cook today, Chi?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 55,
        width: 250,
        height: 55,
        marginVertical: 20,
        marginTop: 20
    },
    titleStyles: {
        fontSize: 20,
        color: '#EB4F30',
        fontWeight: 'bold',
        fontFamily: 'Reem-Regular'
    }
})