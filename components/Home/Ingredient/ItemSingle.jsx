import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ItemSingle({ name, image }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.imgStyles} />
            </View>
            <View >
                <Text style={styles.textStyles}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        borderRadius: 45,
        overflow: 'hidden',
        marginHorizontal: 10

    }, imgStyles: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',

    },
    textStyles: {
        flexDirection: 'row',
        textAlign: 'center'
    }
})
