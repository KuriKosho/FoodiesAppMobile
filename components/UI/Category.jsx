import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Category({ title, showAll, style, onPress }) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={[styles.textStyles, style]}>{title}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={onPress} >
                    <Text style={[styles.show, style]}>{showAll}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginBottom: 20,
        marginTop: 20
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